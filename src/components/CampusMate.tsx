
import React from "react";
import FriendlyChatHeader from "./FriendlyChatHeader";
import SidePanel from "./SidePanel";
import ChatArea from "./ChatArea";
import MessageInput from "./MessageInput";
import Home2Footer from "./Home2Footer";
import { useChat } from "../hooks/useChat";
import { Button } from "@/components/ui/button";

const CampusMate = () => {
  const { messages, isLoading, sendMessage, clearMessages } = useChat();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <FriendlyChatHeader />
      
      {/* Disclaimer */}
      <div className="w-full border-b border-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-gray-600 text-center">챗봇은 잘못된 응답을 할 수 있습니다.</p>
        </div>
      </div>
      
      <div className="flex flex-1 justify-center px-4 py-6">
        <div className="flex w-full max-w-7xl">
          <div className="mr-6">
            <SidePanel />
          </div>
          
          <div className="flex-1 max-w-4xl bg-white rounded-lg shadow-sm">
            <div className="flex flex-col h-full">
              <div className="flex-1 p-6 overflow-hidden">
                <ChatArea 
                  onSendMessage={sendMessage}
                  messages={messages}
                  isLoading={isLoading}
                />
              </div>
              
              <div className="border-t border-gray-200 p-4">
                <MessageInput 
                  onSendMessage={sendMessage}
                  isLoading={isLoading}
                />
              </div>
              
              {/* Reset button */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-center">
                  <Button
                    onClick={clearMessages}
                    variant="outline"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    채팅 초기화
                  </Button>
                </div>
              </div>
              
              {/* API Policy Notice */}
              <div className="p-4">
                <div className="flex justify-center">
                  <p className="text-sm text-gray-500 text-center">API 정책상, 1분에 한 번씩 질문 해주시길 바랍니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Home2Footer />
    </div>
  );
};

export default CampusMate;
