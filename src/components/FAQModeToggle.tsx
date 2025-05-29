
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAQModeToggle = () => {
  const navigate = useNavigate();

  const handleCasualMode = () => {
    navigate('/friendlychat');
  };

  const handlePoliteMode = () => {
    navigate('/assistchat');
  };

  return (
    <div className="flex flex-col mt-11 w-full text-base font-bold text-sky-500 whitespace-nowrap max-md:mt-10">
      <button
        onClick={handleCasualMode}
        className="flex gap-2 self-start hover:opacity-70 transition-opacity"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/07047f994a8e2b4d38f39bce615c29867f90818e?placeholderIfAbsent=true"
          alt="Casual mode"
          className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]"
        />
        <span className="my-auto">
          반말모드하기
          <br />
        </span>
      </button>
      <button
        onClick={handlePoliteMode}
        className="flex gap-2 items-center mt-8 hover:opacity-70 transition-opacity"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/024bceaf7582109df0da190c5156502c8db9e40b?placeholderIfAbsent=true"
          alt="Polite mode"
          className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[90px] w-[45px]"
        />
        <span className="my-auto w-[107px]">
          존댓말모드하기
          <br />
        </span>
      </button>
    </div>
  );
};

export default FAQModeToggle;
