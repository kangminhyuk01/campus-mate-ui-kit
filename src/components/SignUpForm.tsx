
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

  // ⭐ 실제 회원가입 API 호출 함수
  const signUpToAPI = async (signupData: { id: string; password: string; name: string }) => {
    // 🔥 중요: 여기서 localhost:8000을 실제 EC2 인스턴스의 퍼블릭 IP로 변경해야 합니다
    // 예시: 'http://your-ec2-public-ip:8000/api/auth/signup'
    // 또는 도메인이 있다면: 'https://your-domain.com/api/auth/signup'
    // EC2 보안 그룹에서 포트 8000이 열려있는지 확인 필요
    const API_URL = 'http://localhost:8000/api/auth/signup';
    
    console.log('회원가입 API 요청 시작:', API_URL);
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 필요시 추가 헤더 설정
        // 'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: signupData.id,  // 백엔드 API 스펙에 맞게 필드명 조정
        password: signupData.password,
        name: signupData.name     // 사용자 이름
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('회원가입 API 오류:', response.status, errorData);
      throw new Error(errorData.detail || errorData.message || '회원가입에 실패했습니다.');
    }

    const data = await response.json();
    console.log('회원가입 성공 응답:', data);
    
    return {
      success: true,
      message: data.message || '회원가입이 완료되었습니다.',
      userId: data.user_id || data.id,
      userName: data.username || signupData.name
    };
  };

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
      const signupData = {
        id: formData.id.trim(),
        password: formData.password,
        name: formData.name.trim()
      };

      console.log("EC2 FastAPI 백엔드 회원가입 시도:", signupData);

      // 🚀 실제 EC2 FastAPI 백엔드로 회원가입 요청
      const response = await signUpToAPI(signupData);
      
      if (response.success) {
        toast({
          title: "회원가입 성공",
          description: response.message || "계정이 성공적으로 생성되었습니다. 로그인해주세요.",
        });

        // 로그인 페이지로 리다이렉트
        navigate("/login");
      }

    } catch (error) {
      console.error("EC2 백엔드 회원가입 오류:", error);
      
      // 네트워크 오류인지 확인
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast({
          title: "연결 오류",
          description: "EC2 서버에 연결할 수 없습니다. IP 주소와 포트를 확인해주세요.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "회원가입 실패",
          description: error instanceof Error ? error.message : "회원가입 중 오류가 발생했습니다.",
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
        <h2 className="text-3xl font-bold text-gray-900 mb-2">회원가입</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          name="id"
          placeholder="ID (4자 이상)"
          value={formData.id}
          onChange={handleChange}
          className={isLoading ? "bg-gray-100" : ""}
          disabled={isLoading}
        />

        <InputField
          name="password"
          placeholder="비밀번호 (6자 이상)"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className={isLoading ? "bg-gray-100" : ""}
          disabled={isLoading}
        />

        <InputField
          name="confirmPassword"
          placeholder="비밀번호 확인"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={isLoading ? "bg-gray-100" : ""}
          disabled={isLoading}
        />

        <InputField
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          className={isLoading ? "bg-gray-100" : ""}
          disabled={isLoading}
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

      {/* 
      📋 EC2 인스턴스에서 회원가입 백엔드 연결 설정 방법:

      1. EC2 인스턴스 FastAPI 백엔드 설정:
         - main.py에 회원가입 엔드포인트 추가: @app.post("/api/auth/signup")
         - 사용자 생성 로직 구현 (데이터베이스 연동 또는 파일 저장)
         - ID 중복 검사 로직 추가
         - 비밀번호 해싱 처리 (bcrypt 등 사용 권장)

      2. EC2 보안 그룹 설정:
         - 인바운드 규칙에서 포트 8000 추가 (소스: 0.0.0.0/0 또는 특정 IP)
         - HTTP (80), HTTPS (443) 포트도 필요시 추가

      3. 프론트엔드 연결 설정:
         - 위의 API_URL에서 localhost:8000을 EC2 퍼블릭 IP로 변경
         - 예시: 'http://123.456.789.012:8000/api/auth/signup'
         - 도메인이 있다면: 'https://yourdomain.com/api/auth/signup'

      4. CORS 설정 확인:
         - FastAPI main.py에서 CORS 미들웨어가 프론트엔드 도메인을 허용하는지 확인
         - allow_origins에 프론트엔드 URL 추가

      5. 백엔드 API 응답 형식 예시:
         성공시:
         {
           "message": "회원가입이 완료되었습니다.",
           "user_id": "user123",
           "username": "사용자이름"
         }
         
         실패시 (ID 중복):
         {
           "detail": "이미 사용중인 ID입니다."
         }

      6. 백엔드 FastAPI 코드 예시:
         @app.post("/api/auth/signup")
         async def signup(user_data: UserSignup):
             # ID 중복 검사
             if check_user_exists(user_data.username):
                 raise HTTPException(status_code=400, detail="이미 사용중인 ID입니다.")
             
             # 비밀번호 해싱
             hashed_password = hash_password(user_data.password)
             
             # 사용자 생성
             user = create_user(user_data.username, hashed_password, user_data.name)
             
             return {"message": "회원가입이 완료되었습니다.", "user_id": user.id, "username": user.username}

      7. 환경별 URL 설정 (권장):
         - 개발: http://localhost:8000
         - 스테이징: http://your-ec2-ip:8000  
         - 프로덕션: https://your-domain.com
      */}
    </div>
  );
};

export default SignUpForm;
