
import React from 'react';

const FAQFooter = () => {
  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Privacy Policy']
    },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Cookie Policy']
    },
    {
      title: 'Social',
      links: ['Facebook', 'Twitter', 'LinkedIn']
    }
  ];

  return (
    <footer className="flex flex-col justify-center py-8 w-full text-base font-medium leading-none text-gray-800 bg-white max-md:max-w-full">
      <div className="flex gap-5 justify-between pr-20 w-full max-md:pr-5 max-md:max-w-full">
        <div className="self-start mt-2 text-2xl font-extrabold tracking-tighter leading-none text-cyan-800">
          <h2>Campus Mate</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/6abb6e6b3259e40354edf81d95cd9e96dc08f0d2?placeholderIfAbsent=true"
            alt="Campus Mate Logo"
            className="object-contain mt-14 w-24 aspect-[4] max-md:mt-10"
          />
        </div>
        {footerSections.map((section, index) => (
          <div key={index} className={`flex flex-col ${index === 2 || index === 3 ? 'items-start' : ''} ${index === 3 ? 'self-start whitespace-nowrap' : ''}`}>
            <h3 className="text-neutral-800">{section.title}</h3>
            {section.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className={`mt-2 hover:text-sky-500 transition-colors ${
                  linkIndex === 0 && index === 1 ? 'max-md:mr-1.5' : ''
                } ${
                  linkIndex > 0 && (index === 0 || index === 1) ? 'self-start' : ''
                } ${
                  linkIndex === 2 && index === 1 ? 'self-stretch' : ''
                } ${
                  linkIndex === 0 && index === 2 ? 'self-stretch' : ''
                } ${
                  linkIndex === 0 && index === 3 ? 'self-stretch' : ''
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default FAQFooter;
