
import React from "react";

const AssistChatMessageInput = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-3 border border-gray-200">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/94713650efb2b00fec2a444e763b1724eeeddd85?placeholderIfAbsent=true"
          className="w-5 h-5"
          alt="Message icon"
        />
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
        />
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/695030f406df7986e70c34a8c1b98227897a7288?placeholderIfAbsent=true"
              className="w-5 h-5"
              alt="Attachment icon"
            />
          </button>
          <button className="p-1 bg-sky-500 hover:bg-sky-600 rounded-full transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/a6c2400a34b73a8b17b274c0a1eb691e50108a10?placeholderIfAbsent=true"
              className="w-6 h-6"
              alt="Send icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssistChatMessageInput;
