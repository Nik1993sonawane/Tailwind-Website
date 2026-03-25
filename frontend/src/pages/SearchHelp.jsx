import React, { useState } from "react";

const SearchHelp = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    1: null,
    2: null,
    3: null,
  });

  const handleSelection = (stepNumber, value) => {
    setSelections({ ...selections, [stepNumber]: value });
    if (step < 3) setStep(step + 1);
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepData = {
    1: {
      question: "What do you want to learn about?",
      options: [
        "Web development",
        "Data science",
        "Computer science",
        "Web design",
        "Artificial intelligence",
        "Machine learning",
        "Game development",
        "Mobile development",
        "Data visualization",
        "Cloud computing",
        "Cybersecurity",
        "Not sure yet",
      ],
      cols: "grid-cols-2",
      footer:
        "We have hundreds of courses that cover just about everything.",
    },
    2: {
      question: "What do you want to achieve?",
      options: [
        "Switch careers",
        "Learn a skill for my job",
        "Build a project",
        "Learn for school",
        "Learn for fun",
        "Not sure yet",
      ],
      cols: "grid-cols-1",
      footer:
        "People who set a goal are 40% more likely to achieve it.",
    },
    3: {
      question: "How much coding experience do you have?",
      options: [
        {
          label: "Beginner",
          sub: "I've never coded, or I only know the basics.",
        },
        {
          label: "Intermediate",
          sub: "I've created some projects with code.",
        },
        {
          label: "Advanced",
          sub: "I have professional experience writing code.",
        },
      ],
      cols: "grid-cols-1",
      footer:
        "Our hands-on learning environment is designed for all levels.",
    },
  };

  const currentStep = stepData[step];

  return (
    <div className="min-h-screen bg-[#eef3f7] flex flex-col items-center px-6 py-12 text-[#0a0d1a]">

      {/* 🔷 HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Find what's right for you
        </h1>

        <p className="text-lg opacity-80 mb-8">
          Answer 3 quick questions to get recommendations that match your interests.
        </p>

        {/* 🔷 ANIMATED PROGRESS BAR */}
        <div className="flex items-center justify-center">

          {/* STEP 1 */}
          <div className="flex items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-500 ${
                step >= 1
                  ? "bg-black text-white border-black scale-110"
                  : "border-gray-400 text-gray-400"
              }`}
            >
              {step > 1 ? "✓" : "1"}
            </div>

            <div className="relative w-20 h-1 bg-gray-300 mx-2 overflow-hidden rounded">
              <div
                className={`absolute top-0 left-0 h-full bg-black transition-all duration-500 ${
                  step >= 2 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-500 ${
                step >= 2
                  ? "bg-black text-white border-black scale-110"
                  : "border-gray-400 text-gray-400"
              }`}
            >
              {step > 2 ? "✓" : "2"}
            </div>

            <div className="relative w-20 h-1 bg-gray-300 mx-2 overflow-hidden rounded">
              <div
                className={`absolute top-0 left-0 h-full bg-black transition-all duration-500 ${
                  step >= 3 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>

          {/* STEP 3 */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-500 ${
              step === 3
                ? "bg-black text-white border-black scale-110"
                : "border-gray-400 text-gray-400"
            }`}
          >
            3
          </div>
        </div>
      </div>

      {/* 🔷 CONTENT */}
      <div className="max-w-3xl w-full">

        {/* Question */}
        <h2 className="text-2xl font-bold mb-8 text-center">
          {currentStep.question}
        </h2>

        {/* Options */}
        <div className={`grid ${currentStep.cols} gap-4`}>
          {currentStep.options.map((opt, idx) => {
            const label = typeof opt === "string" ? opt : opt.label;

            return (
              <button
                key={idx}
                onClick={() => handleSelection(step, label)}
                className="w-full text-left p-4 border border-black bg-white cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:shadow-[0_0_30px_blue]"
              >
                <div className="font-bold">{label}</div>

                {opt.sub && (
                  <div className="text-sm text-gray-600 mt-1">
                    {opt.sub}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Back Button */}
        {step > 1 && (
          <button
            onClick={goBack}
            className="mt-8 text-blue-700 font-bold hover:underline"
          >
            ← Back
          </button>
        )}

        {/* Footer */}
        <p className="mt-10 text-center text-sm opacity-80">
          {currentStep.footer}
        </p>

      </div>
    </div>
  );
};

export default SearchHelp;