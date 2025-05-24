
import React from "react";

interface AssistChatQuickActionButtonProps {
  text: string;
  iconSrc: string;
  className?: string;
  onClick?: () => void;
  isToggled?: boolean;
}

const AssistChatQuickActionButton = ({ text, iconSrc, className = "", onClick, isToggled = false }: AssistChatQuickActionButtonProps) => {
  return (
    <button
      className={`flex gap-3 items-center px-4 py-3 text-sm text-gray-700 ${isToggled ? 'bg-orange-200' : 'bg-orange-100'} hover:bg-orange-200 rounded-lg transition-colors w-full ${className}`}
      onClick={onClick}
    >
      <img
        src={iconSrc}
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

export default AssistChatQuickActionButton;
