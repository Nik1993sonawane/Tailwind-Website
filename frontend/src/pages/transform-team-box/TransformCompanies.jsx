import React from "react";

/* 🔷 Customer Card */
const CustomerCard = ({ logo, title, link }) => {
  return (
    <div className="
      bg-white 
      rounded-md 
      overflow-hidden 
      flex flex-col 
      h-full 
      shadow-lg 
      cursor-pointer
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-[0_0_30px_blue]
    ">
      
      {/* 🔷 Logo Header */}
      <div className="bg-[#eef3f7] h-48 flex items-center justify-center p-8">
        <img
          src={logo}
          alt="Company Logo"
          className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-all"
        />
      </div>

      {/* 🔷 Content */}
      <div className="p-8 flex flex-col flex-grow justify-between">
        <h3 className="text-[#0F172A] text-lg font-bold leading-snug mb-6">
          {title}
        </h3>

        <a
          href={link}
          className="text-[#3A10E5] font-bold flex items-center gap-2 hover:underline group text-sm"
        >
          Read customer story
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

/* 🔷 Main Section */
const TransformCompanies = () => {
  const caseStudies = [
    {
      logo: "https://thenaijapress.com/wp-content/uploads/2026/01/dcsl.png",
      title:
        "Learn how RizePoint retains talent and creates path for growth with Codecademy",
      link: "#",
    },
    {
      logo: "https://ccslegal.com/wp-content/uploads/2018/12/logo-color-01.png",
      title:
        "Learn how Mark Cuban Foundation fosters the next generation of technologists",
      link: "#",
    },
    {
      logo: "https://accorpservices.com/wp-content/uploads/2024/01/AC-logo-web.png",
      title:
        "Learn how The Motley Fool breaks barriers between technical teams",
      link: "#",
    },
  ];

  return (
    <section className="bg-black py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* 🔷 Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">
            See how companies are making big moves with Codecademy Teams
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            From onboarding and upskilling to filling skill gaps and shaping the future, we're helping all kinds of teams create big impacts through learning.
          </p>
        </div>

        {/* 🔷 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CustomerCard key={index} {...study} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TransformCompanies;