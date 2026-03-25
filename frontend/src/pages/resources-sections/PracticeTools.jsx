import React from "react";

const PracticeTools = () => {
  const tools = [
    {
      title: "Code challenges",
      description:
        "Sharpen your skills with real interview challenges from top tech companies, with guidance if you get stuck.",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    },
    {
      title: "Workspaces",
      description:
        "Build and share projects in 13 popular languages, all right in your browser.",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    },
    {
      title: "Job-readiness checker",
      description:
        "See how your skills match a job posting and get tips on what to improve.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Interview Simulator",
      description:
        "Practice interviews, get feedback, and build confidence at any stage of your tech career.",
      icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
  ];

  return (
    <div className="pl-8 pb-8 pr-8">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Practice tools</h2>
        <p className="text-[1rem] leading-relaxed text-[#3a3d4e] max-w-5xl">
          Build confidence and reinforce what you've learned through hands-on practice.
          Tackle real coding challenges, simulate job interviews, and test your skills.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 rounded-xl p-6 bg-white
                       cursor-pointer
                       transform transition-all duration-300
                       hover:scale-105 hover:border-blue-500
                       hover:shadow-[0_0_30px_rgba(37,99,235,0.8)]"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#f0f2f6] p-2.5 rounded-lg flex items-center justify-center">
                <img
                  src={tool.icon}
                  alt={tool.title}
                  className="w-5 h-5 object-contain"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/20")
                  }
                />
              </div>
              <h3 className="font-bold text-lg">{tool.title}</h3>
            </div>

            {/* Dotted Lines */}
            <div className="border-t border-dotted border-gray-300 my-1"></div>
            <div className="border-t border-dotted border-gray-300 my-1"></div>

            {/* Description */}
            <p className="text-[#3a3d4e] leading-relaxed text-[0.95rem] mt-2">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeTools;