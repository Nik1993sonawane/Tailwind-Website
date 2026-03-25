import React from "react";
import { FaChartBar, FaArrowRight } from "react-icons/fa";

const SkillPaths = () => {
  const paths = [
    { title: "Code Foundations", hours: "4" },
    { title: "Data Science Foundations", hours: "55" },
    { title: "Data and Programming Foundations for AI", hours: "39" },
    { title: "Build a Website with HTML, CSS, and GitHub Pages", hours: "14" },
    { title: "Analyze Data with SQL", hours: "18" },
    { title: "Build a Machine Learning Model", hours: "23" },
  ];

  return (
    <div className="pl-8">

      {/* 🔷 Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Skill paths</h2>
        <p className="text-black-600 mb-6">
          Build in demand skills fast with a short, curated path.
          Each one includes interactive content to help you learn and apply your new skill.
        </p>
      </div>

      {/* 🔷 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {paths.map((path, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border border-gray-300 rounded-lg p-5 bg-white 
                       cursor-pointer transform transition-all duration-300
                       hover:scale-105 hover:scale-105 hover:border-blue-500
                       hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]
                       min-h-[160px]"
          >
            {/* Title */}
            <h3 className="font-semibold text-md pr-4">
              {path.title}
            </h3>

            <div>
              {/* Dotted Line */}
              <div className="border-t-2 border-dotted border-black my-4"></div>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <FaChartBar className="text-blue-600" />
                  <span className="font-medium">Beginner</span>
                </div>

                <div>
                  <span className="font-bold">{path.hours}</span>
                  <span className="ml-1 text-gray-600">hrs</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔷 Footer Link */}
      <div className="flex justify-center">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer"
        >
          Explore all 14 skill paths
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default SkillPaths;