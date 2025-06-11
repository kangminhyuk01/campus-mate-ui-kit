from fastapi import FastAPI, Form, Request, Path
from fastapi.responses import JSONResponse
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import boto3
import json
import pymysql
import psycopg2

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
messages = []

def get_user_db():
  return pymysql.connect(
    host="mis.cluster-cml64gigeh1t.us-east-1.rds.amazonaws.com",
    user="user1",
    password="password123",
    database="user_db",
    autocommit=True
  )

#MySQL
def get_mis_db():
  return pymysql.connect(
    host="mis.cluster-cml64gigeh1t.us-east-1.rds.amazonaws.com",
    user="user",
    password="password123",
    database="mis_db",
    autocommit=True
  )

#PostgreSQL
def get_pg_conn():
  return psycopg2.connect(
    host="campus-mate.cluster-cml64gigeh1t.us-east-1.rds.amazonaws.com",
    user="postgres",
    password="campusmate2025",
    database="campus-mate"
  )

#임베딩 모델 호출
def get_embedding(text: str) -> list[float]:
    body = {
      "inputText": text,
      "dimensions": 512, # 선택 가능한 값: 256, 512, 1024
      "normalize": True # 벡터 정규화 여부
    }
    try:
      response = bedrock_client.invoke_model(
        modelId="amazon.titan-embed-text-v2:0",
        body=json.dumps(body),
        contentType="application/json",
        accept="application/json"
      )
      result = json.loads(response['body'].read())
      return result["embedding"]
    except Exception as e:
      print(f"[Embedding Error] {str(e)}")
      return []

# content 구성
def build_content(row):
    admission_year, grade, semester, category, subject, credit, prerequisite, note, major = row
    return f"""
전공: {major}
과목명: {subject}
기준 학번: {admission_year}
학년/학기: {grade}학년 {semester}
카테고리: {category}
학점: {credit}
설명: {note or '없음'}
선수과목: {prerequisite or '없음'}
"""

# 마이그레이션 함수 (embedding 없이 content만)
def migrate():
    mysql_conn = get_mis_db()
    mysql_cursor = mysql_conn.cursor()
    # 필요한 컬럼만 선택 (build_content 인자에 맞게)
    mysql_cursor.execute("""
        SELECT admission_year, grade, semester, category, subject, credit, prerequisite, note, major
        FROM graduation_requirements
    """)
    rows = mysql_cursor.fetchall()
    mysql_conn.close()

    pg_conn = get_pg_conn()
    pg_cursor = pg_conn.cursor()

    for idx, row in enumerate(rows, start=1):  # id는 1부터 순서대로 부여
        content = build_content(row)

        pg_cursor.execute("""
            INSERT INTO documents (id, content)
            VALUES (%s, %s)
            ON CONFLICT (id) DO NOTHING
        """, (idx, content))

    pg_conn.commit()
    pg_conn.close()

# 임베딩 업데이트 함수
def update_embeddings():
    pg_conn = None
    try:
        pg_conn = get_pg_conn()
        pg_cursor = pg_conn.cursor()

        pg_cursor.execute("SELECT id, content FROM documents WHERE embedding IS NULL")
        docs = pg_cursor.fetchall()

        for doc_id, content in docs:
            embedding = get_embedding(content)
            if embedding:  # 임베딩이 성공적으로 생성된 경우에만 업데이트
                vector_str = '[' + ','.join(map(str, embedding)) + ']'

                pg_cursor.execute("""
                    UPDATE documents SET embedding = %s::vector WHERE id = %s
                """, (vector_str, doc_id))

        pg_conn.commit()
        print(f"Embeddings updated for {len(docs)} documents")
        
    except Exception as e:
        print(f"[Embedding Update Error] {str(e)}")
    finally:
        if pg_conn:
            pg_conn.close()

@app.on_event("startup")
async def startup_event():
    migrate()
    update_embeddings() 

# RAG을 위한 벡터 검색 함수
def search_similar_documents(query: str, top_k: int = 5) -> list[dict]:
    try:
        # 질문을 임베딩으로 변환
        query_embedding = get_embedding(query)
        if not query_embedding:
            return []
        
        # PostgreSQL에서 벡터 유사도 검색
        pg_conn = get_pg_conn()
        pg_cursor = pg_conn.cursor()
        
        # 코사인 유사도를 사용한 벡터 검색
        vector_str = '[' + ','.join(map(str, query_embedding)) + ']'
        pg_cursor.execute("""
            SELECT id, content, 1 - (embedding <=> %s::vector) as similarity
            FROM documents 
            WHERE embedding IS NOT NULL
            ORDER BY embedding <=> %s::vector
            LIMIT %s
        """, (vector_str, vector_str, top_k))
        
        results = pg_cursor.fetchall()
        pg_conn.close()
        
        # 결과를 딕셔너리 형태로 변환
        documents = []
        for doc_id, content, similarity in results:
            documents.append({
                'id': doc_id,
                'content': content,
                'similarity': float(similarity)
            })
        
        return documents
        
    except Exception as e:
        print(f"[Vector Search Error] {str(e)}")
        return []

# 검색된 문서들을 컨텍스트로 구성하는 함수 
def build_rag_context(documents: list[dict]) -> str:
    if not documents:
        return "관련 정보를 찾을 수 없습니다."
    context = "다음은 관련 교육과정 정보입니다:\n\n"
    for i, doc in enumerate(documents, 1):
        context += f"[참고자료 {i}] (유사도: {doc['similarity']:.2f})\n"
        context += doc['content'] + "\n\n"
    return context

def invoke_model(model_id: str, user_input: str, prompt_type: str, messages: list[dict[str, str]]) -> str:
  
  # 벡터 검색으로 관련 문서 찾기
  relevant_docs = search_similar_documents(user_input, top_k=3)
  rag_context = build_rag_context(relevant_docs)
  # Prompt와 temperature를 prompt_type에 따라 정의
  if prompt_type == "friend":
    system_prompt = """당신은 국민대학교 경영정보학과 선배이다. 친근하게 반말을 사용하여 대화하라. 모르는 것을 알기 쉽게 풀어서 설명해주고 고민이 있다면 들어주어라."""
    temperature = 0.7  #창의적/자연스러운 응답
  else:
    system_prompt = """당신은 국민대학교 학사 전문가이다. 다음 교육과정 정보를 바탕으로 정확하게 답변하시오:
    {rag_context}
    답변 시 다음 사항을 준수하시오:
    - 제공된 교육과정 정보 내에서만 답변
    - 정보가 불충분하면 솔직히 "해당 정보가 부족합니다"라고 답변
    - 유사도가 낮은 정보(0.7 미만)는 신중하게 사용
    - 항상 존댓말 사용
    """.format(rag_context=rag_context)
    temperature = 0.1  #정확하고 일관된 답변

  messages.append({"role": "user", "content": user_input}) #현재 질문 추가

  payload = {
      "anthropic_version": "bedrock-2023-05-31",
      "max_tokens": 800,
      "system": system_prompt,
      "temperature": temperature,  #동적으로 설정된 temperature 사용
      "messages": messages #이전 대화 + 현재 질문
  }

  try:
    # Bedrock API 호출
    response = bedrock_client.invoke_model(
        modelId=model_id,
        contentType='application/json',
        accept='application/json',
        body=json.dumps(payload)
    )
    # 응답 처리
    response_body = json.loads(response['body'].read())
    return response_body['content'][0]['text']  # 최종 응답 반환
  except Exception as e:
    print(f"[Error] {str(e)}")  # 로그 출력
    return "잠시 후에 다시 시도해 주세요."

# Bedrock 클라이언트 설정
bedrock_client = boto3.client(
  'bedrock-runtime',
  region_name='us-east-1'
)


@app.post("/api/login")
def login_process(request: Request, username: str = Form(...), password: str = Form(...)):
    conn = None
    try:
        # MySQL 데이터베이스 연결
        conn = get_user_db()
        # 커서 열고 사용자 정보 조회
        with conn.cursor() as cursor:
            cursor.execute(
                "SELECT id, password, nickname FROM users WHERE username = %s",
                (username,)
            )
            user = cursor.fetchone()

            # 사용자 정보가 없거나 비밀번호 불일치 시 실패 처리
            if not user or user[1] != password:
                return JSONResponse(content={"error": "로그인 실패"}, status_code=401)

            # 로그인 성공 시
            return {"message": "로그인 성공", "nickname": user[2]}
        
    # DB 연결 오류 처리
    except pymysql.MySQLError as e:
        return HTMLResponse(content=f"<h3>DB 연결 오류: {str(e)}</h3>", status_code=500)

    # 커넥션이 존재할 경우 반드시 닫아줌
    finally:
        if conn:
            try:
                conn.close()
            except:
                pass


@app.post("/api/register")
def register_user(
    request: Request,
    username: str = Form(...),
    password: str = Form(...),
    nickname: str = Form(...)
):
    conn = None
    try:
        # MySQL 데이터베이스 연결
        conn = get_user_db()
        # 사용자 정보 INSERT 실행
        with conn.cursor() as cursor:
            cursor.execute(
                "INSERT INTO users (username, password, nickname) VALUES (%s, %s, %s)",
                (username, password, nickname)
            )
        # 회원가입 성공 메시지 반환
        return HTMLResponse(content="<h3>회원가입 성공! <a href='/login'>로그인</a></h3>")

    # 이미 존재하는 사용자 처리 (중복 아이디)
    except pymysql.err.IntegrityError:
        return HTMLResponse(content="<h3>이미 존재하는 아이디입니다.</h3>", status_code=400)

    # 기타 MySQL 오류 처리
    except pymysql.MySQLError as e:
        return HTMLResponse(content=f"<h3>DB 오류: {e}</h3>", status_code=500)

    # 커넥션이 존재할 경우 반드시 닫아줌
    finally:
        if conn:
            try:
                conn.close()
            except:
                pass
            

#채팅 화면
@app.get("/api/chat")
async def prompt_type(prompt_type: str):
    return {"message": f"Prompt type is {prompt_type}"}

@app.post("/api/chat")
async def chat_api(user_input: str = Form(...), prompt_type: str = Form(...)):
    global messages
    model_id = "anthropic.claude-3-5-sonnet-20240620-v1:0"

    response = invoke_model(model_id, user_input, prompt_type, messages)
    messages.append({"role": "assistant", "content": response})

    return JSONResponse(content={
        "response": response,
        "user_input": user_input,
        "chat_history": messages,
        "prompt_type": prompt_type
    })
