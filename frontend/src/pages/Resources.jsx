import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

// 🔹 MENU ICONS
const icons = {
  Docs: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  "Learning tools": "https://cdn-icons-png.flaticon.com/512/9068/9068679.png",
  "Practice tools": "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  Inspiration: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
};

// 🔹 IMPORT SECTIONS
import LearningTools from "./resources-sections/LearningTools";
import PracticeTools from "./resources-sections/PracticeTools";
import Inspiration from "./resources-sections/Inspiration";

const Resources = () => {
  const [active, setActive] = useState("Docs");

  const menuItems = ["Docs", "Learning tools", "Practice tools", "Inspiration"];

  // ✅ ALL LANGUAGES WITH ICONS (NO EMPTY)
  const languages = [
    { name: "C", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132220.png" },
    { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "C++", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
    { name: "PHP", icon: "https://cdn-icons-png.flaticon.com/512/919/919830.png" },
    { name: "Markdown", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png" },
    { name: "TypeScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
    { name: "Lua", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968383.png" },
    { name: "Go", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
    { name: "Command Line", icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
    { name: "PowerShell", icon: "https://cdn-icons-png.flaticon.com/512/906/906343.png" },
    { name: "Swift", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968371.png" },
  ];

  return (
    <div className="w-full bg-[#0E0424] px-6 pb-6 text-black">
      <div className="bg-white rounded-2xl p-6 max-w-7xl mx-auto shadow-xl">

        {/* 🔷 TEXT CTA (Banner Converted) */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 text-white px-5 py-3 rounded-lg mb-6 flex justify-between items-center text-sm flex items-center justify-center gap-2 cursor-pointer group">
        
        {/* Text */}
        <p className="text-white text-[15px] text-center transition-all duration-300">
          <span className="bg-yellow-300 text-black px-2 py-0.5 rounded mr-2 text-xs font-semibold">
            New
          </span>
            Go from idea to real, working prototype in seconds with our new AI Builder experience.
        </p>
        
        {/* Arrow */}
        <div className="text-white text-[15px] transition-transform duration-300 group-hover:translate-x-2">
          <FaArrowRight />
        </div>
        
        </div>

        <div className="flex gap-8">

          {/* 🔹 LEFT SIDEBAR */}
          <div className="w-1/4 bg-gray-100 rounded-xl p-4 space-y-4 h-[400px] overflow-y-auto">
            {menuItems.map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  active === item
                    ? "bg-white text-blue-600 font-semibold shadow-[0_0_30px_rgba(37,99,235,0.7)]"
                    : "hover:bg-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img src={icons[item]} alt={item} className="w-5 h-5" />
                  {item}
                </div>
                <FaChevronRight />
              </div>
            ))}
          </div>

          {/* 🔹 RIGHT CONTENT */}
          <div className="w-3/4 h-[400px] overflow-y-auto pr-2">

            {/* ✅ DOCS SECTION */}
            {active === "Docs" && (
              <>
              <div className="pl-8">
                <h2 className="text-2xl font-bold mb-2">Docs</h2>

                <p className="text-gray-600 mb-6">
                  Explore documentation and learn programming languages step by step.
                </p>

                {/* 🔥 LANGUAGES ONLY (NO SUBJECTS) */}
                <h3 className="font-semibold mb-3">Popular languages</h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {languages.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 border rounded-xl px-4 py-3 
                                 cursor-pointer bg-white
                                 transform transition-all duration-300
                                 hover:scale-105 hover:border-blue-500 
                                 hover:shadow-[0_0_30px_rgba(37,99,235,0.8)]"
                    >
                      <img src={item.icon} className="w-6 h-6" />
                      {item.name}
                    </div>
                  ))}
                </div>
               </div>

                <div className="text-center text-blue-600 font-semibold cursor-pointer hover:underline">
                  Explore all Docs →
                </div>
              </>
            )}

            {/* OTHER SECTIONS */}
            {active === "Learning tools" && <LearningTools />}
            {active === "Practice tools" && <PracticeTools />}
            {active === "Inspiration" && <Inspiration />}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;