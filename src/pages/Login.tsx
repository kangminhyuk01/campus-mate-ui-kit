
import React from "react";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import LoginFooter from "@/components/LoginFooter";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <LoginForm />
      </main>
      
      <LoginFooter />
    </div>
  );
};

export default Login;
