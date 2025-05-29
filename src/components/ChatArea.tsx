
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
      <svg className={`ml-auto w-4 h-4 transition-transform ${isToggled ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

const ChatArea = () => {
  const navigate = useNavigate();
  const [isExampleToggled, setIsExampleToggled] = useState(false);

  const handleModeSwitch = () => {
    navigate("/assistchat");
  };

  const handleExampleToggle = () => {
    setIsExampleToggled(!isExampleToggled);
  };

  const exampleQuestions = [
    "Q. 신입생은 언제 휴학신청이 가능해?",
    "A. 신입생은 입학 후 1년간 가사휴학이 불가능해. 재입학은 2학기 자퇴 할때만 가능하고, 1학기 자퇴 시 불가능해. "
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
          text="Example"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/38a66917a30b171a511e111cfddea678fb29a7ac?placeholderIfAbsent=true"
          onClick={handleExampleToggle}
          isToggled={isExampleToggled}
        />
        
        {isExampleToggled && (
          <div className="ml-4 space-y-2 border border-gray-200 rounded-lg p-3 bg-white">
            {exampleQuestions.map((question, index) => (
              <div
                key={index}
                className={`text-sm py-2 px-2 ${index === 0 ? 'font-medium text-gray-800' : 'text-gray-600'}`}
              >
                {question}
              </div>
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
