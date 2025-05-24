
import React from "react";
import Home2Header from "@/components/Home2Header";
import Home2Hero from "@/components/Home2Hero";
import Home2Footer from "@/components/Home2Footer";

const Home2 = () => {
  return (
    <div className="overflow-hidden pt-9 pb-24 bg-slate-50">
      <Home2Header />
      <div className="pb-24 mt-36 w-full bg-slate-50 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <Home2Hero />
        <Home2Footer />
      </div>
    </div>
  );
};

export default Home2;
