
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AssistChatQuickActionButton from "./AssistChatQuickActionButton";
import ChatMessage from "./ChatMessage";

interface AssistChatChatAreaProps {
  onSendMessage: (message: string) => void;
  messages: any[];
  isLoading: boolean;
}

const AssistChatChatArea = ({ onSendMessage, messages, isLoading }: AssistChatChatAreaProps) => {
  const navigate = useNavigate();
  const [isExampleToggled, setIsExampleToggled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleModeSwitch = () => {
    navigate("/friendlychat");
  };

  const handleExampleToggle = () => {
    setIsExampleToggled(!isExampleToggled);
  };

  const handleExampleClick = (question: string) => {
    onSendMessage(question);
  };

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const exampleQuestions = [
    "1전공 졸업요건이 궁금합니다",
    "휴학하려면 맞찾시 들어야하는요?",
    "계절학기는 언제 신청하나요?",
    "신입생은 언제 휴학신청이 가능한가요?",
    "예비군은 어떻게 신청하나요?",
    "휴학하고 싶은데 등록금 환불은 어떻게 되나요?"
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/f5fe7fc28ab1c1489355dade9ba025ea65608c90?placeholderIfAbsent=true"
            className="w-8 h-8 rounded-full"
            alt="User avatar"
          />
          <button 
            onClick={handleModeSwitch}
            className="text-sky-500 font-medium hover:text-sky-600 transition-colors"
          >
            반말모드하기
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.length === 0 && (
          <>
            <div className="flex gap-3 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b1744770a9f93a40dd73e906c2c1f3e295078e76?placeholderIfAbsent=true"
                className="w-8 h-8 rounded-full flex-shrink-0"
                alt="Bot avatar"
              />
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
                <p className="text-sm text-gray-800">안녕하세요! 무슨 고민이 있으신가요?</p>
              </div>
            </div>

            <div className="space-y-3 max-w-xs ml-11">
              <AssistChatQuickActionButton
                text="Example"
                iconSrc="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/625a56435bc754308572ab8e0f76684bc1e1e30b?placeholderIfAbsent=true"
                onClick={handleExampleToggle}
                isToggled={isExampleToggled}
              />
              
              {isExampleToggled && (
                <div className="ml-4 space-y-2 border border-gray-200 rounded-lg p-3 bg-white">
                  {exampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleClick(question)}
                      className="text-sm py-2 px-2 text-left w-full hover:bg-gray-50 rounded transition-colors text-gray-800"
                    >
                      Q. {question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {messages.map((message) => (
          <ChatMessage 
            key={message.id} 
            message={message}
            botAvatar="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b1744770a9f93a40dd73e906c2c1f3e295078e76?placeholderIfAbsent=true"
            userAvatar="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/f5fe7fc28ab1c1489355dade9ba025ea65608c90?placeholderIfAbsent=true"
          />
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b1744770a9f93a40dd73e906c2c1f3e295078e76?placeholderIfAbsent=true"
              className="w-8 h-8 rounded-full flex-shrink-0"
              alt="Bot avatar"
            />
            <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default AssistChatChatArea;
