import React from 'react';

const Step = ({ number, title, description }) => (
  <div className="flex items-start gap-8 max-w-2xl mx-auto py-8">
    {/* Number Column */}
    <div className="flex-shrink-0">
      <span className="text-6xl md:text-7xl font-bold text-[#ffd300] leading-none">
        {number}
      </span>
    </div>

    {/* Content Column */}
    <div className="space-y-4">
      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        {title}
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const AiWorks = () => {
  return (
    <section className="bg-[#000] min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-5xl font-extrabold text-white">
            How it works
          </h2>
          <div className="space-y-1">
            <p className="text-lg md:text-xl text-white font-medium mt-10">
              Turn any idea into a working AI prototype in minutes.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Build while you learn (& learn while you build) — no coding experience needed.
            </p>
          </div>
        </header>

        {/* Steps List */}
        <div className="mt-10">
          <Step 
            number="1"
            title="Start with an idea"
            description="Simply describe what you want. Not sure? Choose from our curated ideas, and our AI Builder sets up the foundation instantly."
          />
          
          <Step 
            number="2"
            title="Build and learn in your workspace"
            description="Get explanations for every step in development, then connect them back to your prototype to apply your skills instantly."
          />

          <Step 
            number="3"
            title="Evolve your prototype"
            description="Easily save and continue making your creations even better as your skills improve."
          />
        </div>

      </div>
    </section>
  );
};

export default AiWorks;