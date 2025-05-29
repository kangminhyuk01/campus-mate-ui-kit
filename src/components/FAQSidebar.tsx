
import React from 'react';
import FAQModeToggle from './FAQModeToggle';
import FAQSidebarMenu from './FAQSidebarMenu';

const FAQSidebar = () => {
  return (
    <aside className="ml-5 w-[19%] max-md:ml-0 max-md:w-full">
      <FAQModeToggle />
      <FAQSidebarMenu />
    </aside>
  );
};

export default FAQSidebar;
