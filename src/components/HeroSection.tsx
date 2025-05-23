
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ChatbotMockup from "./ChatbotMockup";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-20 w-full bg-white">
      <div className="flex flex-col mb-0 w-full max-w-[1159px]">
        <div className="w-full">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="w-full md:w-4/5">
              <div className="flex flex-col self-stretch my-auto w-full">
                <div className="flex flex-wrap gap-2.5 text-4xl md:text-9xl tracking-tighter leading-none text-center text-neutral-800">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/01767757719eef5d052aeb1a221f393e2ab6a1af"
                    alt="Campus Mate Logo"
                    className="object-contain shrink-0 self-start mt-4 max-w-full aspect-square rounded-[90px] w-[106px]"
                  />
                  <h2 className="flex-auto w-full md:w-[742px] text-4xl md:text-9xl">
                    Campus Mate
                  </h2>
                </div>
                <div className="flex flex-col items-start self-center mt-10 md:mt-20 max-w-full text-xl font-bold leading-tight w-[467px]">
                  <p className="text-sky-500">
                    Campus mate AI 출시 !
                  </p>
                  <div className="shrink-0 mt-1 h-0.5 border-2 border-sky-500 border-solid w-[110px]" />
                  <p className="self-stretch mt-10 text-2xl leading-6 text-black">
                    단순 FAQ 응대가 아닌, <br />
                    여러분들의 대학생활을 책임지는 똑똑한 상담사!
                  </p>
                  <Link to="/login">
                    <Button className="px-8 py-3 mt-8 whitespace-nowrap bg-blue-100 text-neutral-800 hover:bg-blue-200 transition-colors">
                      시작하기
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/5 md:ml-5">
              <div className="max-w-[240px] mx-auto">
                <ChatbotMockup />
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/a48df6a4a3cbb6c5268aaf09bd426e03e54a68fd"
          alt="Campus Mate Features"
          className="object-contain self-center mt-7 w-full aspect-[1.6] max-w-[1011px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
