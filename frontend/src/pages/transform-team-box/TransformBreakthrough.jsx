import React from 'react';

const TransformBreakthrough = () => {
  return (
    <section className="w-full bg-[#4A00E0] min-h-[450px] flex items-center px-8 py-16 md:px-16 lg:px-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight">
            Build team skills for your <br />
            next business breakthrough
          </h1>
          
          <p className="text-lg md:text-xl max-w-xl font-medium opacity-95 leading-relaxed">
            Curated bootcamps give your team members expert-led training, 
            mentorship, and hands-on projects to drive business growth and innovation.
          </p>

          <div className="pt-4">
            <button className="bg-[#FFD700] hover:bg-[#F0C800] text-black font-bold py-4 px-8 rounded-sm transition-colors duration-200 text-sm tracking-wider">
              Explore bootcamps
            </button>
          </div>
        </div>

        {/* Right Illustration Column */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-[500px]">
            {/* The illustration is a complex composition of SVG-like elements. 
                In a real app, you'd export this as an SVG/PNG. 
                Below is a CSS representation of the monitor and books. */}
            
            <div className="relative z-10 flex items-end justify-center">
                {/* Book Stack Decor */}
                <div className="flex items-end -mr-4 mb-2 space-x-1">
                    <div className="w-6 h-32 bg-white border-b-8 border-black"></div>
                    <div className="w-8 h-40 bg-[#FFD700] border-y-8 border-black"></div>
                    <div className="w-6 h-44 bg-[#0F172A]"></div>
                    <div className="w-6 h-36 bg-white"></div>
                </div>

                {/* Monitor Frame */}
                <div className="bg-[#BAE6FD] p-3 rounded-md shadow-2xl border-b-[20px] border-[#0F172A]">
                    <div className="bg-white rounded-sm p-4 w-64 md:w-80 h-48 border-2 border-[#0F172A] relative">
                        {/* Mock UI Content */}
                        <div className="w-full h-8 bg-[#1E293B] rounded-sm mb-4"></div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-[#FFD700]"></div>
                            <div className="flex-1 space-y-2">
                                <div className="w-full h-2 bg-slate-200"></div>
                                <div className="w-1/2 h-2 bg-slate-200"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Magnifying Glass / Goal Icon */}
                <div className="absolute -top-10 -right-4 w-24 h-24 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-lg">
                    <div className="text-3xl">🚩</div>
                </div>
            </div>
            
            {/* Monitor Stand */}
            <div className="w-24 h-12 bg-[#0F172A] mx-auto rounded-b-xl"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TransformBreakthrough;