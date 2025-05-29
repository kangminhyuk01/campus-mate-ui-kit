
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAQHeader = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home2');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <header className="px-56 text-base font-medium leading-none bg-white max-md:px-5 max-md:max-w-full">
      <div className="overflow-hidden px-0.5 w-full rounded-2xl bg-cyan-700 bg-opacity-20 shadow-[0px_4px_24px_rgba(0,0,0,0.16)] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between py-4 pr-3.5 pl-8 w-full bg-sky-100 bg-blend-normal max-md:pl-5 max-md:max-w-full">
          <nav className="flex gap-10 my-auto text-neutral-800">
            <h1 className="my-auto text-2xl font-extrabold tracking-tighter leading-none basis-auto">
              Campus Mate
            </h1>
            <button onClick={handleHomeClick} className="hover:text-sky-500 transition-colors">Home</button>
            <a href="#" className="hover:text-sky-500 transition-colors">Features</a>
          </nav>
          <div className="flex gap-3">
            <button 
              onClick={handleLogoutClick}
              className="px-2.5 py-2 rounded-lg border-2 border-solid border-slate-600 border-opacity-20 text-neutral-800 hover:bg-gray-50 transition-colors"
            >
              Log out
            </button>
            <button className="px-4 py-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors">
              Try it free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FAQHeader;
