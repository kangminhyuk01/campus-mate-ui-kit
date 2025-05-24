
import React from "react";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-neutral-800">{title}</h3>
      {links.map((link, index) => (
        <a href="#" key={index} className={`${index > 0 ? "mt-2" : "mt-2"} hover:text-sky-600 transition-colors`}>
          {link}
        </a>
      ))}
    </div>
  );
};

const FriendlyChatFooter = () => {
  return (
    <footer className="flex gap-5 justify-between mt-20 w-full text-base font-medium leading-none text-gray-800 max-w-[1218px] max-md:mt-10 max-md:max-w-full">
      <div className="self-start mt-2 text-2xl font-extrabold tracking-tighter leading-none text-cyan-800">
        <h2>Campus Mate</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/c11d538707448268310bda7ef55ff991828d3d7f?placeholderIfAbsent=true"
          className="object-contain mt-14 w-24 aspect-[4] max-md:mt-10"
          alt="Payment options"
        />
      </div>

      <FooterColumn
        title="Company"
        links={["About Us", "Careers", "Press"]}
      />

      <FooterColumn
        title="Support"
        links={["Help Center", "Contact Us", "Privacy Policy"]}
      />

      <FooterColumn
        title="Legal"
        links={["Terms of Service", "Cookie Policy"]}
      />

      <FooterColumn
        title="Social"
        links={["Facebook", "Twitter", "LinkedIn"]}
      />
    </footer>
  );
};

export default FriendlyChatFooter;
