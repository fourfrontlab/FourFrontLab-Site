'use client';
import { useState, useCallback, memo } from 'react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most of our projects are completed within 4 to 8 weeks, depending on the complexity of the scope. MVPs and single-page apps are on the faster end, while complex custom systems take longer."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer ongoing maintenance and support packages to ensure your software remains up-to-date, secure, and performs optimally as your user base grows."
  },
  {
    question: "What is your typical tech stack?",
    answer: "We primarily work with modern web technologies including React, Next.js, Node.js, and Supabase or PostgreSQL. However, we tailor our stack to the specific needs of your project."
  },
  {
    question: "Who owns the code?",
    answer: "You do. Once the project is completed and paid in full, all intellectual property and source code are transferred entirely to your organization."
  },
  {
    question: "How do you handle project management?",
    answer: "You'll have direct access to the engineers building your product. We use tools like Linear and Slack for transparent, asynchronous communication, alongside weekly syncs to review progress."
  }
];

const FAQItem = memo(({ faq, index, isActive, onToggle }) => {
  return (
    <div 
      className={`border rounded-none overflow-hidden transition-colors duration-300 ${isActive ? 'border-[#151515] bg-[#151515]/5' : 'border-[#151515] bg-[#FAFAF8] hover:bg-[#151515]/5'}`}
    >
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => onToggle(index)}
      >
        <span className={`font-inter font-bold text-lg ${isActive ? 'text-[#1B3A5C]' : 'text-[#151515]'}`}>
          {faq.question}
        </span>
        <span className={`font-mono text-xl transition-transform duration-300 ${isActive ? 'rotate-180 text-[#1B3A5C]' : 'text-[#5C5C5C]'}`}>
          ↓
        </span>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#5C5C5C] font-medium font-inter text-base border-t border-[#151515]/20 pt-4">
          {faq.answer}
        </p>
      </div>
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = useCallback((index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div className="max-w-3xl mx-auto w-full py-24 px-6 md:px-0">
      <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase">SEC. 08 // FAQ</span>
      <h2 className="text-3xl md:text-5xl font-bold font-inter text-[#151515] tracking-tight mb-8">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i}
            index={i}
            faq={faq}
            isActive={activeIndex === i}
            onToggle={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
}
