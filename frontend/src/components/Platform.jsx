/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "Step by step guidance",
    desc: "Self-paced learning doesn't mean you're on your own.",
    img: "/images/img1.png",
  },
  {
    id: 2,
    title: "Powerful code editor",
    desc: "Write and run code directly in your browser.",
    img: "/images/img2.jpg",
  },
  {
    id: 3,
    title: "Live code changes",
    desc: "Practice and test instantly.",
    img: "/images/img3.jpg",
  },
  {
    id: 4,
    title: "AI Learning Assistant",
    desc: "Get help and solutions instantly.",
    img: "/images/img4.jpg",
  },
];

const Platform = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ Active step detect
  useEffect(() => {
    return scrollYProgress.on("change", (value) => {
      const step = Math.min(
        sections.length - 1,
        Math.floor(value * sections.length)
      );
      setActive(step);
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="bg-black text-white">

      {/* HEADER */}
      <section className="py-10 text-center sticky top-0 bg-black z-50">
        <p className="text-[25px] tracking-widest font-bold mb-2">
          The platform
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Learn by doing
        </h1>

        {/* 🔥 PROGRESS BAR (STRONG GLOW) */}
        <div className="flex justify-center gap-3">
          {sections.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-16 rounded-full transition-all duration-500 ${
                i <= active
                  ? "bg-blue-500 scale-110 shadow-[0_0_10px_#3b82f6,0_0_25px_#3b82f6,0_0_50px_#3b82f6]"
                  : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 space-y-40 pb-40">
        {sections.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="relative"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden border border-gray-800 
            shadow-[0_10px_40px_rgba(0,0,0,0.9)] 
            hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] 
            transition duration-500">

              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-[420px] object-cover 
                opacity-70 hover:opacity-100 
                hover:scale-105 
                transition duration-700"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>

            {/* 🔥 FLOATING CARD (PREMIUM GLOW) */}
            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 
              bg-white/95 backdrop-blur-lg text-black 
              p-6 rounded-xl 
              w-[90%] md:w-[420px]

              shadow-[0_0_10px_rgba(59,130,246,0.7),
                      0_0_30px_rgba(59,130,246,0.6),
                      0_0_60px_rgba(59,130,246,0.5)]"
            >
              <h2 className="text-xl font-bold text-blue-600 mb-2">
                {feature.title}
              </h2>

              <p className="text-sm text-gray-700">
                {feature.desc}
              </p>
            </motion.div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Platform;