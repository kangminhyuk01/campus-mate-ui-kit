
# Campus Mate FastAPI Backend

## 설치 및 실행

### 1. 필요한 패키지 설치
```bash
pip install -r requirements.txt
```

### 2. 환경변수 설정
`.env.example`을 `.env`로 복사하고 AWS 자격증명을 입력하세요:
```bash
cp .env.example .env
```

### 3. 서버 실행
```bash
# 개발 모드로 실행
python main.py

# 또는 uvicorn으로 직접 실행
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

# 또는 스크립트 사용
chmod +x start_server.sh
./start_server.sh
```

## EC2 배포 가이드

### 1. EC2 인스턴스 설정
- Python 3.8+ 설치
- pip 업그레이드
- 필요한 AWS 권한 설정 (Bedrock 접근)

### 2. 보안 그룹 설정
- 인바운드 규칙에 포트 8000 추가
- HTTP (80), HTTPS (443) 포트도 필요시 추가

### 3. 프로덕션 배포
```bash
# PM2로 프로세스 관리 (옵션)
npm install -g pm2
pm2 start "uvicorn main:app --host 0.0.0.0 --port 8000" --name campusmate-api

# 또는 systemd 서비스로 등록
sudo systemctl enable campusmate-api
sudo systemctl start campusmate-api
```

## API 엔드포인트

- `GET /`: 서버 상태 확인
- `POST /api/chat`: Claude와 채팅
- `GET /health`: 헬스체크

## 환경변수

- `AWS_ACCESS_KEY_ID`: AWS 액세스 키
- `AWS_SECRET_ACCESS_KEY`: AWS 시크릿 키  
- `AWS_DEFAULT_REGION`: AWS 리전 (기본값: us-east-1)
