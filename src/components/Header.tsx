
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col pt-4 w-full text-base font-medium leading-none bg-slate-50 text-neutral-800">
      <div className="flex flex-wrap gap-5 justify-between px-4 md:px-6 lg:px-8 self-center w-full max-w-[1366px]">
        <nav className="flex gap-7 my-auto items-center">
          <h1 className="text-2xl tracking-tighter leading-none text-sky-600 font-semibold">
            Campus Mate
          </h1>
          <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
          <Link to="#" className="hover:text-sky-600 transition-colors">Features</Link>
        </nav>
        <div className="flex gap-6 items-center">
          <Link to="#" className="self-stretch my-auto hover:text-sky-600 transition-colors">
            Download app
          </Link>
          <div className="hidden md:block object-contain shrink-0 self-stretch my-auto w-px h-6 bg-gray-300 rounded-sm" />
          <Link to="/login" className="self-stretch my-auto hover:text-sky-600 transition-colors">
            Log in
          </Link>
          <Button className="self-stretch px-4 py-2 bg-sky-500 text-white hover:bg-sky-600 transition-colors">
            Try it free
          </Button>
        </div>
      </div>
      <div className="h-px mt-4 w-full bg-gray-200" />
    </header>
  );
};

export default Header;
