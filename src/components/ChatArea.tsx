
import React from "react";

interface QuickActionButtonProps {
  text: string;
  imageUrl: string;
  className?: string;
}

const QuickActionButton = ({ text, imageUrl, className = "" }: QuickActionButtonProps) => {
  return (
    <button
      className={`flex gap-5 justify-between items-start px-5 pt-3.5 pb-1.5 max-w-full text-xs text-black whitespace-nowrap bg-sky-100 rounded-xl w-[222px] hover:bg-sky-200 transition-colors ${className}`}
    >
      <span>{text}</span>
      <img
        src={imageUrl}
        className="object-contain shrink-0 w-5 aspect-square"
        alt="Action icon"
      />
    </button>
  );
};

const ChatArea = () => {
  return (
    <>
      <div className="flex gap-2 self-end text-base font-bold text-sky-500 whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/3b47a0ba58247d8088d4291c0dcce55f7db8e4d7?placeholderIfAbsent=true"
          className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]"
          alt="User avatar"
        />
        <button className="my-auto hover:text-sky-600 transition-colors">
          존댓말모드하기
          <br />
        </button>
      </div>
      <div className="flex gap-3.5 max-w-full text-xs text-black w-[286px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/947040e23549c02923834538b75f73687c7be12a?placeholderIfAbsent=true"
          className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]"
          alt="Bot avatar"
        />
        <p className="self-start px-6 py-4 bg-gray-100 rounded-3xl max-md:px-5">
          안녕! 무슨 고민있어?{" "}
        </p>
      </div>
      <QuickActionButton
        text="학사안내"
        imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/38a66917a30b171a511e111cfddea678fb29a7ac?placeholderIfAbsent=true"
        className="mt-2 ml-16 max-md:ml-2.5"
      />
      <QuickActionButton
        text="강의안내"
        imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/372dab1a18cf0ad51e08e6d1debb7b01a6802e58?placeholderIfAbsent=true"
        className="mt-3 ml-16 max-md:ml-2.5"
      />
      <QuickActionButton
        text="국제교류"
        imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/bc648fc9b96ab9f9f7440ae4fcdf8e9c568f2d47?placeholderIfAbsent=true"
        className="mt-3 ml-16 max-md:ml-2.5"
      />
      <QuickActionButton
        text="교내문의"
        imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/acf446829efd4b02c7ef6765b0b9c786bc1a64bb?placeholderIfAbsent=true"
        className="mt-2.5 ml-16 max-md:ml-2.5"
      />
      <div className="flex gap-4 mt-5 ml-16 max-md:ml-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b685dce554ddf4b53c045f1710f4363ec65b000c?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-4 aspect-square"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d01cc17d1a522eacf787cc58de3789344d3dfe24?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-4 aspect-square"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d895a555f47dab5aa105a8fa61bf4516f208493b?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-4 aspect-square"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/f8590f987c72ddea1e68f36300848b3227e5fb1e?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-4 aspect-square"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ea93b6073b5d1f25429e4c1681b76582cd2f3117?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-4 aspect-square"
          alt="Action icon"
        />
      </div>
    </>
  );
};

export default ChatArea;
