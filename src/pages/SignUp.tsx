
import React from "react";
import Header from "@/components/Header";
import SignUpForm from "@/components/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <SignUpForm />
      </main>
      
      <footer className="flex w-full bg-slate-50 min-h-12" />
    </div>
  );
};

export default SignUp;
