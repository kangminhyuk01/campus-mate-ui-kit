
import React from 'react';

const FAQSidebarMenu = () => {
  const menuItems = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Messages', href: '#messages' },
    { label: 'Settings', href: '#settings' },
    { label: 'FAQ', href: '#faq', active: true }
  ];

  return (
    <nav className="flex overflow-hidden gap-1.5 items-start mt-56 text-base font-medium leading-none text-neutral-800 max-md:mt-10 max-md:mr-1.5">
      <div className="flex overflow-hidden flex-col items-start w-[154px]">
        <div className="overflow-hidden py-6 bg-white">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors ${
                index > 0 ? 'max-md:pr-5' : ''
              } ${item.active ? 'font-semibold' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FAQSidebarMenu;
