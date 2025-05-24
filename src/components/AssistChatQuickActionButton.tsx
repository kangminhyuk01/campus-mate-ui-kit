
import React from "react";

interface AssistChatQuickActionButtonProps {
  text: string;
  iconSrc: string;
  className?: string;
}

const AssistChatQuickActionButton = ({ text, iconSrc, className = "" }: AssistChatQuickActionButtonProps) => {
  return (
    <button
      className={`flex gap-3 items-center px-4 py-3 text-sm text-gray-700 bg-orange-100 hover:bg-orange-200 rounded-lg transition-colors w-full ${className}`}
    >
      <img
        src={iconSrc}
        className="object-contain w-5 h-5"
        alt="Action icon"
      />
      <span>{text}</span>
    </button>
  );
};

export default AssistChatQuickActionButton;
