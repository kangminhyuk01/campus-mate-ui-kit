
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow overflow-hidden pt-9 pb-24">
        <section className="pb-24 mt-10 md:mt-36 w-full">
          <HeroSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
