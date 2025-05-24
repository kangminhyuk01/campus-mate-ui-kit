
import React from "react";
import AssistChatHeader from "./AssistChatHeader";
import AssistChatSidePanel from "./AssistChatSidePanel";
import AssistChatChatArea from "./AssistChatChatArea";

const AssistCampusMate = () => {
  return (
    <main className="overflow-hidden px-2.5 py-16 bg-white">
      <AssistChatHeader />
      <section className="flex flex-wrap gap-5 justify-between mt-60 max-md:mt-10 max-md:max-w-full">
        <AssistChatSidePanel />
        <AssistChatChatArea />
      </section>
    </main>
  );
};

export default AssistCampusMate;
