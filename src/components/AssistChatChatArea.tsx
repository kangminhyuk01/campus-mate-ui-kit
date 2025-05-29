
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssistChatQuickActionButton from "./AssistChatQuickActionButton";

const AssistChatChatArea = () => {
  const navigate = useNavigate();
  const [isExampleToggled, setIsExampleToggled] = useState(false);

  const handleModeSwitch = () => {
    navigate("/friendlychat");
  };

  const handleExampleToggle = () => {
    setIsExampleToggled(!isExampleToggled);
  };

  const exampleQuestions = [
    "1전공 졸업요건이 궁금합니다",
    "휴학하려면 맞찾시 들어야하는요?",
    "계절학기는 언제 신청하나요?",
    "신입생은 언제 휴학신청이 가능한가요?",
    "전부 졸업학년입니다",
    "예비군은 어떻게 신청하나요?",
    "휴학하고 싶은데 등록금 환불은 어떻게 되나요?"
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
          text="Example"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/625a56435bc754308572ab8e0f76684bc1e1e30b?placeholderIfAbsent=true"
          onClick={handleExampleToggle}
          isToggled={isExampleToggled}
        />
        
        {isExampleToggled && (
          <div className="ml-4 space-y-2 border border-gray-200 rounded-lg p-3 bg-white">
            {exampleQuestions.map((question, index) => (
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
