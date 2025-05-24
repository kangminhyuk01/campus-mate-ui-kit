
import React from "react";

const PhoneMockup = () => {
  return (
    <div className="flex overflow-hidden flex-col py-3 mx-auto w-full bg-white border-black border-solid border-[5px] rounded-[44px] max-md:mt-10">
      <div className="flex flex-col pr-4 pl-11 w-full text-xs text-black max-md:pl-5">
        <div className="flex shrink-0 self-center bg-black h-[17px] rounded-[50px] w-[77px]" />
        <div className="flex gap-1.5 self-end mt-5">
          <div className="px-4 py-1.5 bg-white border border-sky-600 border-solid rounded-[30px]">
            캠퍼스 메이트는 어떤 서비스야?
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/cc73dc119c0b737953dad0c0fdbd47bcbf791cee?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-start aspect-square w-[26px]"
            alt="User icon"
          />
        </div>
      </div>
      <div className="flex flex-col px-2.5 mt-3.5 w-full text-xs text-black">
        <div className="flex gap-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b27d8203ce31f13bf8f0fe8143c4cfdda9b5c164?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[38px]"
            alt="Bot avatar"
          />
          <div className="px-3.5 pt-3.5 pb-6 bg-gray-100 rounded-3xl">
            캠퍼스 메이트는 국민대학교 학생들의 학교 생활 전반의 도움을 주는 챗봇이에요.
          </div>
        </div>
        <div className="flex gap-1.5 self-end mt-5 max-md:mr-1.5">
          <div className="px-4 py-1.5 bg-white border border-sky-600 border-solid rounded-[30px]">
            캠퍼스 메이트의 특징은 뭐야?
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/a1f84158add738f07b4ffaba4d4fc63e5bbb16b0?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-start aspect-square w-[26px]"
            alt="User icon"
          />
        </div>
      </div>
      <div className="flex gap-1 mt-4 mr-2.5 text-xs text-black max-md:ml-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/11b4e3b612d8937de3a4065c154b64e43e787d59?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[38px]"
          alt="Bot avatar"
        />
        <div className="px-3.5 pt-2 pb-4 bg-gray-100 rounded-3xl">
          캠퍼스 메이트는 친숙한 느낌을 주는 반말모드와 진중한 느낌을 주는 존댓말모드 중 선택해서 이용할 수 있어.
        </div>
      </div>
      <div className="flex gap-5 justify-between items-start py-1 pr-2.5 pl-1 mt-12 mr-3.5 ml-3 rounded-3xl border-2 border-solid bg-slate-600 bg-opacity-10 border-black border-opacity-0 max-md:mx-2.5 max-md:mt-10">
        <div className="flex gap-1.5 text-xs leading-3 text-gray-800">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ee214c25a5dbc72790c907ee1053a68caddb7947?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[1.06] w-[17px]"
            alt="Message icon"
          />
          <p>Type your message...</p>
        </div>
        <div className="flex gap-1.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/35055ae13a60984ceaaabfd7fe173ca5a106e22c?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-2.5 aspect-[0.71]"
            alt="Send icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/4534aef4d748af8c61997bff29698abd3f4c46f9?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-start aspect-square w-[11px]"
            alt="Options icon"
          />
        </div>
      </div>
      <div className="flex shrink-0 self-center mt-5 bg-black h-[7px] rounded-[50px] w-[77px]" />
    </div>
  );
};

export default PhoneMockup;
