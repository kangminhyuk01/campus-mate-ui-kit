
import React from "react";

interface QuickActionButtonProps {
  text: string;
  imageUrl: string;
  className?: string;
}

const QuickActionButton = ({ text, imageUrl, className = "" }: QuickActionButtonProps) => {
  return (
    <button
      className={`flex gap-3 items-center px-4 py-3 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors w-full ${className}`}
    >
      <img
        src={imageUrl}
        className="object-contain w-5 h-5"
        alt="Action icon"
      />
      <span>{text}</span>
    </button>
  );
};

const ChatArea = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/3b47a0ba58247d8088d4291c0dcce55f7db8e4d7?placeholderIfAbsent=true"
            className="w-8 h-8 rounded-full"
            alt="User avatar"
          />
          <button className="text-sky-500 font-medium hover:text-sky-600 transition-colors">
            존댓말모드하기
          </button>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/947040e23549c02923834538b75f73687c7be12a?placeholderIfAbsent=true"
          className="w-8 h-8 rounded-full flex-shrink-0"
          alt="Bot avatar"
        />
        <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
          <p className="text-sm text-gray-800">안녕! 무슨 고민있어?</p>
        </div>
      </div>

      <div className="space-y-3 max-w-xs ml-11">
        <QuickActionButton
          text="학사안내"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/38a66917a30b171a511e111cfddea678fb29a7ac?placeholderIfAbsent=true"
        />
        <QuickActionButton
          text="강의안내"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/372dab1a18cf0ad51e08e6d1debb7b01a6802e58?placeholderIfAbsent=true"
        />
        <QuickActionButton
          text="국제교류"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/bc648fc9b96ab9f9f7440ae4fcdf8e9c568f2d47?placeholderIfAbsent=true"
        />
        <QuickActionButton
          text="교내문의"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/acf446829efd4b02c7ef6765b0b9c786bc1a64bb?placeholderIfAbsent=true"
        />
      </div>

      <div className="flex gap-3 mt-6 ml-11">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b685dce554ddf4b53c045f1710f4363ec65b000c?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d01cc17d1a522eacf787cc58de3789344d3dfe24?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d895a555f47dab5aa105a8fa61bf4516f208493b?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/f8590f987c72ddea1e68f36300848b3227e5fb1e?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ea93b6073b5d1f25429e4c1681b76582cd2f3117?placeholderIfAbsent=true"
          className="w-4 h-4 opacity-60"
          alt="Action icon"
        />
      </div>
    </div>
  );
};

export default ChatArea;
