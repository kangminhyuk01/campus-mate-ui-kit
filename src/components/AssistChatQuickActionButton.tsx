
import React from "react";

interface AssistChatQuickActionButtonProps {
  text: string;
  iconSrc: string;
  className?: string;
}

const AssistChatQuickActionButton = ({ text, iconSrc, className = "" }: AssistChatQuickActionButtonProps) => {
  return (
    <button
      className={`flex gap-5 justify-between items-start px-5 pt-3.5 pb-1.5 max-w-full text-xs text-black whitespace-nowrap bg-orange-100 rounded-xl max-md:ml-2.5 hover:bg-orange-200 transition-colors ${className}`}
    >
      <span>{text}</span>
      <img
        src={iconSrc}
        alt="Icon"
        className="object-contain shrink-0 w-5 aspect-square"
      />
    </button>
  );
};

export default AssistChatQuickActionButton;
