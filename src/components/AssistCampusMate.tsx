
import React from "react";
import AssistChatHeader from "./AssistChatHeader";
import AssistChatSidePanel from "./AssistChatSidePanel";
import AssistChatChatArea from "./AssistChatChatArea";
import AssistChatMessageInput from "./AssistChatMessageInput";
import Home2Footer from "./Home2Footer";
import { useChat } from "../hooks/useChat";

const AssistCampusMate = () => {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AssistChatHeader />
      
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
          </div>
        </div>
      </div>
      
      <Home2Footer />
    </div>
  );
};

export default AssistCampusMate;
