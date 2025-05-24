
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface QuickActionButtonProps {
  text: string;
  imageUrl: string;
  className?: string;
  onClick?: () => void;
  isToggled?: boolean;
}

const QuickActionButton = ({ text, imageUrl, className = "", onClick, isToggled = false }: QuickActionButtonProps) => {
  return (
    <button
      className={`flex gap-3 items-center px-4 py-3 text-sm text-gray-700 ${isToggled ? 'bg-sky-200' : 'bg-sky-100'} hover:bg-sky-200 rounded-lg transition-colors w-full ${className}`}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        className="object-contain w-5 h-5"
        alt="Action icon"
      />
      <span>{text}</span>
      {(text === "학사안내" || text === "강의안내" || text === "국제교류" || text === "교내문의") && (
        <svg className={`ml-auto w-4 h-4 transition-transform ${isToggled ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </button>
  );
};

const ChatArea = () => {
  const navigate = useNavigate();
  const [isAcademicToggled, setIsAcademicToggled] = useState(false);
  const [isLectureToggled, setIsLectureToggled] = useState(false);
  const [isInternationalToggled, setIsInternationalToggled] = useState(false);
  const [isCampusToggled, setIsCampusToggled] = useState(false);

  const handleModeSwitch = () => {
    navigate("/assistchat");
  };

  const handleAcademicToggle = () => {
    setIsAcademicToggled(!isAcademicToggled);
  };

  const handleLectureToggle = () => {
    setIsLectureToggled(!isLectureToggled);
  };

  const handleInternationalToggle = () => {
    setIsInternationalToggled(!isInternationalToggled);
  };

  const handleCampusToggle = () => {
    setIsCampusToggled(!isCampusToggled);
  };

  const academicQuestions = [
    "1전공 졸업요건이 궁금합니다",
    "휴학하려면 맞찾시 들어야하는요?",
    "계절학기는 언제 신청하나요?",
    "신입생은 언제 휴학신청이 가능한가요?",
    "전부 졸업학년입니다",
    "예비군은 어떻게 신청하나요?",
    "휴학하고 싶은데 등록금 환불은 어떻게 되나요?"
  ];

  const lectureQuestions = [
    "수강신청은 언제 하나요?",
    "강의실 변경사항은 어디서 확인하나요?",
    "출석 기준이 어떻게 되나요?",
    "시험 일정을 알고 싶어요",
    "교수님 연락처가 궁금해요",
    "강의평가는 언제 하나요?",
    "재수강 신청 방법이 궁금해요"
  ];

  const internationalQuestions = [
    "교환학생 프로그램 신청 방법은?",
    "어학연수 프로그램이 있나요?",
    "외국인 학생 지원 서비스는?",
    "해외 인턴십 기회가 있나요?",
    "외국어 능력 시험 지원은?",
    "국제 학술대회 참가 방법은?",
    "글로벌 프로그램 장학금은?"
  ];

  const campusQuestions = [
    "도서관 이용시간이 궁금해요",
    "학생식당 메뉴와 가격은?",
    "주차장 이용 방법을 알고 싶어요",
    "동아리 활동은 어떻게 시작하나요?",
    "학생회관 시설 예약 방법은?",
    "체육관 이용 시간이 궁금해요",
    "분실물 센터는 어디에 있나요?"
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/3b47a0ba58247d8088d4291c0dcce55f7db8e4d7?placeholderIfAbsent=true"
            className="w-8 h-8 rounded-full"
            alt="User avatar"
          />
          <button 
            onClick={handleModeSwitch}
            className="text-sky-500 font-medium hover:text-sky-600 transition-colors"
          >
            존댓말모드하기
          </button>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/947040e23549c02923834538b75f73687c7be12a?placeholderIfAbsent=true"
          className="w-8 h-8 rounded-full flex-shrink-0"
          alt="Bot avatar"
        />
        <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
          <p className="text-sm text-gray-800">안녕! 무슨 고민있어?</p>
        </div>
      </div>

      <div className="space-y-3 max-w-xs ml-11">
        <QuickActionButton
          text="학사안내"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/38a66917a30b171a511e111cfddea678fb29a7ac?placeholderIfAbsent=true"
          onClick={handleAcademicToggle}
          isToggled={isAcademicToggled}
        />
        
        {isAcademicToggled && (
          <div className="ml-4 space-y-2 border border-gray-200 rounded-lg p-3 bg-white">
            {academicQuestions.map((question, index) => (
              <button
                key={index}
                className="block w-full text-left text-sm text-gray-600 hover:text-gray-800 py-1 hover:bg-gray-50 rounded px-2 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        )}
        
        <QuickActionButton
          text="강의안내"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/372dab1a18cf0ad51e08e6d1debb7b01a6802e58?placeholderIfAbsent=true"
          onClick={handleLectureToggle}
          isToggled={isLectureToggled}
        />
        
        {isLectureToggled && (
          <div className="ml-4 space-y-2 border border-gray-200 rounded-lg p-3 bg-white">
            {lectureQuestions.map((question, index) => (
              <button
                key={index}
                className="block w-full text-left text-sm text-gray-600 hover:text-gray-800 py-1 hover:bg-gray-50 rounded px-2 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        <QuickActionButton
          text="국제교류"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/bc648fc9b96ab9f9f7440ae4fcdf8e9c568f2d47?placeholderIfAbsent=true"
          onClick={handleInternationalToggle}
          isToggled={isInternationalToggled}
        />
        
        {isInternationalToggled && (
          <div className="ml-4 space-y-2 border border-gray-200 rounded-lg p-3 bg-white">
            {internationalQuestions.map((question, index) => (
              <button
                key={index}
                className="block w-full text-left text-sm text-gray-600 hover:text-gray-800 py-1 hover:bg-gray-50 rounded px-2 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        <QuickActionButton
          text="교내문의"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/acf446829efd4b02c7ef6765b0b9c786bc1a64bb?placeholderIfAbsent=true"
          onClick={handleCampusToggle}
          isToggled={isCampusToggled}
        />
        
        {isCampusToggled && (
          <div className="ml-4 space-y-2 border border-gray-200 rounded-lg p-3 bg-white">
            {campusQuestions.map((question, index) => (
              <button
                key={index}
                className="block w-full text-left text-sm text-gray-600 hover:text-gray-800 py-1 hover:bg-gray-50 rounded px-2 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-6 ml-11">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b685dce554ddf4b53c045f1710f4363ec65b000c?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d01cc17d1a522eacf787cc58de3789344d3dfe24?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d895a555f47dab5aa105a8fa61bf4516f208493b?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/f8590f987c72ddea1e68f36300848b3227e5fb1e?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ea93b6073b5d1f25429e4c1681b76582cd2f3117?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
      </div>
    </div>
  );
};

export default ChatArea;
