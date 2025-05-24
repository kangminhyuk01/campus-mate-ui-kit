
import React from "react";

interface ModeOptionProps {
  imageUrl: string;
  label: string;
}

const ModeOption = ({ imageUrl, label }: ModeOptionProps) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageUrl}
        alt={`${label} icon`}
        className="object-contain aspect-square rounded-full w-[80px] h-[80px] mb-4"
      />
      <button
        className="px-4 py-2 text-sm font-medium text-black bg-sky-100 rounded-lg hover:bg-sky-200 transition-colors whitespace-nowrap"
        aria-label={label}
      >
        {label}
      </button>
    </div>
  );
};

export default ModeOption;
