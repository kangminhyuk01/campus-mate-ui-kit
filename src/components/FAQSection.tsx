
import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqQuestions = [
    "Q. 경영정보학과 졸업요건(졸업인증제 충족)이 궁금해요.",
    "Q. 경영정보학과의 수업은 어떻게 진행되나요?",
    "Q. 다전공 신청기간과 경영대학 다전공 지원조건과 전형이 궁금해요.",
    "Q. 전공선택과 전공필수 차이는 뭐예요?",
    "Q. 부전공과 다전공의 차이점이 뭔가요?",
    "Q. 복수전공 포기 시, 다시 전공 학점을 채워야 하나요?",
    "Q. 계절학기 수강신청은 언제 하는 건가요?",
    "Q. 재수강하는 과목 신청 방법이 궁금해요."
  ];

  return (
    <section className="w-[81%] max-md:ml-0 max-md:w-full">
      <div className="w-full text-sm text-black max-md:mt-10 max-md:max-w-full">
        {faqQuestions.map((question, index) => (
          <FAQItem key={index} question={question} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
