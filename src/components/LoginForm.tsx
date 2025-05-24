
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import PasswordResetPopup from "./PasswordResetPopup";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if both email and password are not empty
    if (email.trim() !== "" && password.trim() !== "") {
      console.log("Login attempt:", { email, password });
      // Redirect to Home2 page
      navigate("/home2");
    } else {
      console.log("Login failed: Email or password is empty");
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            이메일
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            placeholder="이메일을 입력하세요"
            required
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
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              로그인 상태 유지
            </label>
          </div>
          <PasswordResetPopup>
            <button type="button" className="text-sm text-sky-600 hover:text-sky-500">
              비밀번호를 잊으셨나요?
            </button>
          </PasswordResetPopup>
        </div>

        <Button 
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          로그인
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
