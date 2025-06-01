
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
      // TODO: 여기에 실제 백엔드 API 호출 로직을 구현하세요
      // 예시: AWS Cognito, Supabase Auth, 또는 직접 구현한 인증 API
      const loginData = {
        id: id.trim(),
        password: password
      };

      console.log("로그인 시도:", loginData);

      // 임시 로그인 성공 처리 (실제 구현시 아래 코드를 백엔드 응답에 따라 수정)
      const response = await simulateLoginAPI(loginData);
      
      if (response.success) {
        // 로그인 성공시 토큰이나 사용자 정보를 localStorage에 저장
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userId', response.userId);
        
        toast({
          title: "로그인 성공",
          description: "환영합니다!",
        });

        // Home2 페이지로 리다이렉트
        navigate("/home2");
      } else {
        throw new Error(response.message || "로그인에 실패했습니다.");
      }

    } catch (error) {
      console.error("로그인 오류:", error);
      toast({
        title: "로그인 실패",
        description: error instanceof Error ? error.message : "로그인 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // 임시 로그인 API 시뮬레이션 함수 (실제 구현시 삭제하고 진짜 API 호출로 교체)
  const simulateLoginAPI = async (loginData: { id: string; password: string }) => {
    // 실제 구현시 이 함수를 삭제하고 진짜 API 호출로 교체하세요
    return new Promise<{ success: boolean; token?: string; userId?: string; message?: string }>((resolve) => {
      setTimeout(() => {
        // 임시로 모든 로그인을 성공으로 처리 (실제로는 서버에서 인증 확인)
        if (loginData.id && loginData.password) {
          resolve({
            success: true,
            token: 'temporary-jwt-token-' + Date.now(),
            userId: loginData.id
          });
        } else {
          resolve({
            success: false,
            message: "아이디 또는 비밀번호가 올바르지 않습니다."
          });
        }
      }, 1000); // 1초 지연으로 실제 API 호출 시뮬레이션
    });
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
    </div>
  );
};

export default LoginForm;
