import React from "react";

const AiCreate = () => {
  return (
    <div className="bg-[#eef3f7] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* 🔷 HEADER */}
        <header className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0d1a]">
            Create while learning with our AI Builder
          </h2>
        </header>

        {/* 🔷 SECTION 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 py-12">

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://media.excellentwebworld.com/wp-content/uploads/2025/08/27090510/steps-to-build-an-ai-native-app.webp"
              alt="AI Prototype"
              className="rounded-xl shadow-2xl w-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-3xl font-extrabold text-[#0a0d1a] leading-tight">
              Go from idea to working prototype in seconds
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Describe your concept in natural language. With a few clarifying 
              questions, our AI Builder will generate a web-based app that you 
              can refine through conversation.
            </p>
          </div>
        </div>

        {/* 🔷 SECTION 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 py-12">

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://eu-central-1-shared-euc1-02.graphassets.com/AIhy1IrP4QESqCsetvw9Zz/y7zd2GmISwesYLoyiDEp"
              alt="Learning Dashboard"
              className="rounded-xl shadow-2xl w-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-3xl font-extrabold text-[#0a0d1a] leading-tight">
              Learn as you build, and build as you learn
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Switch to the Learn tab to understand what's happening behind the 
              scenes and get a personalized learning roadmap based on your prototype — 
              all without leaving your workspace.
            </p>
          </div>
        </div>

        {/* 🔷 SECTION 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12 py-12">

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://eu-central-1-shared-euc1-02.graphassets.com/AIhy1IrP4QESqCsetvw9Zz/8vAFj4t2Sq24ESTHZE8I"
              alt="AI Customization"
              className="rounded-xl shadow-2xl w-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-3xl font-extrabold text-[#0a0d1a] leading-tight">
              Create unique, reworkable prototypes
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Customize your experience based on your interests with help from AI 
              intelligence. Save your progress and continue improving your creations 
              as you learn.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AiCreate;