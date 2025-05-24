
import React from "react";
import { Link } from "react-router-dom";

const FriendlyChatHeader = () => {
  return (
    <header className="flex flex-col justify-center items-center px-20 py-7 text-base font-medium leading-none bg-white max-md:px-5 max-md:max-w-full">
      <div className="overflow-hidden px-0.5 max-w-full rounded-2xl bg-cyan-700 bg-opacity-20 shadow-[0px_4px_24px_rgba(0,0,0,0.16)] w-[886px]">
        <nav className="flex flex-wrap gap-5 justify-between py-4 pr-3.5 pl-8 w-full bg-sky-100 bg-blend-normal max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-10 my-auto text-neutral-800">
            <h1 className="my-auto text-2xl font-extrabold tracking-tighter leading-none basis-auto">
              Campus Mate
            </h1>
            <Link to="/home2" className="my-auto hover:text-sky-600 transition-colors">Home</Link>
            <Link to="#" className="my-auto hover:text-sky-600 transition-colors">Features</Link>
          </div>
          <div className="flex gap-3">
            <Link 
              to="/" 
              className="px-2.5 py-2 rounded-lg border-2 border-solid border-slate-600 border-opacity-20 text-neutral-800 hover:bg-gray-50 transition-colors"
            >
              Log out
            </Link>
            <button className="px-4 py-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors">
              Try it free
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default FriendlyChatHeader;
