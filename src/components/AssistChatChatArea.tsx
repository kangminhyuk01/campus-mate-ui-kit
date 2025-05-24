
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssistChatQuickActionButton from "./AssistChatQuickActionButton";

const AssistChatChatArea = () => {
  const navigate = useNavigate();
  const [isAcademicToggled, setIsAcademicToggled] = useState(false);
  const [isLectureToggled, setIsLectureToggled] = useState(false);
  const [isInternationalToggled, setIsInternationalToggled] = useState(false);
  const [isCampusToggled, setIsCampusToggled] = useState(false);

  const handleModeSwitch = () => {
    navigate("/friendlychat");
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
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/f5fe7fc28ab1c1489355dade9ba025ea65608c90?placeholderIfAbsent=true"
            className="w-8 h-8 rounded-full"
            alt="User avatar"
          />
          <button 
            onClick={handleModeSwitch}
            className="text-sky-500 font-medium hover:text-sky-600 transition-colors"
          >
            반말모드하기
          </button>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b1744770a9f93a40dd73e906c2c1f3e295078e76?placeholderIfAbsent=true"
          className="w-8 h-8 rounded-full flex-shrink-0"
          alt="Bot avatar"
        />
        <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
          <p className="text-sm text-gray-800">안녕하세요! 무슨 고민이 있으신가요?</p>
        </div>
      </div>

      <div className="space-y-3 max-w-xs ml-11">
        <AssistChatQuickActionButton
          text="학사안내"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/625a56435bc754308572ab8e0f76684bc1e1e30b?placeholderIfAbsent=true"
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
        
        <AssistChatQuickActionButton
          text="강의안내"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/14f287d616a07cb56c97fbf777bda79bee8a8ed5?placeholderIfAbsent=true"
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

        <AssistChatQuickActionButton
          text="국제교류"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/16a035a767fc69afb78e7779c55ea72fe1913c00?placeholderIfAbsent=true"
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

        <AssistChatQuickActionButton
          text="교내문의"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/3e9cdcb468861922a8e8362cdea23f333c9764a6?placeholderIfAbsent=true"
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
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ead3254cdbaacde19dd7f015e2c476ac61039b80?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Rating star"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/398a7595239e138066c8fc401ea4dbaacd981747?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Rating star"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d251d96adc6eba8e6a77af4482ec8628529755c5?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Rating star"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/e52f127ef37879dc1c3d3bbe845c4cb9db8414c3?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Rating star"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/cfa76ac487a4dea7b80f16d73b3d83696fa252d2?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Rating star"
        />
      </div>
    </div>
  );
};

export default AssistChatChatArea;
