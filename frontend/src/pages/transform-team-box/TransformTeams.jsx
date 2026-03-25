import React from "react";
import {
  FaMousePointer,
  FaCheckSquare,
  FaStar,
  FaChartLine,
  FaCogs,
  FaBullseye,
} from "react-icons/fa";

function TransformTeams() {
  const features = [
    {
      icon: <FaMousePointer />,
      title: "Learn by doing",
      desc: "Skip the setup downtime. Teams start applying their new skills right from day one with in-browser interactive lessons and hands-on practice.",
    },
    {
      icon: <FaCheckSquare />,
      title: "Gain step-by-step guidance",
      desc: "Understand exactly what steps to take to upgrade team skills, build specializations, or quickly get up to speed with guided courses and paths.",
    },
    {
      icon: <FaStar />,
      title: "Maintain team motivation",
      desc: "Help everyone stay motivated and engaged with code challenges, weekly learning targets, and a supportive global community.",
    },
    {
      icon: <FaChartLine />,
      title: "Visualize progress",
      desc: "Simplify your insights with real-time reports to quickly interpret data, track progress, and make more informed decisions.",
    },
    {
      icon: <FaCogs />,
      title: "Save time on admin tasks",
      desc: "Discover user-friendly tools designed to help busy team leads. Easily assign content, reassign seats, and see outcomes for one or multiple trainings.",
    },
    {
      icon: <FaBullseye />,
      title: "Achieve all your training goals",
      desc: "Tailor content to meet different needs — whether upskilling engineers, training new hires, or helping non-tech teams build digital confidence.",
    },
  ];

  return (
    <div className="bg-[#eef3f7] py-10 px-20">

      {/* 🔷 Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0b1f44]">
          Why Codecademy Teams?
        </h2>
      </div>

      {/* 🔷 Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-4">

            {/* Icon Box */}
            <div className="bg-[#dbeafe] text-[#0b1f44] p-4 rounded-lg text-xl">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0b1f44]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default TransformTeams;