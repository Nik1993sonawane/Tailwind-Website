import React from "react";
import { ArrowRight } from "lucide-react";

const CertificationPaths = () => {
  const providers = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "CompTIA", logo: "https://cdn.worldvectorlogo.com/logos/comptia-logo.svg" },
    { name: "ISC2", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/ISC2-Logo-350x350.png" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "IIBA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR890y7KeEWBxFydW-y75E4nX4O9aUkK0T0MA&s" },
    { name: "ISTQB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtnvtoUeiUZ3VutJd0BYRDHM3LvOHpbi5pQ&s" },
    { name: "ISACA", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/ISACA_logo.png" },
    { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "PMI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25JI8928Qjzk0Bl3jH0CenRFNlF5SChI7qg&s" },
  ];

  return (
    <div className="pl-8">

      {/* 🔷 Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Certification paths</h2>
        <p className="text-black-600 mb-6">
          Prepare for top industry certifications with a guided path. Each one includes 
          expert-reviewed lessons, hands-on projects, and practice tests to help you pass the exam.
        </p>
      </div>

      {/* 🔷 Sub-heading */}
      <h3 className="font-bold text-lg mb-4">Providers</h3>

      {/* 🔷 Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {providers.map((provider, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-gray-300 rounded-md p-4 min-h-[30px] bg-white
                       cursor-pointer transform transition-all duration-300
                       hover:scale-105 hover:scale-105 hover:border-blue-500
                       hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]"
          >
            <img
              src={provider.logo}
              alt={provider.name}
              className="max-h-5 max-w-[90%] object-contain"
            />
          </div>
        ))}
      </div>

      {/* 🔷 Footer */}
      <div className="flex justify-center">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer"
        >
          Explore all 64 certification paths
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default CertificationPaths;