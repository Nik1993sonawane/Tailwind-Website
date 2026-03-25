import React from "react";

const Inspiration = () => {
  const tools = [
    {
      title: "Learner stories",
      description:
        "Learn how coding can change your life (and the world) for the better.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Learning tips",
      description:
        "Learning to code — or thinking about it? Here's how to get started, plus tips and tricks for staying motivated.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    },
    {
      title: "Career advice",
      description:
        "Explore different tech jobs and learn how to advance in your career and maintain work-life balance.",
      icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
    {
      title: "Finding a job",
      description:
        "Master the skills to land a tech job, from resumes and portfolios to interviews and offers.",
      icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    },
  ];

  return (
    <div className="pl-8 pb-8 pr-8">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Inspiration</h2>
        <p className="text-[1rem] leading-relaxed text-[#3a3d4e] max-w-5xl">
          Discover what's happening inside Codecademy and beyond. You'll find engineering deep dives,
          coding tips, job hunt insights, career growth advice, and inspiring stories.
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
            <div className="flex items-center gap-4 mb-4">
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

            {/* Dotted Divider */}
            <div className="border-t border-dotted border-gray-300 my-1"></div>
            <div className="border-t border-dotted border-gray-300 my-1"></div>

            {/* Description */}
            <p className="text-[#3a3d4e] leading-relaxed text-[0.95rem]">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;