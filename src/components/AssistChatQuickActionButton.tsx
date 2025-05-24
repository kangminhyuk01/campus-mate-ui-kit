
import React from "react";

interface AssistChatQuickActionButtonProps {
  text: string;
  iconSrc: string;
  className?: string;
}

const AssistChatQuickActionButton = ({ text, iconSrc, className = "" }: AssistChatQuickActionButtonProps) => {
  return (
    <button
      className={`flex gap-5 justify-between items-center px-5 py-3 w-full max-w-sm text-sm text-black bg-orange-100 rounded-xl hover:bg-orange-200 transition-colors ${className}`}
    >
      <span>{text}</span>
      <img
        src={iconSrc}
        alt="Icon"
        className="w-5 h-5"
      />
    </button>
  );
};

export default AssistChatQuickActionButton;
