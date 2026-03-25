import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const courses = [
  {
    type: "Career path",
    title: "Data Scientist: Machine Learning Specialist",
    desc: "Machine Learning Data Scientists solve problems at scale, make predictions, find patterns, and more!",
    level: "Beginner Friendly",
    duration: "95 hours",
    color: "bg-yellow-400",
  },
  {
    type: "Course",
    title: "Learn Python 3",
    desc: "Learn the basics of Python 3.12, one of the most powerful, versatile, and in-demand languages.",
    level: "Beginner Friendly",
    duration: "24 hours",
    color: "bg-green-500",
  },
  {
    type: "Certification path",
    title: "SY0-701: CompTIA Security+",
    desc: "Master IT security basics and prep for the CompTIA Security+ exam.",
    level: "Intermediate",
    duration: "14 hours",
    color: "bg-blue-500",
  },
  {
    type: "Skill path",
    title: "Code Foundations",
    desc: "Start your programming journey with an introduction to coding.",
    level: "Beginner Friendly",
    duration: "4 hours",
    color: "bg-pink-500",
  },
];

const Search = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-[#000] pb-12">
    <section className="max-w-6xl mx-auto px-6 text-white">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          No matter your goal, we have something for you
        </h2>

        {/* Search Box */}
        <div className="w-full bg-[#1D1B26] border border-gray-700 rounded-lg overflow-hidden">
          
          {/* Input */}
          <div className="flex justify-between border-b border-gray-700 items-center px-4 py-3 bg-[#111019] text-sm
                transition-all duration-300 cursor-pointer
                hover:border hover:border-blue-400
                hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] rounded-md">
  
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="bg-transparent w-full outline-none text-lg text-gray-300 placeholder-gray-500 cursor-text"
            />

            <button className="text-gray-400 hover:text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>

          {/* Bottom Text */}
          <div className="flex justify-between border-b border-gray-700 items-center px-4 py-3 bg-[#111019] text-sm
                transition-all duration-300 cursor-pointer
                hover:border hover:border-blue-400
                hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] rounded-md">

          {/* Question Icon + Text */}
          <span className="flex items-center gap-2 text-white">
            <span className="w-5 h-5 flex items-center justify-center rounded-full border border-white text-xs">
              ?
            </span>
              Not sure? Take our quiz to find what's best for you.
          </span>

          {/* Button */}
          <button className="font-semibold hover:underline flex items-center gap-1">
            Take the quiz →
          </button>
         </div>
        </div>
      </div>

      {/* Course Header */}
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-2xl font-bold">Top courses</h3>
        <a href="#" className="text-white text-sm hover:underline">
          Go to the catalog
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#1D1B26] border border-gray-800 rounded-lg p-5 flex flex-col 
                       cursor-pointer transition-all duration-300 
                       hover:-translate-y-2 hover:translate-y-1
                       hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] 
                       hover:border-blue-400"
          >
            <span className={`${course.color} text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded w-fit mb-3`}>
              {course.type}
            </span>

            <h4 className="text-lg font-bold mb-2 leading-tight">
              {course.title}
            </h4>

            <p className="text-gray-400 text-xs mb-6 line-clamp-3">
              {course.desc}
            </p>

            <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center text-[11px] text-gray-400 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 border border-gray-400 rounded-sm"></span>
                {course.level}
              </span>
              <span>{course.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="flex justify-center mt-10">
        <div className="group relative w-[1200px] bg-gradient-to-r from-[#020617] to-[#020B2D] border border-blue-900 rounded-xl p-6 flex items-center cursor-pointer
                      transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]">
        
        <div 
          onClick={() => navigate("/searchhelp")}
          className="flex items-start gap-4">
          <span className="text-blue-400 text-2xl">⚐</span>
          <div>
            <h4 className="text-blue-400 font-mono text-lg">
              Want help figuring out what to learn?
            </h4>
            <p className="text-gray-300">
              Take our quiz to find what's best for you.
            </p>
          </div>
        </div>

        {/* Arrow fixed to right side */}
        <div className="absolute right-10 text-blue-400 text-4xl transition-transform duration-300 group-hover:translate-x-2">
          <FaArrowRight />
        </div>
       </div>
      </div>
    </section>
    </div>
  );
};

export default Search;