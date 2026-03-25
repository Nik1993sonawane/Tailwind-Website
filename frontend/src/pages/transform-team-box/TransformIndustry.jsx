import React, { useState } from "react";

function TransformIndustry() {
  const data = [
    {
      title: "Technology Teams",
      desc: "Ramp up developers, data scientists, and IT professionals fast with curated learning for all levels. Encourage new hires and experienced staff to keep pace with innovation.",
      img: "https://zeus.vision/wp-content/uploads/2024/04/que_es_un_dashboard_o_cuadro_de_mandos3-1920x1280.jpg"
    },
    {
      title: "Upskilling and L&D",
      desc: "Meet AI literacy and skill transformation goals with scalable, trackable training to help build technical fluency across roles. Assign tailored content that’s aligned with objectives and designed for a workforce that’s constantly evolving.",
      img: "https://img.freepik.com/free-photo/business-team-working-project_23-2149309688.jpg"
    },
    {
      title: "HR & People Teams",
      desc: "Build digital confidence across functions with content to help with onboarding, mobility, and internal career growth. Easily assign lessons, track progress, and personalize development for full teams and individuals.",
      img: "https://img.freepik.com/free-photo/hr-manager-interviewing-candidate_23-2149230010.jpg"
    },
    {
      title: "Nonprofits & Academia",
      desc: `Support your students, job seekers, and emerging professionals with technical education that builds careers. Our content is designed to fit a range of needs and skill levels, while admins can manage multiple cohorts, assign guided paths, and track progress in a safe, in-browser learning environment.

*Don’t forget to ask about our nonprofit and academic discounts.`,
      img: "https://img.freepik.com/free-photo/teacher-helping-students-classroom_23-2148892563.jpg"
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#000] text-white py-16 px-6">

      {/* 🔷 TOP BANNER */}
      <div className="max-w-6xl mx-auto relative rounded-xl overflow-hidden mb-10">
        
        <img
          src="https://assets.mailshake.com/wp-content/uploads/2022/08/11111120/sales-dashboard-examples-hero.jpg"
          alt="banner"
          className="w-full h-[400px] object-cover"
        />

        {/* Overlay Card */}
        <div className="absolute top-6 left-6 bg-white text-black p-6 rounded-lg w-[320px] shadow-xl">
          <span className="bg-yellow-300 text-xs px-2 py-1 rounded font-semibold">
            Discounts available
          </span>

          <h3 className="text-lg font-bold mt-3 mb-2">
            Flexible training that fits your budget
          </h3>

          <p className="text-sm text-gray-700 mb-4">
            $25/seat per month, billed annually. Book a demo to explore
            discount options depending on team size.
          </p>

          <div className="flex gap-3">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm">
              Request a demo
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded text-sm">
              View pricing
            </button>
          </div>
        </div>
      </div>

      {/* 🔷 TRUST SECTION */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-3">
          We're trusted by teams of all sizes
        </h2>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8">
          From fast-moving startups and global enterprises to universities and nonprofits.
        </p>

        {/* Logos */}
        <div className="flex justify-center flex-wrap gap-10 opacity-80 mt-20">
          <img src="https://logo.svgcdn.com/logos/meta.svg" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-10 invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" className="h-10 invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Reddit_logo.svg" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" className="h-10 invert" />
        </div>
      </div>

      {/* 🔷 SOLUTIONS */}
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-2xl font-bold mb-10">
          Solutions for every industry
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-600 mb-10 justify-center flex-wrap">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`pb-2 text-sm transition ${
                activeTab === index
                  ? "border-b-2 border-yellow-400 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">
              {data[activeTab].title}
            </h3>

            <p className="text-gray-300 mb-6 whitespace-pre-line">
              {data[activeTab].desc}
            </p>

            <button className="bg-yellow-400 text-black px-5 py-2 rounded font-semibold">
              Download solution sheet
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <img
              src={data[activeTab].img}
              alt="industry"
              className="rounded-xl shadow-lg w-full h-[300px] object-cover"
            />
          </div>

        </div>

      </div>

    </div>
  );
}

export default TransformIndustry;