
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import PasswordResetPopup from "./PasswordResetPopup";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // ⭐ 실제 로그인 API 호출 함수
  const loginToAPI = async (loginData: { id: string; password: string }) => {
    // 🔥 중요: 여기서 localhost:8000을 실제 EC2 인스턴스의 퍼블릭 IP로 변경해야 합니다
    // 예시: 'http://your-ec2-public-ip:8000/api/auth/login'
    // 또는 도메인이 있다면: 'https://your-domain.com/api/auth/login'
    // EC2 보안 그룹에서 포트 8000이 열려있는지 확인 필요
    const API_URL = 'http://localhost:8000/api/login';
    
    console.log('로그인 API 요청 시작:', API_URL);
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 필요시 추가 헤더 설정
        // 'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: loginData.id,  // 백엔드 API 스펙에 맞게 필드명 조정
        password: loginData.password
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('로그인 API 오류:', response.status, errorData);
      throw new Error(errorData.detail || errorData.message || '로그인에 실패했습니다.');
    }

    const data = await response.json();
    console.log('로그인 성공 응답:', data);
    
    return {
      success: true,
      token: data.access_token || data.token,  // 백엔드 응답 구조에 맞게 조정
      userId: data.user_id || data.id || loginData.id,
      userName: data.username || data.name || loginData.id
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 입력값 유효성 검사
    if (!id.trim() || !password.trim()) {
      toast({
        title: "입력 오류",
        description: "ID와 비밀번호를 모두 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const loginData = {
        id: id.trim(),
        password: password
      };

      console.log("EC2 FastAPI 백엔드 로그인 시도:", loginData);

      // 🚀 실제 EC2 FastAPI 백엔드로 로그인 요청
      const response = await loginToAPI(loginData);
      
      if (response.success) {
        // 로그인 성공시 토큰과 사용자 정보를 localStorage에 저장
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userId', response.userId);
        if (response.userName) {
          localStorage.setItem('userName', response.userName);
        }
        
        toast({
          title: "로그인 성공",
          description: "환영합니다!",
        });

        // Home2 페이지로 리다이렉트
        navigate("/home2");
      }

    } catch (error) {
      console.error("EC2 백엔드 로그인 오류:", error);
      
      // 네트워크 오류인지 확인
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast({
          title: "연결 오류",
          description: "EC2 서버에 연결할 수 없습니다. IP 주소와 포트를 확인해주세요.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "로그인 실패",
          description: error instanceof Error ? error.message : "로그인 중 오류가 발생했습니다.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">로그인</h2>
        <p className="text-gray-600">Campus Mate에 로그인하세요</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-2">
            ID
          </label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            placeholder="ID를 입력하세요"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            placeholder="비밀번호를 입력하세요"
            required
            disabled={isLoading}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
              disabled={isLoading}
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              로그인 상태 유지
            </label>
          </div>
          <PasswordResetPopup>
            <button type="button" className="text-sm text-sky-600 hover:text-sky-500" disabled={isLoading}>
              비밀번호를 잊으셨나요?
            </button>
          </PasswordResetPopup>
        </div>

        <Button 
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          계정이 없으신가요?{" "}
          <Link to="/signup" className="text-sky-600 hover:text-sky-500 font-medium">
            회원가입
          </Link>
        </p>
      </div>

      {/* 
      📋 EC2 인스턴스에서 백엔드 연결 설정 방법:

      1. EC2 인스턴스 FastAPI 백엔드 설정:
         - main.py에 로그인 엔드포인트 추가: @app.post("/api/login")
         - 사용자 인증 로직 구현 (데이터베이스 연동 또는 간단한 하드코딩)
         - JWT 토큰 생성 및 반환 로직 추가

      2. EC2 보안 그룹 설정:
         - 인바운드 규칙에서 포트 8000 추가 (소스: 0.0.0.0/0 또는 특정 IP)
         - HTTP (80), HTTPS (443) 포트도 필요시 추가

      3. 프론트엔드 연결 설정:
         - 위의 API_URL에서 localhost:8000을 EC2 퍼블릭 IP로 변경
         - 예시: 'http://123.456.789.012:8000/api/auth/login'
         - 도메인이 있다면: 'https://yourdomain.com/api/auth/login'

      4. CORS 설정 확인:
         - FastAPI main.py에서 CORS 미들웨어가 프론트엔드 도메인을 허용하는지 확인
         - allow_origins에 프론트엔드 URL 추가

      5. 백엔드 API 응답 형식 예시:
         {
           "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
           "token_type": "bearer",
           "user_id": "user123",
           "username": "사용자이름"
         }

      6. 환경별 URL 설정 (권장):
         - 개발: http://localhost:8000
         - 스테이징: http://your-ec2-ip:8000  
         - 프로덕션: https://your-domain.com
      */}
    </div>
  );
};

export default LoginForm;
