import React from "react";
import { useNavigate } from "react-router-dom";

const AiBuild = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black flex items-center justify-center px-6 py-12 md:px-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* 🔷 LEFT CONTENT */}
        <div className="text-white space-y-6">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Build apps with AI <br />
            and learn how the <br />
            code works
          </h1>

          {/* Powered By */}
          <div className="flex items-center gap-3 opacity-80">
            <div className="w-6 h-6 bg-gray-600 flex items-center justify-center rounded-sm text-xs font-bold">
              C_
            </div>
            <p className="text-sm font-medium">
              Powered by Codecademy's world-class learning science
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
            Turn ideas into working projects with our AI Builder and customize your 
            learning to build, debug, and truly understand what you're working on.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#ffd300] hover:bg-[#ffdf33] text-black font-bold py-4 px-8 rounded-md transition duration-200 text-sm shadow-lg hover:shadow-[0_0_20px_#ffd300]"
          >
            Get started for free
          </button>
        </div>

        {/* 🔷 RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_#3b82f6] transition duration-300">
            
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgeqaqwBg1SiBjf4v-Pb_Re6-5ShQDBaievQ&s"
              alt="AI Builder"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default AiBuild;