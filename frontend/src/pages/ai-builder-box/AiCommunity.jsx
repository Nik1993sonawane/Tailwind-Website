import React from 'react';

const AiCommunity = () => {
  return (
    <section className="bg-[#ffd300] py-10 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content */}
        <div className="flex-1 space-y-8 text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0d1a] leading-[1.15] tracking-tight max-w-2xl">
            Join our innovative community and build your first prototype effortlessly with our AI Builder
          </h2>
          
          <button className="bg-[#3b1ef4] hover:bg-[#2e16c7] text-white font-bold py-4 px-10 rounded-md shadow-lg transition-all transform hover:scale-105 active:scale-95 text-lg">
            Get started for free
          </button>
        </div>

        {/* Right Side: Isometric Illustration */}
        <div className="flex-1 relative flex justify-center lg:justify-end w-full max-w-lg">
          <svg
            viewBox="0 0 500 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-2xl"
          >
            {/* The Pink Oval Base */}
            <ellipse cx="250" cy="300" rx="180" ry="110" fill="#f472d0" stroke="#0a0d1a" strokeWidth="6" />
            
            {/* Laptop Base */}
            <path d="M190 280 L350 380 L440 280 L280 180 Z" fill="#fff5f0" stroke="#0a0d1a" strokeWidth="4" />
            <path d="M250 300 L320 340 L280 310 L210 270 Z" fill="#0a0d1a" /> {/* Trackpad */}
            
            {/* Laptop Screen */}
            <path d="M280 180 L440 280 V100 L280 0 Z" fill="#fff5f0" stroke="#0a0d1a" strokeWidth="4" />
            <rect x="300" y="40" width="120" height="180" transform="matrix(0.85, 0.5, 0, 1, 0, 0)" fill="#ffd300" opacity="0.8" />
            
            {/* Chat Bubbles */}
            <g transform="translate(320, 80)">
              <circle cx="20" cy="20" r="25" fill="white" stroke="#0a0d1a" strokeWidth="3" />
              <circle cx="10" cy="20" r="2" fill="#0a0d1a" />
              <circle cx="20" cy="20" r="2" fill="#0a0d1a" />
              <circle cx="30" cy="20" r="2" fill="#0a0d1a" />
            </g>
            
            <g transform="translate(420, 200)">
              <circle cx="20" cy="20" r="25" fill="white" stroke="#0a0d1a" strokeWidth="3" />
              <circle cx="10" cy="20" r="2" fill="#0a0d1a" />
              <circle cx="20" cy="20" r="2" fill="#0a0d1a" />
              <circle cx="30" cy="20" r="2" fill="#0a0d1a" />
            </g>

            {/* Lightbulb */}
            <g transform="translate(100, 180)">
              <path d="M30 100 Q0 60 30 20 Q60 60 30 100" fill="white" stroke="#0a0d1a" strokeWidth="3" />
              <rect x="20" y="90" width="20" height="15" rx="2" fill="#ffd300" stroke="#0a0d1a" strokeWidth="3" />
            </g>

            {/* Magnifying Glass */}
            <circle cx="380" cy="350" r="25" stroke="#0a0d1a" strokeWidth="8" />
            <line x1="400" y1="370" x2="430" y2="400" stroke="#0a0d1a" strokeWidth="12" strokeLinecap="round" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default AiCommunity;