import React, { useState } from "react";
import PhoneMockup from "./PhoneMockup";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ModeSelection from "./ModeSelection";

const Home2Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="flex flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex z-10 flex-col mb-0 ml-3 w-full max-w-[1159px] max-md:mb-2.5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-4/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-2.5 text-9xl tracking-tighter leading-none text-center text-neutral-800 max-md:text-4xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/01767757719eef5d052aeb1a221f393e2ab6a1af?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-start mt-4 max-w-full aspect-square rounded-[90px] w-[106px]"
                    alt="Campus Mate logo"
                  />
                  <h2 className="flex-auto w-[742px] max-md:max-w-full max-md:text-4xl">
                    Campus Mate
                  </h2>
                </div>
                <div className="flex flex-col items-start self-center mt-20 max-w-full text-xl font-bold leading-tight w-[467px] max-md:mt-10">
                  <p className="text-sky-500">
                    Campus mate AI 출시 !
                  </p>
                  <div className="shrink-0 mt-1 h-0.5 border-2 border-sky-500 border-solid w-[110px]" />
                  <p className="self-stretch mt-10 text-2xl leading-6 text-black max-md:mt-10 max-md:max-w-full">
                    단순 FAQ 응대가 아닌, <br />
                    여러분들의 대학생활을 책임지는 똑똑한 상담사!
                  </p>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <button className="px-8 py-3 mt-8 whitespace-nowrap bg-blue-100 text-neutral-800 hover:bg-blue-200 transition-colors max-md:px-5">
                        시작하기
                      </button>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-none bg-transparent shadow-none max-w-none w-auto">
                      <ModeSelection onClose={() => setIsDialogOpen(false)} />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            <div className="ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <PhoneMockup />
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/a48df6a4a3cbb6c5268aaf09bd426e03e54a68fd?placeholderIfAbsent=true"
          className="object-contain self-center mt-7 ml-5 w-full aspect-[1.6] max-w-[1011px] max-md:max-w-full"
          alt="Feature illustration"
        />
      </div>
    </section>
  );
};

export default Home2Hero;
