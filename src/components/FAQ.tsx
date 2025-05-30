
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FriendlyChatFooter from './FriendlyChatFooter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  const navigate = useNavigate();

  const handleCasualMode = () => {
    navigate('/friendlychat');
  };

  const handlePoliteMode = () => {
    navigate('/assistchat');
  };

  const handleHomeClick = () => {
    navigate('/home2');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  const faqData = [
    {
      question: "Q. 경영정보학과 졸업요건(졸업인증제 충족)이 궁금해요.",
      answer: "A. 제1전공의 심화전공 이수(전공선택 최저이수학점년 18학점 이상 초과 이수)\n-다전공 이수\n-부전공 이수\n이 중 택 1 이수가 공통요건입니다."
    },
    {
      question: "Q. 경영정보학과의 수업은 어떻게 진행되나요?",
      answer: "A. 경영정보학과의 수업은 이론과 실습을 병행하여 진행됩니다. 프로그래밍, 데이터베이스, 시스템 분석 등의 실무 중심 교육이 제공됩니다."
    },
    {
      question: "Q. 다전공 신청기간과 경영대학 다전공 지원조건과 전형이 궁금해요.",
      answer: "A. 다전공 신청은 매 학기 정해진 기간에 진행되며, 경영대학의 경우 일정 학점 이상과 성적 조건을 만족해야 합니다."
    },
    {
      question: "Q. 전공선택과 전공필수 차이는 뭐예요?",
      answer: "A. 전공필수는 반드시 이수해야 하는 과목이고, 전공선택은 전공 관련 과목 중에서 선택하여 이수할 수 있는 과목입니다."
    },
    {
      question: "Q. 부전공과 다전공의 차이점이 뭔가요?",
      answer: "A. 부전공은 21학점 이상 이수하면 되고, 다전공은 해당 전공의 졸업요건을 모두 충족해야 합니다."
    },
    {
      question: "Q. 복수전공 포기 시, 다시 전공 학점을 채워야 하나요?",
      answer: "A. 복수전공을 포기하면 주전공의 졸업요건만 충족하면 되므로, 추가로 전공 학점을 채울 필요는 없습니다."
    },
    {
      question: "Q. 계절학기 수강신청은 언제 하는 건가요?",
      answer: "A. 계절학기 수강신청은 정규학기 종료 후 방학 중에 진행되며, 구체적인 일정은 학사일정을 확인하시기 바랍니다."
    },
    {
      question: "Q. 재수강하는 과목 신청 방법이 궁금해요.",
      answer: "A. 재수강은 수강신청 기간 중 재수강 메뉴를 통해 신청할 수 있으며, F학점을 받은 과목에 한해 재수강이 가능합니다."
    }
  ];

  const sidebarItems = [
    "Dashboard",
    "Messages", 
    "Settings",
    "FAQ"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Custom Header with proper navigation */}
      <header className="flex flex-col justify-center items-center px-20 py-7 w-full text-base font-medium leading-none bg-white max-md:px-5 max-md:max-w-full">
        <div className="overflow-hidden px-0.5 max-w-full rounded-2xl bg-cyan-700 bg-opacity-20 shadow-[0px_4px_24px_rgba(0,0,0,0.16)] w-[886px]">
          <nav className="flex flex-wrap gap-5 justify-between py-4 pr-3.5 pl-8 w-full bg-sky-100 bg-blend-normal max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-10 my-auto text-neutral-800">
              <h1 className="my-auto text-2xl font-extrabold tracking-tighter leading-none basis-auto">
                Campus Mate
              </h1>
              <button onClick={handleHomeClick} className="my-auto hover:text-sky-600 transition-colors">Home</button>
              <a href="#" className="my-auto">Features</a>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleLogoutClick}
                className="px-2.5 py-2 rounded-lg border-2 border-solid border-neutral-800 text-neutral-800 hover:bg-gray-100 transition-colors"
              >
                Log out
              </button>
              <button className="px-4 py-2 text-black bg-sky-100 rounded-lg border border-black border-solid hover:bg-sky-200 transition-colors">
                Try it free
              </button>
            </div>
          </nav>
        </div>
      </header>
      
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

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-gray-300 rounded-lg"
                >
                  <AccordionTrigger className="px-4 py-4 text-sm text-black text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-sm text-black whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
