
import React from "react";
import { X } from "lucide-react";
import ModeOption from "./ModeOption";

interface ModeSelectionProps {
  onClose: () => void;
}

const ModeSelection = ({ onClose }: ModeSelectionProps) => {
  return (
    <section className="overflow-hidden pt-5 pr-20 pb-36 pl-5 bg-white border border-solid border-zinc-400 max-w-[463px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pr-5 max-md:pb-24">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow ml-0 max-md:mt-6">
            <button onClick={onClose} className="self-start" aria-label="Close">
              <X className="w-[31px] h-[31px] text-gray-600 hover:text-gray-800" />
            </button>
            <div className="flex flex-col items-start self-end -ml-1 max-w-full w-[216px]">
              <h1 className="ml-20 text-3xl font-semibold tracking-tighter leading-8 text-center text-neutral-800">
                MODE 선택
                <br />
              </h1>
              <div className="flex flex-col items-center w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/fb062b47b1fd21abd84d9d722e97e3e5219623cd?placeholderIfAbsent=true"
                  alt="Informal mode icon"
                  className="object-contain mt-24 max-w-full aspect-square rounded-[90px] w-[122px] max-md:mt-10"
                />
                <button
                  className="px-3.5 pt-2 pb-4 mt-10 ml-4 text-base font-medium leading-5 text-black bg-sky-100 rounded-lg w-[87px] max-md:ml-2.5"
                  aria-label="반말모드"
                >
                  <p>반말모드</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-36 text-base font-medium leading-5 text-black max-md:mt-10">
            <ModeOption 
              imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/dd4085cd3b49e838fbd89b524e7a94bbc12d3eed?placeholderIfAbsent=true" 
              label="존댓말모드" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModeSelection;
