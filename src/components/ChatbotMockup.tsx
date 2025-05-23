
import React from "react";

const ChatbotMockup = () => {
  return (
    <div className="flex overflow-hidden flex-col py-3 w-full bg-white border-black border-solid border-[5px] rounded-[44px]">
      <div className="flex flex-col pr-4 pl-5 md:pl-11 w-full text-xs text-black">
        <div className="flex shrink-0 self-center bg-black h-[17px] rounded-[50px] w-[77px]" />
        <div className="flex gap-1.5 self-end mt-5">
          <div className="px-4 py-1.5 bg-white border border-sky-600 border-solid rounded-[30px]">
            캠퍼스 메이트는 어떤 서비스야?
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/faed20df335e0e339570fc9ce4e3afe19abf36f2"
            alt="User icon"
            className="object-contain shrink-0 self-start aspect-square w-[26px]"
          />
        </div>
      </div>
      <div className="flex flex-col px-2.5 mt-3.5 w-full text-xs text-black">
        <div className="flex gap-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b27d8203ce31f13bf8f0fe8143c4cfdda9b5c164"
            alt="Bot icon"
            className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[38px]"
          />
          <div className="px-3.5 pt-3.5 pb-6 bg-gray-100 rounded-3xl">
            캠퍼스 메이트는 국민대학교 학생들의 학교 생활 전반의 도움을 주는 챗봇이에요.
          </div>
        </div>
        <div className="flex gap-1.5 self-end mt-5 mr-1.5">
          <div className="px-4 py-1.5 bg-white border border-sky-600 border-solid rounded-[30px]">
            캠퍼스 메이트의 특징은 뭐야?
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d5df01bb2a7dd09d708447bc876ef4208578e754"
            alt="User icon"
            className="object-contain shrink-0 self-start aspect-square w-[26px]"
          />
        </div>
      </div>
      <div className="flex gap-1 mt-4 mx-2.5 text-xs text-black">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/11b4e3b612d8937de3a4065c154b64e43e787d59"
          alt="Bot icon"
          className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[38px]"
        />
        <div className="px-3.5 pt-2 pb-4 bg-gray-100 rounded-3xl">
          캠퍼스 메이트는 친숙한 느낌을 주는 반말모드와 진중한 느낌을 주는 존댓말모드 중 선택해서 이용할 수 있어.
        </div>
      </div>
      <div className="flex gap-5 justify-between items-start py-1 px-3 mt-10 mx-3 rounded-3xl border-2 border-solid bg-slate-600 bg-opacity-10 border-black border-opacity-0">
        <div className="flex gap-1.5 text-xs leading-3 text-gray-800">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/9208a4822e71032737c4105e7c4d76c5065759cd"
            alt="Message icon"
            className="object-contain shrink-0 aspect-[1.06] w-[17px]"
          />
          <p>Type your message...</p>
        </div>
        <div className="flex gap-1.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/35055ae13a60984ceaaabfd7fe173ca5a106e22c"
            alt="Microphone icon"
            className="object-contain shrink-0 w-2.5 aspect-[0.71]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/1804053a69e97c795ce7c8849cd2f5ed8450a8ba"
            alt="Send icon"
            className="object-contain shrink-0 self-start aspect-square w-[11px]"
          />
        </div>
      </div>
      <div className="flex shrink-0 self-center mt-5 bg-black h-[7px] rounded-[50px] w-[77px]" />
    </div>
  );
};

export default ChatbotMockup;
