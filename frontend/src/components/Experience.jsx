/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

const sections = [
  {
    title: "Turn ambition into action",
    points: [
      "Find guided paths and interactive lessons",
      "Learn AI, cloud, data, cybersecurity",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Gain hands-on expertise",
    points: [
      "Build real-world projects",
      "Prepare for AWS, Microsoft certifications",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "Transform your team",
    points: [
      "Assign flexible learning paths",
      "Track progress with dashboard",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "Go further together",
    points: ["Learn with global community"],
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  // ✅ Detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      sectionRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20 sticky top-0 bg-black z-50 pb-10">
          <p className="text-xl font-bold tracking-widest">
            The Experience
          </p>

          <h2 className="text-4xl font-bold mb-8">
            Designed for progress
          </h2>

          {/* 🔥 PROGRESS BAR (STRONG DARK GLOW) */}
          <div className="flex justify-center gap-3">
            {sections.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-16 rounded-full transition-all duration-500
                ${
                  i <= active
                    ? "bg-blue-500 scale-110 shadow-[0_0_10px_#3b82f6,0_0_25px_#3b82f6,0_0_50px_#3b82f6]"
                    : "bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-40">
          {sections.map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="grid md:grid-cols-2 gap-12 items-center"
            >

              {/* TEXT */}
              <div
                className={`transition-all duration-700 ease-out transform
                ${
                  index === active
                    ? "opacity-100 scale-100 rotate-0 blur-0"
                    : "opacity-0 scale-90 -rotate-3 blur-sm"
                }`}
              >
                <h3 className="text-3xl font-bold mb-4 text-blue-400">
                  {item.title}
                </h3>

                <ul className="space-y-3">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="text-blue-400">✦</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE */}
              <div
                className={`transition-all duration-700 ease-out transform
                ${
                  index === active
                    ? "opacity-100 scale-100 rotate-0 blur-0"
                    : "opacity-0 scale-90 rotate-3 blur-sm"
                }`}
              >
                <div
                  className="overflow-hidden rounded-xl border border-gray-800 
                  shadow-[0_10px_40px_rgba(0,0,0,0.9),
                          0_0_20px_rgba(59,130,246,0.4),
                          0_0_60px_rgba(59,130,246,0.3)]
                  hover:scale-105 transition duration-500"
                >
                  <img
                    src={`${item.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={item.title}
                    className="w-full h-[280px] object-cover 
                    transition duration-700 hover:scale-110"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;