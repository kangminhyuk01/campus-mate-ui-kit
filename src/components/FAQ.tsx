
import React from 'react';
import FAQHeader from './FAQHeader';
import FAQSection from './FAQSection';
import FAQSidebar from './FAQSidebar';
import FAQFooter from './FAQFooter';
import FAQItem from './FAQItem';

const FAQ = () => {
  return (
    <div className="flex overflow-hidden flex-col items-start pt-20 pr-20 pb-11 bg-white max-md:pr-5">
      <FAQHeader />

      <main className="w-full">
        <h1 className="mt-28 ml-72 text-4xl font-bold text-black max-md:mt-10 max-md:ml-2.5">
          FAQ
        </h1>

        <div className="flex flex-wrap gap-5 justify-between py-1 pr-8 pl-16 mt-9 max-w-full text-sm text-black bg-white rounded-xl border border-black border-solid w-[701px] max-md:px-5">
          <p className="my-auto">
            Q. 경영정보학과 졸업요건(졸업인증제 충족)이 궁금해요.
          </p>
          <button className="flex-shrink-0 hover:opacity-70 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/84debdf67c67bbf16c94fc1088207800c5ffe9fa?placeholderIfAbsent=true"
              alt="Expand FAQ"
              className="object-contain shrink-0 aspect-square w-[39px]"
            />
          </button>
        </div>

        <div className="z-10 mt-5 max-w-full w-[970px]">
          <div className="flex gap-5 max-md:flex-col">
            <FAQSection />
            <FAQSidebar />
          </div>
        </div>
      </main>

      <FAQFooter />
    </div>
  );
};

export default FAQ;
