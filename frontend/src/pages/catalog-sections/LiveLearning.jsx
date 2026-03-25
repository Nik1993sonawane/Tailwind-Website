import React from "react";

const LiveLearning = () => {
  return (
    <div className="pl-8 pb-8 pr-8">
      
      {/* Header Section */}
        <h2 className="text-2xl font-bold mb-2">Live learning</h2>
        <p className="text-black-600 mb-6">
          Build skills faster through live, instructor-led sessions. Get real-time feedback, 
          stay motivated, and deepen your understanding with expert guidance.
        </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* 🔷 Bootcamps Card */}
        <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden 
                        shadow-sm cursor-pointer transform transition-all duration-300
                        hover:scale-105 hover:scale-105 hover:border-blue-500
                        hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]">
          
          <img
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
            alt="Bootcamp"
            className="h-64 w-full object-cover"
          />

          <div className="p-6 flex-grow">
            <h3 className="font-bold text-xl mb-3">Bootcamps</h3>
            <p className="text-[#000] leading-relaxed">
              Join live virtual bootcamps that span multiple weeks and help you build real-world, 
              in-demand skills. Led by experts, each bootcamp includes instructor support, 
              community, and mentorship.
            </p>
          </div>
        </div>

        {/* 🔷 Coaching Card */}
        <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden 
                        shadow-sm cursor-pointer transform transition-all duration-300
                        hover:scale-105 hover:scale-105 hover:border-blue-500 
                        hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]">
          
          <img
            src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde"
            alt="Coaching"
            className="h-64 w-full object-cover"
          />

          <div className="p-6 flex-grow">
            <h3 className="font-bold text-xl mb-3">Coaching</h3>
            <p className="text-[#000] leading-relaxed">
              Get personalized mentorship from expert coaches to accelerate your career journey. 
              Whether you're preparing for interviews or exploring career paths, 1:1 coaching 
              gives you tailored support.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LiveLearning;