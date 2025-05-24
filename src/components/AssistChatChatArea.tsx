
import React from "react";
import { useNavigate } from "react-router-dom";
import AssistChatMessageInput from "./AssistChatMessageInput";
import AssistChatFooter from "./AssistChatFooter";
import AssistChatQuickActionButton from "./AssistChatQuickActionButton";

const AssistChatChatArea = () => {
  const navigate = useNavigate();

  const handleModeSwitch = () => {
    navigate("/friendlychat");
  };

  return (
    <section className="overflow-hidden px-20 pb-5 bg-white rounded-[30px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-start pb-12 w-full bg-white rounded-2xl max-md:max-w-full">
        <div className="flex gap-2 self-center ml-14 max-w-full text-base font-bold text-sky-500 whitespace-nowrap w-[139px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/f5fe7fc28ab1c1489355dade9ba025ea65608c90?placeholderIfAbsent=true"
            alt="Profile"
            className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]"
          />
          <button onClick={handleModeSwitch} className="my-auto hover:text-sky-600 transition-colors">
            반말모드하기
            <br />
          </button>
        </div>

        <div className="flex gap-3.5 items-start ml-5 text-xs text-black max-md:ml-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b1744770a9f93a40dd73e906c2c1f3e295078e76?placeholderIfAbsent=true"
            alt="Bot avatar"
            className="object-contain shrink-0 aspect-[1.02] rounded-[90px] w-[46px]"
          />
          <p className="px-6 py-4 bg-gray-100 rounded-3xl max-md:px-5">
            안녕하세요! 무슨 고민이 있으신가요?
          </p>
        </div>

        <AssistChatQuickActionButton
          text="학사안내"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/625a56435bc754308572ab8e0f76684bc1e1e30b?placeholderIfAbsent=true"
          className="mt-1 ml-20 w-[222px]"
        />

        <AssistChatQuickActionButton
          text="강의안내"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/14f287d616a07cb56c97fbf777bda79bee8a8ed5?placeholderIfAbsent=true"
          className="mt-3 ml-20 w-[222px]"
        />

        <AssistChatQuickActionButton
          text="국제교류"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/16a035a767fc69afb78e7779c55ea72fe1913c00?placeholderIfAbsent=true"
          className="mt-3 ml-20 w-[222px]"
        />

        <AssistChatQuickActionButton
          text="교내문의"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/3e9cdcb468861922a8e8362cdea23f333c9764a6?placeholderIfAbsent=true"
          className="mt-2.5 ml-20 w-[222px]"
        />

        <div className="flex gap-4 mt-5 ml-24 max-md:ml-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ead3254cdbaacde19dd7f015e2c476ac61039b80?placeholderIfAbsent=true"
            alt="Rating star"
            className="object-contain shrink-0 w-4 aspect-square"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/398a7595239e138066c8fc401ea4dbaacd981747?placeholderIfAbsent=true"
            alt="Rating star"
            className="object-contain shrink-0 w-4 aspect-square"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d251d96adc6eba8e6a77af4482ec8628529755c5?placeholderIfAbsent=true"
            alt="Rating star"
            className="object-contain shrink-0 w-4 aspect-square"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/e52f127ef37879dc1c3d3bbe845c4cb9db8414c3?placeholderIfAbsent=true"
            alt="Rating star"
            className="object-contain shrink-0 w-4 aspect-square"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/cfa76ac487a4dea7b80f16d73b3d83696fa252d2?placeholderIfAbsent=true"
            alt="Rating star"
            className="object-contain shrink-0 w-4 aspect-square"
          />
        </div>

        <div className="flex flex-col pt-3.5 pr-20 pb-8 pl-2.5 mt-11 mr-0 w-full bg-white max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <AssistChatMessageInput />
          <AssistChatFooter />
        </div>
      </div>
    </section>
  );
};

export default AssistChatChatArea;
