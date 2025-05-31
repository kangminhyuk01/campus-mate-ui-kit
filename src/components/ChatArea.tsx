
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useChat } from "../hooks/useChat";
import ChatMessage from "./ChatMessage";

interface QuickActionButtonProps {
  text: string;
  imageUrl: string;
  className?: string;
  onClick?: () => void;
  isToggled?: boolean;
}

const QuickActionButton = ({ text, imageUrl, className = "", onClick, isToggled = false }: QuickActionButtonProps) => {
  return (
    <button
      className={`flex gap-3 items-center px-4 py-3 text-sm text-gray-700 ${isToggled ? 'bg-sky-200' : 'bg-sky-100'} hover:bg-sky-200 rounded-lg transition-colors w-full ${className}`}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        className="object-contain w-5 h-5"
        alt="Action icon"
      />
      <span>{text}</span>
      <svg className={`ml-auto w-4 h-4 transition-transform ${isToggled ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

interface ChatAreaProps {
  onSendMessage: (message: string) => void;
  messages: any[];
  isLoading: boolean;
}

const ChatArea = ({ onSendMessage, messages, isLoading }: ChatAreaProps) => {
  const navigate = useNavigate();
  const [isExampleToggled, setIsExampleToggled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleModeSwitch = () => {
    navigate("/assistchat");
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
    "신입생은 언제 휴학신청이 가능해?",
    "1전공 졸업요건이 궁금해",
    "계절학기는 언제 신청하나?",
    "전과는 어떻게 하는거야?"
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/3b47a0ba58247d8088d4291c0dcce55f7db8e4d7?placeholderIfAbsent=true"
            className="w-8 h-8 rounded-full"
            alt="User avatar"
          />
          <button 
            onClick={handleModeSwitch}
            className="text-sky-500 font-medium hover:text-sky-600 transition-colors"
          >
            존댓말모드하기
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.length === 0 && (
          <>
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
                text="Example"
                imageUrl="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/38a66917a30b171a511e111cfddea678fb29a7ac?placeholderIfAbsent=true"
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
          <ChatMessage key={message.id} message={message} />
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/947040e23549c02923834538b75f73687c7be12a?placeholderIfAbsent=true"
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

export default ChatArea;
