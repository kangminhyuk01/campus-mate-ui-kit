
import React from "react";

const AssistChatFooter = () => {
  return (
    <footer className="flex gap-5 justify-between mt-14 w-full text-base font-medium leading-none text-gray-800 max-w-[1218px] max-md:mt-10 max-md:max-w-full">
      <div className="self-start mt-2 text-2xl font-extrabold tracking-tighter leading-none text-cyan-800">
        <h2>Campus Mate</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/4a8305e84fc62e59ea9d1bb7467b9ab24d0840b0?placeholderIfAbsent=true"
          alt="Payment methods"
          className="object-contain mt-14 w-24 aspect-[4] max-md:mt-10"
        />
      </div>

      <nav className="flex flex-col">
        <h3 className="text-neutral-800">Company</h3>
        <a href="#" className="mt-2 max-md:mr-1.5 hover:text-sky-600 transition-colors">About Us</a>
        <a href="#" className="self-start mt-2 hover:text-sky-600 transition-colors">Careers</a>
        <a href="#" className="self-start mt-2 hover:text-sky-600 transition-colors">Press</a>
      </nav>

      <nav className="flex flex-col items-start">
        <h3 className="text-neutral-800">Support</h3>
        <a href="#" className="mt-2 hover:text-sky-600 transition-colors">Help Center</a>
        <a href="#" className="mt-2 hover:text-sky-600 transition-colors">Contact Us</a>
        <a href="#" className="self-stretch mt-2 hover:text-sky-600 transition-colors">Privacy Policy</a>
      </nav>

      <nav className="flex flex-col items-start self-start">
        <h3 className="text-neutral-800">Legal</h3>
        <a href="#" className="self-stretch mt-2 hover:text-sky-600 transition-colors">Terms of Service</a>
        <a href="#" className="mt-2 hover:text-sky-600 transition-colors">Cookie Policy</a>
      </nav>

      <nav className="flex flex-col items-start whitespace-nowrap">
        <h3 className="text-neutral-800">Social</h3>
        <a href="#" className="self-stretch mt-2 hover:text-sky-600 transition-colors">Facebook</a>
        <a href="#" className="mt-2 hover:text-sky-600 transition-colors">Twitter</a>
        <a href="#" className="mt-2 hover:text-sky-600 transition-colors">LinkedIn</a>
      </nav>
    </footer>
  );
};

export default AssistChatFooter;
