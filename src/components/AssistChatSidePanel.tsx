
import React from "react";

const AssistChatSidePanel = () => {
  return (
    <nav className="overflow-hidden self-start py-6 text-base font-medium leading-none whitespace-nowrap bg-white text-neutral-800">
      <a href="#" className="block px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors">
        Dashboard
      </a>
      <a href="#" className="block px-4 py-2 bg-white rounded-lg max-md:pr-5 hover:bg-gray-50 transition-colors">
        Messages
      </a>
      <a href="#" className="block px-4 py-2 bg-white rounded-lg max-md:pr-5 hover:bg-gray-50 transition-colors">
        Settings
      </a>
      <a href="#" className="block px-4 py-2 bg-white rounded-lg max-md:pr-5 hover:bg-gray-50 transition-colors">
        Help
      </a>
    </nav>
  );
};

export default AssistChatSidePanel;
