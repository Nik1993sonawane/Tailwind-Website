import React, { useState } from "react";

/* 🔷 Accordion Item */
const AccordionItem = ({ question, answer, linkText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left hover:bg-black-50 transition-colors"
      >
        {/* 🔷 Question */}
        <span className="text-[#000] font-bold text-[18px]">
          {question}
        </span>

        <span
          className={`text-lg transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "︿" : "﹀"}
        </span>
      </button>

      {isOpen && (
        <div className="pb-6 pr-12 text-black-700 text-[18px] leading-relaxed">
          
          {/* 🔷 Answer */}
          <span>{answer} </span>

          {/* 🔷 Optional Link */}
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

/* 🔷 Section Header */
const SectionHeader = ({ title }) => (
  <h3 className="text-[#000] text-[35px] font-bold text-center mt-10 mb-10">
    {title}
  </h3>
);

/* 🔷 Main Component */
const TransformQuestion = () => {
  const faqData = {
    "General": [
      {
        question: "What is Codecademy Teams?",
        answer: "Codecademy Teams is a collaborative learning solution that helps companies upskill employees in coding, data, and technical subjects. It includes interactive courses, team progress tracking, and administrative tools for managing learning at scale."
      },
      {
        question: "Who is Codecademy Teams for?",
        answer: "Codecademy Teams is ideal for small to mid-sized organizations looking to build technical capabilities across engineering, data, product, and other digital teams. Whether you’re onboarding new hires or investing in upskilling, Teams supports learning at every level."
      }
    ],
    "Pricing and billing": [
      { 
        question: "How is Teams priced?", 
        answer: "Teams is priced per user, billed annually. Discounts are available for larger groups. You can add seats to an existing plan anytime at a prorated rate." 
      },
      { 
        question: "Can I pay by invoice?", 
        answer: "Yes—Teams purchases are automatically invoiced. No need to request it separately.",
        linkText: "More on invoices →" 
      },
      { 
        question: "Do you offer discounts for large teams?", 
        answer: "Yes. For 25+ seats or more advanced needs, contact our team to discuss custom pricing." 
      },
      { 
        question: "Is there a free trial?", 
        answer: "Yes. You can start a free trial with limited seats to explore the platform.",
        linkText: "How trials work →" 
      }
    ],
    "Features and onboarding": [
      { 
        question: "What's included with Teams?", 
        answer: "Access to all content, team management tools, progress tracking, reporting, and support." 
      },
      { 
        question: "Do you offer onboarding support?", 
        answer: "Yes. We provide onboarding resources for all Teams plans. For larger groups, live onboarding is available." 
      },
      { 
        question: "Do you support LMS or SSO integration?", 
        answer: "These are available with Enterprise plans." 
      }
    ],
    "Enterprise and add-ons": [
      { 
        question: "What's the difference between Teams and Enterprise?", 
        answer: "Enterprise includes everything in Teams plus integrations, invoicing via contract, and enhanced support. Some buyers may also be eligible for Skillsoft’s broader platform (Percipio)." 
      },
      { 
        question: "Does Enterprise include extra content?", 
        answer: "Not on Codecademy.com. If you need training in areas like compliance or leadership, we offer optional access to Skillsoft’s Percipio platform." 
      },
      { 
        question: "Can I bundle with other Skillsoft offering?", 
        answer: "Yes. Reach out to discuss bundled solutions with Percipio or other content options." 
      }
    ],
    "User Management": [
      { 
        question: "How do I manage my team?", 
        answer: "Yes. Admins can track usage, completions, and progress.",
        linkText: "Reporting explained →" 
      },
      { 
        question: "Can I see learner progress?", 
        answer: "Not on Codecademy.com. If you need training in areas like compliance or leadership, we offer optional access to Skillsoft’s Percipio platform." 
      },
      { 
        question: "Is there a minimum team size?", 
        answer: "There’s no strict minimum, but Teams is best for groups of 5+." 
      }
    ]
  };

  return (
    <section className="bg-[#eef3f7] py-10 px-6 ">
      <div className="max-w-4xl mx-auto">

        {/* 🔷 Title */}
        <h2 className="text-[#000] text-[35px] font-bold text-center mb-6">
          Frequently asked questions
        </h2>

        {/* 🔷 FAQ Sections */}
        {Object.entries(faqData).map(([section, questions]) => (
          <div key={section} className="mb-6">
            <SectionHeader title={section} />

            <div className="border-t border-black-400">
              {questions.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  linkText={item.linkText}
                />
              ))}
            </div>
          </div>
        ))}

        {/* 🔷 Footer */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="text-blue-700 font-bold text-[15px] hover:underline"
          >
            View Help Center
          </a>
        </div>

      </div>
    </section>
  );
};

export default TransformQuestion;