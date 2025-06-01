
import React from "react";
import Home2Header from "@/components/Home2Header";
import Home2Hero from "@/components/Home2Hero";
import Home2Footer from "@/components/Home2Footer";

const Home2 = () => {
  return (
    <div className="bg-slate-50">
      <Home2Header />
      <div className="w-full bg-slate-50">
        <Home2Hero />
        <Home2Footer />
      </div>
    </div>
  );
};

export default Home2;
