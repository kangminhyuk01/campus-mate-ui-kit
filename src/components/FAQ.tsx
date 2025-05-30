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
      answer: "A. -제 1전공의 심화전공 이수(전공선택 최저이수학점보다 18학점 이상 초과 이수)\n-다전공 이수\n-부전공 이수\n이 중 택 1 이수가 공통요건입니다."
    },
    {
      question: "Q. 경영정보학과의 수업은 어떻게 진행되나요?",
      answer: "A. 경영정보학과는 전공필수 과목을 중심으로 경영과 IT 역량을 융합적으로 기를 수 있도록 설계되어 있습니다.\n학년별 수업 흐름은 다음과 같습니다:\n  - **1학년**: 기초교양(글쓰기, College English, English Conversation, 컴퓨터프로그래밍 1·2) + 전공기초(현대경영과 비즈니스모델, 비즈니스IT실무, 유레카프로젝트, 경영정보학원론)\n- 2학년: 경영통계, 데이터베이스입문, 프론트엔드프로그래밍, 데이터베이스실무\n- 3학년: 시스템 개발 및 관리 영역 → HCI와 UX혁신(종합설계), 비즈니스애널리틱스개론\n- 4학년: 캡스톤디자인\n- 공통: 학년 관계없이 S-Team Class 또는 사제동행 세미나 중 1과목을 이수\n* 25학번 기준으로 표기"
    },
    {
      question: "Q. 다전공 신청기간과 경영대학 다전공 지원조건과 전형이 궁금해요.",
      answer: "A. 다전공은 3차~ 7차 학기 재학생을 대상으로 각 학년도 4월 및 10월에 신청 받습니다.\n계열에 관계없이 전 학부 지원 가능하며 입학정원의 80%이내에서 선발하고 있습니다.\n경영대학은 기업경영학부, 회계세무학과는 다전공 지원이 불가하고 다른 학과(학부)는 따로 지원조건과 전형을 명시하고 있지 않습니다."
    },
    {
      question: "Q. 전공선택과 전공필수 차이는 뭐예요?",
      answer: "A. 전공필수 : 학과별로 졸업을 위하여 반드시 이수하여야 하는 전공 교과목을 말합니다.\n전공선택 : 전공 필수 과목을 제외한 전공 교과목을 말합니다.(졸업을 위해 추가적인 전공 선택 과목 이수 필요)"
    },
    {
      question: "Q. 부전공과 다전공의 차이점이 뭔가요?",
      answer: "A. 복수전공은 학생이 현재의 주 전공 외에 추가적으로 또 하나의 전공을\n동일한 학문적 깊이로 이수하는 제도입니다.복수전공을 완료하면 졸업 시\n두 전공 모두에 대해 학위를 취득 할 수 있습니다.\n\n부전공은 주 전공을 유지하면서, 추가적으로 관심 있는 다른 학문을 일정 수준으로\n학습하는 것을 뜻합니다. 부전공은 복수전공보다 이수 학점이 적으며, 학위에는\n부전공이 표시되지 않는 경우가 많습니다."
    },
    {
      question: "Q. 복수전공 포기 시, 다시 전공 학점을 채워야 하나요?",
      answer: "A. 복수전공의 경우, 해당 전공에서 48학점 이상을 이수해야 하며, 이는 일반선택 영역에서 충당됩니다.\n  복수전공을 부전공으로 전환하게 되면, 일반선택 52학점 중 부전공으로 인정되는 학점만 이수하면 되며, 그 외 학점은 자유롭게 원하는 과목으로 채워도 됩니다."
    },
    {
      question: "Q. 계절학기 수강신청은 언제 하는 건가요?",
      answer: "A. 계절학기 운영기간은 하계, 동계 방학 기간 중 개설 및 운영하고 있습니다.\n일정은 ON국민 학사공지에서 확인할 수 있습니다.(하계 계절학기는 5월 초순, 동계 계절학기는 11월 초순 공지 예정)\n일반적으로 하계 계절학기는 5월 하순~ 6월 초순 수강 신청 기간이고 동계 계절학기는 11월 하순 ~ 12월 초순입니다."
    },
    {
      question: "Q. 재수강하는 과목 신청 방법이 궁금해요.",
      answer: "A. 가. 신청방법 : 재수강하고자 하는 교과목 수강신청 → 재수강 안내메시지 확인 → 재수강 신청완료\n나. 유의사항\n1) 재수강을 할 경우 기존의 성적은 삭제되고, 재수강으로 이수한 성적이 최종적으로 남게 됨.※ 재수강 후 성적이 재수강 이전 성적보다 낮아도 재수강 후 성적이 남게 됨.\n2) 재수강의 경우 출석부에 [재수강]으로 표기되며 기 취득한 성적은 해당 학기 성적에 [R]이라고 표기됨.\n3) 2015학번부터 재수강 횟수는 통산 8회를 초과할 수 없음. (단, F를 받은 교과목의 재수강은 통산 8회에 산입되지 않음)\n4) 이미 취득한 교과목의 성적이 C+이하인 경우에만 재수강할 수 있으며, 재수강성적은 A0를 초과하여 취득할 수 없음. (2024학년도 1학기부터 변경)"
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
              <button className="px-4 py-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors">
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
