import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

function TransformLearners() {
  return (
    <div className="bg-[#000] text-white py-10 px-6">

      {/* 🔷 TOP SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-blue-400 mb-6">
            Built for learners. <br />
            Driving impact for teams.
          </h1>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Since our startup days, over 50 million learners have trusted us
            to help them get ahead in their careers.
          </p>

          <div className="space-y-4">
            {[
              "Designed for everyone, from experienced technical teams to professionals new to tech work",
              "Build AI, data, dev skills, and more with interactive, self-paced training",
              "Assign curated content for every level and support independent learning",
              "Prepare team members for top industry certifications",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-400 mt-1" />
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">
          <img
            src="https://www.slideteam.net/wp/wp-content/uploads/2022/12/Statistics-Dashboard-PPT-Slide-1024x576.png"
            alt="dashboard"
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* 🔷 BOTTOM CARDS */}
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <div className="group cursor-pointer border border-dotted border-blue-400 p-6 rounded-xl bg-[#fff] 
                        text-black transform transition-all duration-300
                        hover:scale-105 hover:scale-105 hover:bg-white hover:text-black 
                        hover:shadow-[0_0_30px_blue]">
          <h3 className="text-xl font-semibold mb-3">
            Connect with a Teams expert
          </h3>
          <p className="mb-6">
            Discounts are available based on team size. Connect with a Teams
            expert to demo the platform and explore scalable options.
          </p>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded flex items-center gap-2 font-semibold">
            Request a demo <FaArrowRight />
          </button>
        </div>

        {/* CARD 2 */}
        <div className="group cursor-pointer border border-dotted border-blue-400 p-6 rounded-xl bg-[#fff] 
                        text-black transform transition-all duration-300
                        hover:scale-105 hover:scale-105 hover:bg-white hover:text-black 
                        hover:shadow-[0_0_30px_blue]">
          <h3 className="text-xl font-semibold mb-3">
            Ready to get started?
          </h3>
          <p className="mb-6">
            Get your team up and running today with an annual Teams plan.
            Pay by card or request an invoice at checkout.
          </p>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded flex items-center gap-2 font-semibold">
            Purchase now <FaArrowRight />
          </button>
        </div>

        {/* CARD 3 */}
        <div className="group cursor-pointer border border-dotted border-blue-400 p-6 rounded-xl bg-[#fff] 
                        text-black transform transition-all duration-300
                        hover:scale-105 hover:scale-105 hover:bg-white hover:text-black 
                        hover:shadow-[0_0_30px_blue]">
          <h3 className="text-xl font-semibold mb-3">
            Try Teams for free
          </h3>
          <p className="mb-6">
            Experience 14 days of full access for up to 10 team members.
          </p>
          <button className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded flex items-center gap-2 font-semibold">
            Start 14-day free trial <FaArrowRight />
          </button>
        </div>

      </div>

    </div>
  );
}

export default TransformLearners;