
import React from 'react';
import FriendlyChatHeader from './FriendlyChatHeader';
import FAQItem from './FAQItem';

const FAQ = () => {
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
    <div className="min-h-screen bg-white">
      <FriendlyChatHeader />
      
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-48 p-6">
          <nav className="space-y-2">
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
        <main className="flex-1 p-6">
          <h1 className="text-4xl font-bold text-center mb-12 text-black">
            FAQ
          </h1>

          <div className="max-w-4xl mx-auto space-y-4">
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
      </div>
    </div>
  );
};

export default FAQ;
