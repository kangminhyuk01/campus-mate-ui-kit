
import React from "react";

const MessageInput = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 py-4 ml-20 max-w-full bg-white w-[976px] max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between py-0.5 pr-0.5 pl-2 rounded-3xl border-2 border-solid bg-slate-600 bg-opacity-10 border-black border-opacity-0 max-md:max-w-full">
        <div className="flex gap-2 my-auto text-base leading-none text-gray-800">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/94713650efb2b00fec2a444e763b1724eeeddd85?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Message icon"
          />
          <label htmlFor="messageInput" className="sr-only">Type your message</label>
          <input
            id="messageInput"
            type="text"
            placeholder="Type your message..."
            className="my-auto basis-auto bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex gap-2">
          <button aria-label="Attach file">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/695030f406df7986e70c34a8c1b98227897a7288?placeholderIfAbsent=true"
              className="object-contain shrink-0 my-auto w-6 aspect-square"
              alt="Attachment icon"
            />
          </button>
          <button aria-label="Send message">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/91d2a382ed5e6c3045c5a0f3d2382f45da888c52?placeholderIfAbsent=true"
              className="object-contain shrink-0 w-8 rounded-2xl aspect-square"
              alt="Send icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
