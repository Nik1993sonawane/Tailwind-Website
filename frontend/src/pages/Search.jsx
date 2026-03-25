import React from "react";
import { FaSearch, FaTimes, FaArrowRight } from "react-icons/fa";

const Search = ({ onClose }) => {
  const popularSearches = [
    "Artificial Intelligence",
    "Data Science",
    "Python",
    "Web Development",
    "HTML",
    "Java",
  ];

  const memberLearning = [
    { title: "Learn Python 3", type: "Course" },
    { title: "Business Intelligence Data Analyst", type: "Career Path" },
    { title: "Code Foundations", type: "Skill Path" },
    { title: "What is Programming?", type: "Article" },
    { title: "HTML | Elements", type: "Doc" },
  ];

  return (
    <div className="fixed inset-0 bg-[#000] z-[60] text-white overflow-y-auto">
      <div className="max-w-4xl mx-auto mt-10 px-6">
        
        {/* Search Input Area */}
        <div className="flex items-center border-b border-gray-700 pb-2 mb-6">
          <FaSearch className="text-xl text-gray-400 mr-4" />
          <input
            autoFocus
            type="text"
            placeholder="What are you learning today?"
            className="bg-transparent text-2xl w-full outline-none placeholder-gray-500"
          />
          <FaTimes
            className="text-xl text-gray-400 cursor-pointer hover:text-white"
            onClick={onClose}
          />
        </div>

        {/* AI Builder Banner */}
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

        {/* Popular Searches */}
        <div className="mb-10">
          <h3 className="text-gray-400 font-semibold mb-4 text-lg">Popular searches</h3>
          <ul className="space-y-4">
            {popularSearches.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer group">
                <FaSearch className="text-sm text-gray-500 group-hover:text-blue-400" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What members are learning */}
        <div className="mb-12">
          <h3 className="text-gray-400 font-semibold mb-4 text-lg">What our members are learning</h3>
          <div className="space-y-5">
            {memberLearning.map((item, index) => (
              <div key={index} className="flex items-center gap-3 cursor-pointer group">
                <span className="text-gray-200 font-medium group-hover:underline">{item.title}</span>
                <span className="border border-gray-600 text-[10px] uppercase px-2 py-0.5 rounded-full text-gray-400">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="border-t border-gray-800 pt-6 pb-10 flex justify-between items-center text-sm">
          <p className="text-gray-400">
            Not sure where to begin? 
            <span className="text-blue-400 ml-2 cursor-pointer hover:underline font-medium">
              Take our quiz →
            </span>
          </p>
          <div className="flex items-center gap-1 text-blue-400 cursor-pointer hover:text-blue">
            <span className="border border-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">?</span>
            <span>Help Center</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Search;