
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
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="max-w-2xl mx-auto">
        {/* Mode switch button */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/f5fe7fc28ab1c1489355dade9ba025ea65608c90?placeholderIfAbsent=true"
              alt="Profile"
              className="w-11 h-11 rounded-full"
            />
            <button 
              onClick={handleModeSwitch} 
              className="text-sky-500 font-bold hover:text-sky-600 transition-colors"
            >
              반말모드하기
            </button>
          </div>
        </div>

        {/* Chat message */}
        <div className="flex items-start gap-4 mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b1744770a9f93a40dd73e906c2c1f3e295078e76?placeholderIfAbsent=true"
            alt="Bot avatar"
            className="w-11 h-11 rounded-full"
          />
          <div className="bg-gray-100 rounded-2xl px-6 py-4 text-sm text-black">
            안녕하세요! 무슨 고민이 있으신가요?
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="space-y-3 mb-6">
          <AssistChatQuickActionButton
            text="학사안내"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/625a56435bc754308572ab8e0f76684bc1e1e30b?placeholderIfAbsent=true"
          />
          <AssistChatQuickActionButton
            text="강의안내"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/14f287d616a07cb56c97fbf777bda79bee8a8ed5?placeholderIfAbsent=true"
          />
          <AssistChatQuickActionButton
            text="국제교류"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/16a035a767fc69afb78e7779c55ea72fe1913c00?placeholderIfAbsent=true"
          />
          <AssistChatQuickActionButton
            text="교내문의"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/3e9cdcb468861922a8e8362cdea23f333c9764a6?placeholderIfAbsent=true"
          />
        </div>

        {/* Rating stars */}
        <div className="flex justify-center gap-2 mb-8">
          <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ead3254cdbaacde19dd7f015e2c476ac61039b80?placeholderIfAbsent=true" alt="Rating star" className="w-4 h-4" />
          <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/398a7595239e138066c8fc401ea4dbaacd981747?placeholderIfAbsent=true" alt="Rating star" className="w-4 h-4" />
          <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d251d96adc6eba8e6a77af4482ec8628529755c5?placeholderIfAbsent=true" alt="Rating star" className="w-4 h-4" />
          <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/e52f127ef37879dc1c3d3bbe845c4cb9db8414c3?placeholderIfAbsent=true" alt="Rating star" className="w-4 h-4" />
          <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/cfa76ac487a4dea7b80f16d73b3d83696fa252d2?placeholderIfAbsent=true" alt="Rating star" className="w-4 h-4" />
        </div>

        {/* Message input */}
        <AssistChatMessageInput />
      </div>
      
      {/* Footer */}
      <AssistChatFooter />
    </div>
  );
};

export default AssistChatChatArea;
