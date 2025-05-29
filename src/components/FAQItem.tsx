
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
}

const FAQItem = ({ question }: FAQItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-wrap gap-5 justify-between py-1 pr-8 pl-16 mt-5 first:mt-0 bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:max-w-full">
      <p className="my-auto text-sm text-black">
        {question}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex-shrink-0 hover:opacity-70 transition-opacity"
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} FAQ item`}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/84debdf67c67bbf16c94fc1088207800c5ffe9fa?placeholderIfAbsent=true"
          alt={isExpanded ? "Collapse" : "Expand"}
          className="object-contain shrink-0 aspect-square w-[39px]"
        />
      </button>
    </div>
  );
};

export default FAQItem;
