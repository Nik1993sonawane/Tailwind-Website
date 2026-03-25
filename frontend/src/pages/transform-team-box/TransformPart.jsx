import React from 'react';

const TransformPart = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#eef3f7]">
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        
        {/* Left Side: Blue Background with Diagonal Clip */}
        <div className="relative w-full lg:w-[45%] bg-[#1D5DFF] flex items-center justify-center py-16 px-10">
          {/* The Diagonal "Clipped" Edge */}
          <div 
            className="hidden lg:block absolute top-0 right-[-100px] h-full w-[200px] bg-[#1D5DFF] origin-top-left"
            style={{ clipPath: 'polygon(0 0, 50% 0, 100% 100%, 0% 100%)' }}
          ></div>

          {/* Illustration Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Mock Illustration Area */}
            <div className="relative mb-8">
              {/* Main Coding Window Shadow/Shape */}
              <div className="w-64 h-40 bg-[#0F172A] rounded-sm transform -rotate-12 border border-blue-400 p-2">
                <div className="space-y-2">
                  <div className="w-full h-1 bg-blue-400 opacity-50"></div>
                  <div className="w-3/4 h-1 bg-blue-400 opacity-50"></div>
                  <div className="w-1/2 h-1 bg-blue-400 opacity-50"></div>
                </div>
              </div>
              {/* Floating Elements (Visual placeholders) */}
              <div className="absolute -top-4 -right-8 w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white text-xs">
                &lt;/&gt;
              </div>
            </div>

            {/* Codecademy from Skillsoft Logo */}
            <div className="text-white text-center">
              <div className="text-3xl font-bold tracking-tighter flex items-center border-2 border-white px-2 py-1">
                code<span className="bg-white text-[#1D5DFF] px-1 ml-1 underline decoration-2">cademy</span>
              </div>
              <p className="text-sm mt-2 font-medium opacity-90">from skillsoft</p>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-[55%] flex items-center px-8 py-10 md:px-16 lg:pl-32 lg:pr-24">
          <div className="max-w-xl">
            <h2 className="text-[#0F172A] text-4xl md:text-4xl font-bold mb-8">
              Part of the Skillsoft family
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Codecademy is part of Skillsoft, a trusted leader in enterprise learning. 
              That means your team gets hands-on, flexible technical training plus 
              the option to expand into broader upskilling areas like leadership, 
              compliance, and more — all with enterprise-grade support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformPart;