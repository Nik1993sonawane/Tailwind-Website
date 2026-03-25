import React from 'react';

const Symbol = () => {
  return (
    <section className="relative w-full bg-[#000] px-6 overflow-hidden flex flex-col items-center justify-center text-center">

      <div className="relative z-10 max-w-4xl">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-10">
          <div className="border-4 border-white px-2 py-1 mr-1">
            <span className="text-white text-4xl font-bold tracking-tighter uppercase">Code</span>
          </div>
          <span className="text-white text-4xl font-bold tracking-tighter uppercase">Cademy</span>
        </div>

        {/* Heading text */}
        <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-10">
          Join the millions learning the tech skills needed to grow in <br className="hidden md:block" />
          their careers and build the lives they want.
        </h2>

        {/* CTA Button */}
        <button className="bg-[#ffd300] hover:bg-[#e5bd00] mb-10 text-black font-bold py-4 px-10 rounded-sm transition-colors duration-200 text-lg">
          Sign up — it's free
        </button>
      </div>
    </section>
  );
};

export default Symbol;