
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import boto3
import json
import os
from typing import List, Optional

app = FastAPI(title="Campus Mate API", version="1.0.0")

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # React 개발 서버
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Bedrock 클라이언트 초기화
bedrock_client = boto3.client(
    'bedrock-runtime',
    region_name='us-east-1',  # 사용할 리전으로 변경
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY')
)

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    conversation_history: List[Message] = []

class ChatResponse(BaseModel):
    response: str
    status: str

@app.get("/")
async def root():
    return {"message": "Campus Mate FastAPI Server"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat_with_claude(request: ChatRequest):
    try:
        # 대화 히스토리를 Claude 형식으로 변환
        messages = []
        for msg in request.conversation_history:
            if msg.role in ['user', 'assistant']:
                messages.append({
                    "role": msg.role,
                    "content": [{"type": "text", "text": msg.content}]
                })
        
        # 새 메시지 추가
        messages.append({
            "role": "user",
            "content": [{"type": "text", "text": request.message}]
        })

        # Bedrock Claude 3.5 Sonnet 호출
        body = {
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 1000,
            "messages": messages,
            "temperature": 0.7,
            "top_p": 0.9
        }

        response = bedrock_client.invoke_model(
            modelId="anthropic.claude-3-5-sonnet-20240620-v1:0",
            body=json.dumps(body),
            contentType="application/json",
            accept="application/json"
        )

        # 응답 파싱
        response_body = json.loads(response['body'].read())
        claude_response = response_body['content'][0]['text']

        return ChatResponse(
            response=claude_response,
            status="success"
        )

    except Exception as e:
        print(f"Error calling Claude: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Claude API 호출 중 오류가 발생했습니다: {str(e)}"
        )

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "Campus Mate API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
