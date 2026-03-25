import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 text-sm text-center">

      {/* TOP BORDER */}
      <div className="border-t border-white mb-6"></div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 border-b border-white pb-6 justify-items-center">

        {/* Company */}
        <div>
          <h3 className="text-[20px] font-bold mb-4">Company</h3>

          <ul className="space-y-3">
            {["About", "Careers", "Affiliates", "Partnerships"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-blue-400">
                {item}
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center pt-[50px] gap-4 mb-6">
            {[FaXTwitter, FaFacebookF, FaInstagram, FaYoutube, FaTiktok].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 flex items-center justify-center 
                             border border-white 
                             rounded-[10px] 
                             bg-transparent 
                             cursor-pointer 
                             transition-all duration-300
                             hover:border-blue-400 
                             hover:text-blue-400 
                             hover:shadow-[0_0_30px_#3b82f6]"
                >
                  <Icon className="text-lg" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[20px] font-bold mb-4">Resources</h3>
          <ul className="space-y-3">
            {[
              "AI Builder",
              "Articles",
              "Blog",
              "Cheatsheets",
              "Code challenges",
              "Docs",
              "Projects",
              "Videos",
              "Workspaces",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:text-blue-400">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-[20px] font-bold pt-[50px] mb-3">Support</h3>
          <ul>
            <li className="cursor-pointer hover:text-blue-400">
              Help Center
            </li>
          </ul>
        </div>

        {/* Plans */}
        <div>
          <h3 className="text-[20px] font-bold mb-4">Plans</h3>
          <ul className="space-y-3">
            {[
              "For individuals",
              "For students",
              "For business",
              "Discounts",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:text-blue-400">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-[20px] font-bold pt-[50px] mb-3">Community</h3>
          <ul className="space-y-3">
            {[
              "Visit community",
              "Code Crew",
              "Events",
              "Learner Stories",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:text-blue-400">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Subjects */}
        <div className="md:border-l md:border-white md:pl-6">
          <h3 className="text-[20px] font-bold mb-4">Subjects</h3>
          <ul className="space-y-3">
            {[
              "Artificial Intelligence",
              "Cloud computing",
              "Code foundations",
              "Computer science",
              "Cybersecurity",
              "Data analytics",
              "Data science",
              "Data visualization",
              "Developer tools",
              "DevOps",
              "Game development",
              "Information Technology",
              "Machine learning",
              "Math",
              "Mobile development",
              "Web design",
              "Web development",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:text-blue-400">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-[20px] font-bold mb-4">Languages</h3>
          <ul className="space-y-3">
            {[
              "Bash",
              "C",
              "C++",
              "C#",
              "Go",
              "HTML & CSS",
              "Java",
              "JavaScript",
              "Kotlin",
              "PHP",
              "Python",
              "R",
              "Ruby",
              "SQL",
              "Swift",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:text-blue-400">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Career */}
        <div>
          <h3 className="text-[20px] font-bold mb-4">Career building</h3>
          <ul className="space-y-3">
            {[
              "Career paths",
              "Career Center",
              "Interview prep",
              "Professional certification",
              "Bootcamps",
              "Full catalog",
              "Beta content",
              "Roadmap",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:text-blue-400">
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile with 50px top padding */}
          <h3 className="text-[20px] font-bold pt-[50px] mb-3">Mobile</h3>
          <div className="space-y-3 flex flex-col items-center">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-7 text-xs text-white">
        <div className="space-x-3 mb-6">
          {[
            "Privacy Policy",
            "Cookie Policy",
            "Do Not Sell My Personal Information",
            "Terms",
          ].map((item, i) => (
            <span key={item} className="cursor-pointer hover:text-blue-400">
              {item} {i !== 3 && "|"}
            </span>
          ))}
        </div>

        <div className="mb-6 md:mt-0">
          Made with ❤️ in NYC © 2026 Codecademy
        </div>
      </div>
    </footer>
  );
};

export default Footer;