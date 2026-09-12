'use client';
import { useState, useRef } from 'react';
import gsap from 'gsap';

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

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <h2 className="text-3xl md:text-5xl font-bold font-space text-[#1A1A1A] tracking-tight mb-8">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => {
          const isActive = activeIndex === i;
          return (
            <div 
              key={i} 
              className={`border rounded-sm overflow-hidden transition-colors duration-300 ${isActive ? 'border-[#0E5C8C] bg-white' : 'border-[#E0E2E5] bg-[#F0F1F3]'}`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(i)}
              >
                <span className={`font-inter font-medium text-lg ${isActive ? 'text-[#0E5C8C]' : 'text-[#1A1A1A]'}`}>
                  {faq.question}
                </span>
                <span className={`text-xl transition-transform duration-300 ${isActive ? 'rotate-180 text-[#0E5C8C]' : 'text-[#5A5A5A]'}`}>
                  ↓
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[#5A5A5A] font-light font-inter text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
