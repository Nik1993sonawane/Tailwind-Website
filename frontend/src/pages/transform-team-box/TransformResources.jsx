import React from "react";

/* 🔷 Resource Card */
const ResourceCard = ({ title, description, linkText, bgColor, image }) => {
  return (
    <div className="flex flex-col group cursor-pointer">

      {/* 🔷 Image Header */}
      <div className={`rounded-xl aspect-[4/3] overflow-hidden mb-6 ${bgColor}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 🔷 Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>

        <div className="mt-auto">
          <a
            href="#"
            className="text-[#3A10E5] font-bold inline-flex items-center gap-2 hover:underline text-sm"
          >
            {linkText}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

/* 🔷 Main Section */
const TransformResources = () => {
  const resources = [
    {
      title: "Watch a product demo",
      description:
        "Curious about the Teams experience? Get a feel for the platform and our capabilities — both for admin and learners.",
      linkText: "Watch demos",
      bgColor: "bg-[#107C41]",
      image:
        "https://img.freepik.com/premium-photo/play-button-icon-neon-shine-play-button-with-neon-circle-neon-glowing-play-button_941429-436.jpg",
    },
    {
      title: "View a curated catalog",
      description:
        "Explore what's popular with Teams users and discover learning paths.",
      linkText: "Browse the catalog",
      bgColor: "bg-[#3A10E5]",
      image:
        "https://img.pikbest.com/best/video_preview_img/2310/9354661-6523e6629748f.jpg!w340",
    },
    {
      title: "Read tips for using Teams",
      description:
        "Find product updates, expert insights, and helpful articles.",
      linkText: "Read our blog",
      bgColor: "bg-[#FFF0E0]",
      image:
        "https://www.shutterstock.com/shutterstock/videos/3840009655/thumb/1.jpg?ip=x480",
    },
    {
      title: "Explore case studies",
      description:
        "See how other organizations are succeeding with Teams.",
      linkText: "Explore case studies",
      bgColor: "bg-[#F860F0]",
      image:
        "https://lirp.cdn-website.com/2680bbc2/dms3rep/multi/opt/7-640w.png",
    },
  ];

  return (
    <section className="bg-[#eef3f7] py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* 🔷 Title */}
        <h2 className="text-center text-[#0F172A] text-3xl md:text-5xl font-bold mb-16">
          Resources to get you started
        </h2>

        {/* 🔷 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TransformResources;