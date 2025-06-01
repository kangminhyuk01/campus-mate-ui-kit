
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    // ID 유효성 검사
    if (!formData.id.trim()) {
      toast({
        title: "입력 오류",
        description: "ID를 입력해주세요.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.id.length < 4) {
      toast({
        title: "입력 오류",
        description: "ID는 4자 이상이어야 합니다.",
        variant: "destructive",
      });
      return false;
    }

    // 비밀번호 유효성 검사
    if (!formData.password.trim()) {
      toast({
        title: "입력 오류",
        description: "비밀번호를 입력해주세요.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password.length < 6) {
      toast({
        title: "입력 오류",
        description: "비밀번호는 6자 이상이어야 합니다.",
        variant: "destructive",
      });
      return false;
    }

    // 비밀번호 확인 검사
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "입력 오류",
        description: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
      });
      return false;
    }

    // 이름 유효성 검사
    if (!formData.name.trim()) {
      toast({
        title: "입력 오류",
        description: "이름을 입력해주세요.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // TODO: 여기에 실제 백엔드 API 호출 로직을 구현하세요
      // 예시: AWS Cognito, Supabase Auth, 또는 직접 구현한 회원가입 API
      const signupData = {
        id: formData.id.trim(),
        password: formData.password,
        name: formData.name.trim()
      };

      console.log("회원가입 시도:", signupData);

      // 임시 회원가입 성공 처리 (실제 구현시 아래 코드를 백엔드 응답에 따라 수정)
      const response = await simulateSignUpAPI(signupData);
      
      if (response.success) {
        toast({
          title: "회원가입 성공",
          description: "계정이 성공적으로 생성되었습니다. 로그인해주세요.",
        });

        // 로그인 페이지로 리다이렉트
        navigate("/login");
      } else {
        throw new Error(response.message || "회원가입에 실패했습니다.");
      }

    } catch (error) {
      console.error("회원가입 오류:", error);
      toast({
        title: "회원가입 실패",
        description: error instanceof Error ? error.message : "회원가입 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // 임시 회원가입 API 시뮬레이션 함수 (실제 구현시 삭제하고 진짜 API 호출로 교체)
  const simulateSignUpAPI = async (signupData: { id: string; password: string; name: string }) => {
    // 실제 구현시 이 함수를 삭제하고 진짜 API 호출로 교체하세요
    return new Promise<{ success: boolean; message?: string }>((resolve) => {
      setTimeout(() => {
        // 임시로 ID 중복 체크 시뮬레이션
        if (signupData.id === 'admin' || signupData.id === 'test') {
          resolve({
            success: false,
            message: "이미 사용중인 ID입니다."
          });
        } else {
          resolve({
            success: true
          });
        }
      }, 1500); // 1.5초 지연으로 실제 API 호출 시뮬레이션
    });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">회원가입</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          name="id"
          placeholder="ID (4자 이상)"
          value={formData.id}
          onChange={handleChange}
          className={isLoading ? "bg-gray-100" : ""}
        />

        <InputField
          name="password"
          placeholder="비밀번호 (6자 이상)"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className={isLoading ? "bg-gray-100" : ""}
        />

        <InputField
          name="confirmPassword"
          placeholder="비밀번호 확인"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={isLoading ? "bg-gray-100" : ""}
        />

        <InputField
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          className={isLoading ? "bg-gray-100" : ""}
        />

        <Button 
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "가입 중..." : "가입하기"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          이미 계정이 있으신가요?{" "}
          <Link to="/login" className="text-sky-600 hover:text-sky-500 font-medium">
            로그인하기
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
