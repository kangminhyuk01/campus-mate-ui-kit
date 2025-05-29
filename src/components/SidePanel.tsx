
import React from "react";
import { useNavigate } from "react-router-dom";

const SidePanel = () => {
  const navigate = useNavigate();

  const handleFAQClick = () => {
    navigate("/FAQ");
  };

  return (
    <nav className="w-48 bg-white rounded-lg shadow-sm p-4 h-fit">
      <div className="space-y-2">
        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          Dashboard
        </a>
        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          Messages
        </a>
        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          Settings
        </a>
        <button 
          onClick={handleFAQClick}
          className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
        >
          FAQ
        </button>
      </div>
    </nav>
  );
};

export default SidePanel;
