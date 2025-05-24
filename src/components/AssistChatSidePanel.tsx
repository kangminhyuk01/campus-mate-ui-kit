
import React from "react";

const AssistChatSidePanel = () => {
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
        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          Help
        </a>
      </div>
    </nav>
  );
};

export default AssistChatSidePanel;
