import React, { useState } from "react";

/* 🔷 Accordion Item */
const AccordionItem = ({ question, answer, linkText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left hover:bg-gray-100 transition-colors"
      >
        {/* Question */}
        <span className="text-black font-bold text-[16px]">
          {question}
        </span>

        {/* Icon */}
        <span
          className={`text-lg transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "︿" : "﹀"}
        </span>
      </button>

      {isOpen && (
        <div className="pb-6 pr-6 text-gray-700 text-[15px] leading-relaxed">
          <span>{answer} </span>

          {/* Optional Link */}
          {linkText && (
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              {linkText}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

/* 🔷 Main Component */
const AiQuestion = () => {
  // ✅ FIXED: Proper array instead of broken object
  const faqData = [
    {
      question: "What is the Codecademy AI Builder?",
      answer:
        "Our AI Builder changes the way you learn. Instead of starting with a lesson, then moving to application, you learn while building (and build while learning). With it, you’re encouraged to follow your curiosity, where AI creates fully personalized learning paths based on what interests you.",
    },
    {
      question: "Who is the AI Builder for?",
      answer:
        "It's designed for anyone who wants to turn ideas into functional prototypes, features, and apps.",
    },
    {
      question: "Do I need coding experience to use it?",
      answer:
        "Nope! Whether you already know how to code or not, our AI Builder meets you where you’re at and helps you dive deeper to fully understand the concepts you’re working with.",
    },
    {
      question: "What can I build with the AI Builder?",
      answer:
        "To start, you can build web apps using HTML/CSS and JavaScript. Look out for more capabilities launching in the future.",
    },
    {
      question: "Can I deploy my prototype?",
      answer:
        "Not yet, but we’re working on it. We have big plans for our AI Builder. Just give us some time, and you'll be the first to hear when it’s possible to dream, describe, and deploy all in one place.",
    },
  ];

  return (
    <section className="bg-[#eef3f7] py-10 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-black text-[28px] font-bold text-center mb-8">
          Frequently asked questions
        </h2>

        {/* FAQ List */}
        <div className="border-t border-gray-400">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              linkText={item.linkText}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiQuestion;