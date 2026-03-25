import React from "react";

const LearningTools = () => {
  const tools = [
    {
      title: "AI Builder",
      description:
        "Learn to build real projects using AI with guided workflows—at any skill level.",
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    },
    {
      title: "Articles",
      description:
        "Dive deeper into coding concepts and developer workflows to level up your skills.",
      icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      title: "Cheatsheets",
      description:
        "Quick guides that summarize key concepts across languages, tools, and technologies.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
    {
      title: "Projects",
      description:
        "Apply your skills, connect concepts, and build something of your own.",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
    },
  ];

  return (
    <div className="pl-8 pb-8 pr-8">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Learning tools</h2>
        <p className="text-[1rem] leading-relaxed text-[#3a3d4e] max-w-5xl">
          Explore free resources that help you understand key concepts and stay on track.
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

            {/* Double dotted lines */}
            <div className="border-t border-dotted border-gray-400 my-1"></div>
            <div className="border-t border-dotted border-gray-400 my-1"></div>

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

export default LearningTools;