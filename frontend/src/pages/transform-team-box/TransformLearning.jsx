import React from "react";

/* 🔷 Reusable Feature Section */
const FeatureSection = ({
  title,
  description,
  image,
  imageLeft = false,
}) => {
  return (
    <section className="py-16 md:py-10 bg-[#eef3f7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
            imageLeft ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* 🔷 Text */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          </div>

          {/* 🔷 Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white transform hover:scale-105 transition duration-500">
              <img
                src={image}
                alt={title}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 🔷 Main Page */
const TransformLearning = () => {
  const sections = [
    {
      title: "The learning experience",
      description:
        "Encourage more meaningful learning (not just box checking). Self-paced, interactive lessons in popular topics like AI, data, and development help learners build skills that stick — so your team doesn't just complete a course, they retain and apply.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "More advanced admin tools",
      description:
        "Get an intuitive hub where you can do it all. Assign content by individual or group — have one team learning AI literacy while another focuses on data visualizations — manage access, licenses, and progress tracking all from your admin dashboard.",
      image:
        "https://www.shutterstock.com/image-photo/digital-hr-system-showing-employee-600nw-2696032983.jpg",
      imageLeft: true,
    },
    {
      title: "Reports that show results",
      description:
        "Get a clear measure on team member growth with real-time reports. Visualizations help you see progress and engagement so you can make data-driven decisions and better support each person's learning journey.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "Lessons for every goal",
      description:
        "Access content created by experts in AI, data, software development, and more. Our library is designed to inspire growth, guiding team members every step of the way. Choose from courses that take less than an hour to complete all the way up to multi-month paths.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      imageLeft: true,
    },
    {
      title: "AI-accelerated learning",
      description:
        "Go further, faster with our AI Learning Assistant. Team members get instant, personalized guidance integrated right into the platform for help working through instructions, checking solutions, and offering explanations to better understand new concepts or errors.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
    {
      title: "Where theory meets practice",
      description:
        "Connect concepts to real-world outcomes. Choose from guided or independent projects, challenges to test understanding, and assessments that make sure team members are ready to apply what they're learning both toward industry certifications and on the job.",
      image:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64",
      imageLeft: true,
    },
    {
      title: "Continuous learning for every team member",
      description:
        "Make growth and adaptability your team's greatest assets by complementing assignments with independent learning. When team members have the flexibility to dig into their own interests, they're more motivated and remember more of what they learn.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
  ];

  return (
    <div className="bg-[#eef3f7] font-sans antialiased text-black-600">
      {sections.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}
    </div>
  );
};

export default TransformLearning;