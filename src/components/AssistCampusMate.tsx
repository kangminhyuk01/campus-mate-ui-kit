
import React from "react";
import AssistChatHeader from "./AssistChatHeader";
import AssistChatSidePanel from "./AssistChatSidePanel";
import AssistChatChatArea from "./AssistChatChatArea";
import AssistChatMessageInput from "./AssistChatMessageInput";
import Home2Footer from "./Home2Footer";
import { useChat } from "../hooks/useChat";
import { Button } from "@/components/ui/button";

const AssistCampusMate = () => {
  const { messages, isLoading, sendMessage, clearMessages } = useChat();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AssistChatHeader />
      
      {/* Disclaimer */}
      <div className="w-full bg-yellow-50 border-b border-yellow-200 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-gray-600 text-center">챗봇은 잘못된 응답을 할 수 있습니다.</p>
        </div>
      </div>
      
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        <AssistChatSidePanel />
        
        <div className="flex-1 ml-6 bg-white rounded-lg shadow-sm">
          <div className="flex flex-col h-full">
            <div className="flex-1 p-6 overflow-hidden">
              <AssistChatChatArea 
                onSendMessage={sendMessage}
                messages={messages}
                isLoading={isLoading}
              />
            </div>
            
            <div className="border-t border-gray-200 p-4">
              <AssistChatMessageInput 
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
          </div>
        </div>
      </div>
      
      <Home2Footer />
    </div>
  );
};

export default AssistCampusMate;
