
import React from "react";
import { useNavigate } from "react-router-dom";

const AssistChatHeader = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home2");
  };

  const handleLogoutClick = () => {
    navigate("/");
  };

  return (
    <header className="flex flex-col justify-center items-center px-20 py-7 w-full text-base font-medium leading-none bg-white max-md:px-5 max-md:max-w-full">
      <div className="overflow-hidden px-0.5 max-w-full rounded-2xl bg-cyan-700 bg-opacity-20 shadow-[0px_4px_24px_rgba(0,0,0,0.16)] w-[886px]">
        <nav className="flex flex-wrap gap-5 justify-between py-4 pr-3.5 pl-8 w-full bg-orange-400 bg-blend-normal max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-10 my-auto text-neutral-800">
            <h1 className="my-auto text-2xl font-extrabold tracking-tighter leading-none basis-auto">
              Campus Mate
            </h1>
            <button onClick={handleHomeClick} className="my-auto hover:text-sky-600 transition-colors">Home</button>
            <a href="#" className="my-auto">Features</a>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleLogoutClick}
              className="px-2.5 py-2 rounded-lg border-2 border-solid border-neutral-800 text-neutral-800 hover:bg-gray-100 transition-colors"
            >
              Log out
            </button>
            <button className="px-4 py-2 text-black bg-sky-100 rounded-lg border border-black border-solid hover:bg-sky-200 transition-colors">
              Try it free
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AssistChatHeader;
