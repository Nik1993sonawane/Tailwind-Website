import React from 'react';

const TransformReady = () => {
  return (
    <section className="w-full bg-[#000] px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content: Text and CTA Buttons */}
        <div className="flex flex-col space-y-10 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-white text-4xl md:text-4xl font-bold tracking-tight">
            Ready to get started with Teams?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-[#FFD700] hover:bg-[#F0C800] text-[#0F172A] font-bold py-4 px-10 rounded-sm transition-all duration-200 text-base shadow-lg">
              Purchase now
            </button>
            
            <button className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0F172A] font-bold py-4 px-10 rounded-sm transition-all duration-200 text-base">
              Start 14-day free trial
            </button>
          </div>
        </div>

        {/* Right Content: Isometric Illustration Placeholder */}
        <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
          {/* In a production environment, you would use an <img> or <svg>.
            Below is a CSS-based representation of the stacked isometric UI layers.
          */}
          <div className="relative transform rotate-[-15deg] skew-x-[15deg] scale-90 md:scale-100">
            {/* Bottom Layer (Blue) */}
            <div className="w-64 h-40 bg-[#1D5DFF] rounded-lg shadow-xl translate-y-12 translate-x-12 opacity-90 border border-blue-400"></div>
            
            {/* Middle Layer (Cream/Tan) */}
            <div className="absolute top-0 left-0 w-64 h-40 bg-[#FFF5E1] rounded-lg shadow-xl translate-y-6 translate-x-6 border border-gray-300 p-4">
               <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
               </div>
               <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
               <div className="h-8 w-full bg-[#0F172A] rounded-full mt-4"></div>
            </div>

            {/* Top Layer (White with Graph) */}
            <div className="absolute top-0 left-0 w-64 h-40 bg-white rounded-lg shadow-2xl border border-gray-100 p-4 flex flex-col justify-center">
              <div className="w-full h-full border-b-2 border-l-2 border-gray-200 relative overflow-hidden">
                {/* SVG Line Graph Mockup */}
                <svg viewBox="0 0 100 50" className="absolute bottom-0 left-0 w-full h-full">
                  <path 
                    d="M0,40 L20,35 L40,42 L60,25 L80,30 L100,10" 
                    fill="none" 
                    stroke="#0F172A" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TransformReady;