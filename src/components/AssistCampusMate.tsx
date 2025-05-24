
import React from "react";
import AssistChatHeader from "./AssistChatHeader";
import AssistChatSidePanel from "./AssistChatSidePanel";
import AssistChatChatArea from "./AssistChatChatArea";

const AssistCampusMate = () => {
  return (
    <main className="min-h-screen bg-white">
      <AssistChatHeader />
      <div className="flex gap-8 max-w-7xl mx-auto px-4 py-8">
        <AssistChatSidePanel />
        <div className="flex-1">
          <AssistChatChatArea />
        </div>
      </div>
    </main>
  );
};

export default AssistCampusMate;
