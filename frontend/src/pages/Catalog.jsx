import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

// 🔹 ICONS
const icons = {
  "Course topics": "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  "Live learning": "https://cdn-icons-png.flaticon.com/512/9068/9068679.png",
  "Skill paths": "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  "Career paths": "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  "Certification paths": "https://cdn-icons-png.flaticon.com/512/190/190411.png",
};

// 🔹 IMPORT SECTIONS
import LiveLearning from "./catalog-sections/LiveLearning";
import SkillPaths from "./catalog-sections/SkillPaths";
import CareerPaths from "./catalog-sections/CareerPaths";
import CertificationPaths from "./catalog-sections/CertificationPaths";

const Catalog = () => {
  const [active, setActive] = useState("Course topics");

  const menuItems = [
    "Course topics",
    "Live learning",
    "Skill paths",
    "Career paths",
    "Certification paths",
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
          <div className="w-1/4 bg-gray-100 rounded-xl p-4 space-y-4 h-[400px] overflow-y-auto no-scrollbar">
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
                  <img
                    src={icons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  {item}
                </div>
                <FaChevronRight />
              </div>
            ))}
          </div>

          {/* 🔹 RIGHT CONTENT */}
          <div className="w-3/4 h-[400px] overflow-y-auto no-scrollbar pr-2">

            {/* ✅ COURSE TOPICS */}
            {active === "Course topics" && (
              <>
              <div className="pl-8">
                <h2 className="text-2xl font-bold mb-2">Course topics</h2>

                <p className="text-black-600 mb-6">
                  Explore free or paid courses in a wide variety of topics. 
                  With something for every skill level, it's easy to find a course that fits your goals. Not sure where to start?
                  <span className="text-blue-600 cursor-pointer ml-2 underline">
                    Take the quiz
                  </span>
                </p>

                {/* LANGUAGES */}
                <h3 className="font-semibold mb-3">Popular languages</h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
                    { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
                    { name: "HTML & CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
                    { name: "C#", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
                    { name: "C++", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
                    { name: "C", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132220.png" },
                    { name: "PHP", icon: "https://cdn-icons-png.flaticon.com/512/919/919830.png" },
                    { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
                    { name: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
                  ].map((item) => (
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

                {/* SUBJECTS */}
                <h3 className="font-semibold mb-3">Popular subjects</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { title: "AI", icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" },
                    { title: "IT", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
                    { title: "Cybersecurity", icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png" },
                    { title: "Cloud computing", icon: "https://cdn-icons-png.flaticon.com/512/4144/4144782.png" },
                    { title: "Web development", icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
                    { title: "Data science", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149643.png" },
                    { title: "Web design", icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png" },
                    { title: "Professional skills", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
                    { title: "Code Foundations", icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 border rounded-xl px-4 py-3 
                                 cursor-pointer bg-white
                                 transform transition-all duration-300
                                 hover:scale-105 hover:border-blue-500 
                                 hover:shadow-[0_0_30px_rgba(37,99,235,0.8)]"
                    >
                      <img src={item.icon} className="w-6 h-6" />
                      {item.title}
                    </div>
                  ))}
                </div>

                <div className="text-center text-blue-600 font-semibold cursor-pointer hover:underline">
                  Explore the full catalog →
                </div>
              </div>
              </>
            )}

            {/* OTHER SECTIONS */}
            {active === "Live learning" && <LiveLearning />}
            {active === "Skill paths" && <SkillPaths />}
            {active === "Career paths" && <CareerPaths />}
            {active === "Certification paths" && <CertificationPaths />}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;