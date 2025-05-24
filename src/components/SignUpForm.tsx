
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { Button } from "@/components/ui/button";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <h1 className="text-2xl font-bold text-sky-600">Campus Mate</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">회원가입</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
        />

        <InputField
          name="password"
          placeholder="비밀번호"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <InputField
          name="confirmPassword"
          placeholder="비밀번호 확인"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <InputField
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
        />

        <Button 
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          가입하기
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
