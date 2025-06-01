
import React from 'react';
import { Message } from '../services/claudeApi';

interface ChatMessageProps {
  message: Message;
  userAvatar?: string;
  botAvatar?: string;
}

const ChatMessage = ({ message, userAvatar, botAvatar }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex gap-3 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <img
          src={botAvatar || "https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/947040e23549c02923834538b75f73687c7be12a?placeholderIfAbsent=true"}
          className="w-8 h-8 rounded-full flex-shrink-0"
          alt="Bot avatar"
        />
      )}
      
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
        isUser 
          ? 'bg-sky-500 text-white' 
          : 'bg-gray-100 text-gray-800'
      }`}>
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
