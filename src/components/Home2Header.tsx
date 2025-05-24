
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Divider from "./Divider";

const Home2Header = () => {
  return (
    <header className="flex flex-col pt-4 w-full text-base font-medium leading-none bg-slate-50 text-neutral-800 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1366px] max-md:max-w-full">
        <nav className="flex gap-7 my-auto">
          <h1 className="grow text-2xl tracking-tighter leading-none text-sky-600">
            Campus Mate
          </h1>
          <Link to="/home2" className="hover:text-sky-600 transition-colors">Home</Link>
          <Link to="#" className="hover:text-sky-600 transition-colors">Features</Link>
        </nav>
        <div className="flex gap-7 items-center">
          <Link to="#" className="grow self-stretch my-auto hover:text-sky-600 transition-colors">
            Download app
          </Link>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/eee0d79f4477db59b98ca51a827958476e4f1c9a?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-px rounded-sm aspect-[0.03]"
            alt="Divider"
          />
          <Link to="/" className="self-stretch my-auto hover:text-sky-600 transition-colors">
            Log out
          </Link>
          <Button className="self-stretch px-4 py-2 bg-sky-500 text-white hover:bg-sky-600 transition-colors">
            Try it free
          </Button>
        </div>
      </div>
      <Divider />
    </header>
  );
};

export default Home2Header;
