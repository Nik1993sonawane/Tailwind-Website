import React from "react";

const testimonials = [
  {
    name: "Joshua Lange",
    role: "Research Scientist",
    location: "Stockholm, Sweden",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    quote:
      "I feel like I’ve gained a valuable skill set that looks great on my CV. You don’t have to change careers; you can make your current job better, more efficient, and make your life easier.",
  },
  {
    name: "Shabana Khatau",
    role: "Systems and Applications Advisor",
    location: "London, England",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    quote:
      "I wasted quite a bit of time before learning about Codecademy. Anyone who would come up to me, I would direct them straight to Codecademy. Don’t waste any time on anyone else; just start there.​",
  },
  {
    name: "Jimmy Soto",
    role: "SOC Security Specialist",
    location: "Washington, DC - Baltimore",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    quote:
      "Codecademy played into the whole gamification aspect because of how user-friendly it is and the completion of courses and modules. Completing a module felt like an achievement, and it helped me have a pathway to dive into cybersecurity, coming from a completely different world.​",
  },
];

const Learners = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Real success from real learners
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          With the right skills, anything's possible. See how learners are evolving their careers.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="group relative">

            {/* CARD */}
            <div
              className="
              bg-[#0E0424] border border-white border-dashed rounded-xl overflow-hidden
              flex flex-col h-full

              transition-all duration-500
              group-hover:-translate-y-3
              group-hover:scale-[1.04]

              group-hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]
              "
            >
              {/* IMAGE */}
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-full h-full object-cover
                  grayscale group-hover:grayscale-0
                  group-hover:scale-110
                  transition duration-700
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                {/* QUOTE ICON */}

                <p className="text-sm text-white leading-relaxed mb-6 flex-grow">
                  {item.quote}
                </p>

                {/* FOOTER */}
                <div className="border-t border-white pt-4">
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-white mt-1">
                    {item.role}
                  </p>
                  <p className="text-xs text-white">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>

            {/* 🔥 EXTRA GLOW LAYER */}
            <div
              className="
              absolute inset-0 rounded-xl pointer-events-none
              opacity-0 group-hover:opacity-150
              transition duration-500
              shadow-[0_0_30px_rgba(59,130,246,0.6)]
              "
            />

          </div>
        ))}
      </div>
    </section>
  );
};

export default Learners;