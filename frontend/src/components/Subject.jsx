import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Subject() {
    const [activeTab, setActiveTab] = useState("subjects");

    const navigate = useNavigate();

    {/* Top Subjects */}
    const Cards = [
    {
      title: "Code Foundations",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    },
    {
      title: "Python",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
      title: "HTML & CSS",
      icon: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
    },
    {
      title: "Data Science",
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png",
    },
    {
      title: "Professional Skills",
      icon: "https://img.icons8.com/fluency/96/business.png",
    },
    {
      title: "Java",
      icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      title: "Web Development",
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
    },
    {
      title: "Data Analytics",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    },
    {
      title: "Interview Preparation",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "JavaScript",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      title: "Web Design",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "Machine Learning",
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149658.png",
    },
    {
      title: "Computer Science",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    },
    {
      title: "C++",
      icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
    {
      title: "Mobile Development",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png",
    },
    {
      title: "Artificial Intelligence",
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    },
    {
      title: "Information Technology",
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149658.png",
    },
    {
      title: "C#",
      icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    },
    {
      title: "Game Development",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "Cloud Computing",
      icon: "https://cdn-icons-png.flaticon.com/512/4144/4144783.png",
    },
    {
      title: "Cyber Security",
      icon: "https://img.icons8.com/fluency/96/security-checked.png",
    },
    {
      title: "Go",
      icon: "https://cdn-icons-png.flaticon.com/512/919/919837.png",
    },
    {
      title: "DevOps",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
    },
    {
      title: "Certification Preparation",
      icon: "https://img.icons8.com/fluency/96/certificate.png",
    },
  ];

  {/* Certification List */}
  const Certifications = [
    { 
     title: "AWS", 
     icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    { 
     title: "Microsoft", 
     icon: "https://img.icons8.com/color/96/microsoft.png" 
    },
    { 
     title: "CompTIA", 
     icon: "https://img.icons8.com/fluency/96/certificate.png" 
    },
    { 
     title: "ISC2", 
     icon: "https://img.icons8.com/fluency/96/security-checked.png" 
    },
    { 
     title: "Artificial Intelligence", 
     icon: "https://img.icons8.com/fluency/96/artificial-intelligence.png" 
    },
    { 
     title: "Cloud Computing", 
     icon: "https://img.icons8.com/fluency/96/cloud.png" 
    },
    { 
     title: "Cyber Security", 
     icon: "https://img.icons8.com/fluency/96/security-checked.png" 
    },
    { 
     title: "Data Science", 
     icon: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png",
    },
    { 
     title: "DevOps", 
     icon: "https://img.icons8.com/fluency/96/settings.png" 
    },
    { 
     title: "Information Technology", 
     icon: "https://img.icons8.com/fluency/96/server.png" 
    },
    { 
     title: "Professional Skills", 
     icon: "https://img.icons8.com/fluency/96/business.png" 
    },
    { 
     title: "All Certifications", 
     icon: "https://img.icons8.com/fluency/96/list.png" 
    },
  ];

  {/* Decide which data to show */}
  const data = activeTab === "subjects" ? Cards : Certifications;

  return (
    <div className="bg-[#000] pt-12 pb-12">

    <div className="bg-[#020617] text-white px-6 md:px-16 py-16 
                    relative w-full max-w-[1100px] mx-auto 
                    min-h-[500px] rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.4)]">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-mono mb-10">
        Build Skills that Stand Out
      </h1>

      {/* Tabs */}
      <div className="flex gap-10 border-b border-gray-700 mb-10">
        
        <button
          onClick={() => setActiveTab("subjects")}
          className={`pb-3 font-semibold ${
            activeTab === "subjects"
              ? "border-b-4 border-yellow-400 text-white"
              : "text-gray-400"
          }`}
        >
          Top Subjects
        </button>

        <button
          onClick={() => setActiveTab("certifications")}
          className={`pb-3 font-semibold ${
            activeTab === "certifications"
              ? "border-b-4 border-yellow-400 text-white"
              : "text-gray-400"
          }`}
        >
          Certification Preparation
        </button>

      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex w-90 h-20 items-center gap-4 bg-black border border-gray-800 rounded-xl p-6 
                       hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] 
                       transition duration-300 cursor-pointer"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 object-contain"
            />
            <p className="text-lg font-mono">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Transform Your Subject Box */}
      <div className="flex justify-center mt-10">
        <div
          onClick={() => navigate("/aibuilder")} 
          className="group relative w-[1200px] bg-gradient-to-r from-[#020617] to-[#020B2D] border border-blue-900 rounded-xl p-6 flex items-center cursor-pointer
                        transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]">
              
            <div className="flex items-start gap-4">
               <span className="text-blue-400 text-2xl">≫</span>
            <div>
            <h4 className="text-blue-400 font-mono text-lg">
                Learn with AI Builder
            </h4>
            <p className="text-gray-300">
                Learn by building real, working prototypes in seconds with our new AI Builder 
            </p>
        </div>
       </div>
      
       {/* Arrow fixed to right side */}
       <div className="absolute right-10 text-blue-400 text-4xl transition-transform duration-300 group-hover:translate-x-2">
         <FaArrowRight />
       </div>
      </div>
     </div>

     <div className="flex items-center mt-10 justify-center gap-2 cursor-pointer group">
      
        {/* Text */}
        <p className="text-yellow-400 text-[15px] text-center group-hover:underline">
          Explore the Catalog
        </p>

        {/* Arrow */}
        <div className="text-yellow-400 text-[15px] transition-transform duration-300 group-hover:translate-x-2">
          <FaArrowRight />
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default Subject;