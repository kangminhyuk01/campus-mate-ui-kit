
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FriendlyChatHeader from './FriendlyChatHeader';
import FriendlyChatFooter from './FriendlyChatFooter';
import FAQItem from './FAQItem';

const FAQ = () => {
  const navigate = useNavigate();

  const handleCasualMode = () => {
    navigate('/friendlychat');
  };

  const handlePoliteMode = () => {
    navigate('/assistchat');
  };

  const faqQuestions = [
    "Q. 경영정보학과 졸업요건(졸업인증제 충족)이 궁금해요.",
    "Q. 경영정보학과의 수업은 어떻게 진행되나요?",
    "Q. 다전공 신청기간과 경영대학 다전공 지원조건과 전형이 궁금해요.",
    "Q. 전공선택과 전공필수 차이는 뭐예요?",
    "Q. 부전공과 다전공의 차이점이 뭔가요?",
    "Q. 복수전공 포기 시, 다시 전공 학점을 채워야 하나요?",
    "Q. 계절학기 수강신청은 언제 하는 건가요?",
    "Q. 재수강하는 과목 신청 방법이 궁금해요."
  ];

  const sidebarItems = [
    "Dashboard",
    "Messages", 
    "Settings",
    "FAQ"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <FriendlyChatHeader />
      
      <div className="flex flex-1 justify-center px-6">
        <div className="w-full max-w-7xl flex gap-8">
          {/* Left Sidebar */}
          <aside className="w-48 flex-shrink-0">
            <nav className="space-y-2 mt-6">
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className={`px-3 py-2 text-sm ${
                    item === "FAQ" 
                      ? "font-semibold text-gray-900" 
                      : "text-gray-600 hover:text-gray-900"
                  } cursor-pointer`}
                >
                  {item}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-12 text-black mt-6">
              FAQ
            </h1>

            <div className="space-y-4">
              {faqQuestions.map((question, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-lg p-4 flex items-center justify-between hover:shadow-sm transition-shadow"
                >
                  <p className="text-sm text-black flex-1">
                    {question}
                  </p>
                  <button className="ml-4 hover:opacity-70 transition-opacity">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform transition-transform"
                    >
                      <path 
                        d="M6 9L12 15L18 9" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </main>

          {/* Right Side - Mode Toggle Buttons */}
          <aside className="w-48 flex-shrink-0">
            <div className="flex flex-col mt-11 w-full text-base font-bold text-sky-500 whitespace-nowrap">
              <button
                onClick={handleCasualMode}
                className="flex gap-2 self-start hover:opacity-70 transition-opacity"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/07047f994a8e2b4d38f39bce615c29867f90818e?placeholderIfAbsent=true"
                  alt="Casual mode"
                  className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]"
                />
                <span className="my-auto">
                  반말모드하기
                  <br />
                </span>
              </button>
              <button
                onClick={handlePoliteMode}
                className="flex gap-2 items-center mt-8 hover:opacity-70 transition-opacity"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/024bceaf7582109df0da190c5156502c8db9e40b?placeholderIfAbsent=true"
                  alt="Polite mode"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[90px] w-[45px]"
                />
                <span className="my-auto w-[107px]">
                  존댓말모드하기
                  <br />
                </span>
              </button>
            </div>
          </aside>
        </div>
      </div>

      <FriendlyChatFooter />
    </div>
  );
};

export default FAQ;
