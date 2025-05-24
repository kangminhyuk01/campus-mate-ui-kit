
import React from "react";

interface ModeOptionProps {
  imageUrl: string;
  label: string;
}

const ModeOption = ({ imageUrl, label }: ModeOptionProps) => {
  return (
    <section className="flex flex-col items-center">
      <img
        src={imageUrl}
        alt={`${label} icon`}
        className="object-contain aspect-square rounded-[90px] w-[122px]"
      />
      <button
        className="px-3.5 pt-2 pb-4 mt-9 text-base font-medium leading-5 text-black bg-sky-100 rounded-lg w-[87px]"
        aria-label={label}
      >
        <p>{label}</p>
      </button>
    </section>
  );
};

export default ModeOption;
