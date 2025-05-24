
import React from "react";
import FriendlyChatHeader from "./FriendlyChatHeader";
import SidePanel from "./SidePanel";
import ChatArea from "./ChatArea";
import MessageInput from "./MessageInput";
import FriendlyChatFooter from "./FriendlyChatFooter";

const CampusMate = () => {
  return (
    <main className="overflow-hidden pt-14 pr-20 pb-32 pl-2.5 bg-white max-md:pr-5 max-md:pb-24">
      <FriendlyChatHeader />
      <section className="flex flex-wrap gap-10 mt-64 w-full max-w-[1101px] max-md:mt-10 max-md:max-w-full">
        <SidePanel />
        <article className="grow shrink-0 px-20 bg-white basis-0 rounded-[30px] w-fit max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-start pb-4 bg-white rounded-2xl max-md:max-w-full">
            <div className="flex flex-col mr-0 w-full max-md:max-w-full">
              <div className="flex flex-col items-start self-center max-w-full w-[645px]">
                <ChatArea />
              </div>
              <div className="flex flex-col items-start pr-20 pb-8 pl-2.5 mt-9 w-full bg-white max-md:pr-5 max-md:max-w-full">
                <MessageInput />
                <FriendlyChatFooter />
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default CampusMate;
