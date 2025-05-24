
import React from "react";
import FriendlyChatHeader from "./FriendlyChatHeader";
import SidePanel from "./SidePanel";
import ChatArea from "./ChatArea";
import MessageInput from "./MessageInput";
import FriendlyChatFooter from "./FriendlyChatFooter";

const CampusMate = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <FriendlyChatHeader />
      
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        <SidePanel />
        
        <div className="flex-1 ml-6 bg-white rounded-lg shadow-sm">
          <div className="flex flex-col h-full">
            <div className="flex-1 p-6">
              <ChatArea />
            </div>
            
            <div className="border-t border-gray-200 p-4">
              <MessageInput />
            </div>
          </div>
        </div>
      </div>
      
      <FriendlyChatFooter />
    </div>
  );
};

export default CampusMate;
