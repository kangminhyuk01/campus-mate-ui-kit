
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 mt-9 w-full text-base font-medium leading-none bg-slate-50 text-neutral-800">
      <div className="h-px w-full bg-gray-200" />
      <div className="flex gap-5 justify-between mt-6 px-4 md:px-12 w-full max-w-[1199px] mx-auto flex-wrap">
        <div className="self-start mt-2">
          <h2 className="text-2xl tracking-tighter leading-none text-sky-600">Campus Mate</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b462f5740917c1724a0162c19ed670a2c1ba5a76"
            alt="Campus Mate Logo"
            className="object-contain mt-10 md:mt-14 w-24 aspect-[4]"
          />
        </div>

        <nav className="flex flex-col">
          <h3 className="font-semibold">Company</h3>
          <Link to="#" className="mt-2 hover:text-sky-600 transition-colors">About Us</Link>
          <Link to="#" className="self-start mt-2 hover:text-sky-600 transition-colors">Careers</Link>
          <Link to="#" className="self-start mt-2 hover:text-sky-600 transition-colors">Blog</Link>
        </nav>

        <nav className="flex flex-col items-start">
          <h3 className="font-semibold">Resources</h3>
          <Link to="#" className="mt-2 hover:text-sky-600 transition-colors">Help Center</Link>
          <Link to="#" className="mt-2 hover:text-sky-600 transition-colors">Contact Support</Link>
          <Link to="#" className="self-stretch mt-2 hover:text-sky-600 transition-colors">API Documentation</Link>
        </nav>

        <nav className="flex flex-col items-start self-start">
          <h3 className="font-semibold">Legal</h3>
          <Link to="#" className="mt-2 hover:text-sky-600 transition-colors">Privacy Policy</Link>
          <Link to="#" className="self-stretch mt-2 hover:text-sky-600 transition-colors">Terms of Service</Link>
        </nav>

        <nav className="flex flex-col">
          <h3 className="font-semibold">Follow Us</h3>
          <Link to="#" className="self-start mt-2 hover:text-sky-600 transition-colors">Twitter</Link>
          <Link to="#" className="self-start mt-2 hover:text-sky-600 transition-colors">LinkedIn</Link>
          <Link to="#" className="mt-2 hover:text-sky-600 transition-colors">Facebook</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
