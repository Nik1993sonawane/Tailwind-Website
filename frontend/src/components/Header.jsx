/* eslint-disable no-unused-vars */
import { FaSearch, FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import Catalog from "../pages/Catalog";
import Resources from "../pages/Resources";
import Search from "../pages/Search";

function Header({ isLoginPage = false, isSignupPage = false, showDemoButton = false }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();

  const catalogRef = useRef(null);
  const resourcesRef = useRef(null);
  const communityRef = useRef(null);
  const pricingRef = useRef(null);

  // ✅ CLOSE DROPDOWN WHEN CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        catalogRef.current &&
        !catalogRef.current.contains(e.target) &&
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target) &&
        communityRef.current &&
        !communityRef.current.contains(e.target) &&
        pricingRef.current &&
        !pricingRef.current.contains(e.target)
      ) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ CLOSE SEARCH WITH ESC KEY
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className="bg-[#0E0424] shadow-md relative z-50">
        <div className="h-15 px-10 py-3 flex items-center justify-between">

          {/* LOGO */}
          <img src={logo} alt="Logo" className="h-10 cursor-pointer" onClick={() => navigate("/")} />

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-8 text-white font-medium">

            {/* 🔷 CATALOG */}
            <div ref={catalogRef} className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "catalog" ? null : "catalog")
                }
                className="flex items-center gap-1 hover:text-yellow-400"
              >
                Catalog <FaChevronDown className="text-xs mt-[2px]" />
              </button>

              {openMenu === "catalog" && (
                <div className="fixed left-0 top-[70px] w-full z-40">
                  <Catalog />
                </div>
              )}
            </div>

            {/* 🔷 RESOURCES */}
            <div ref={resourcesRef} className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "resources" ? null : "resources")
                }
                className="flex items-center gap-1 hover:text-yellow-400"
              >
                Resources <FaChevronDown className="text-xs mt-[2px]" />
              </button>

              {openMenu === "resources" && (
                <div className="fixed left-0 top-[70px] w-full z-40">
                  <Resources />
                </div>
              )}
            </div>

            {/* 🔷 COMMUNITY */}
            <div ref={communityRef} className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "community" ? null : "community")
                }
                className="flex items-center gap-1 hover:text-yellow-400"
              >
                Community <FaChevronDown className="text-xs mt-[2px]" />
              </button>

              {openMenu === "community" && (
                <div className="absolute top-10 left-0 bg-gray-200 text-black w-64 rounded-xl shadow-lg p-4 space-y-4">
                  <div className="flex items-center justify-between hover:bg-gray-300 p-2 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      🌐 <span>Visit Community</span>
                    </div>
                    <FaExternalLinkAlt />
                  </div>

                  <div className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer">
                    📅 Events
                  </div>

                  <div className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer">
                    📄 Learner Stories
                  </div>

                  <div className="flex items-center justify-between hover:bg-gray-300 p-2 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      👥 <span>Code Crew</span>
                    </div>
                    <FaExternalLinkAlt />
                  </div>
                </div>
              )}
            </div>

            {/* 🔷 PRICING */}
            <div ref={pricingRef} className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "pricing" ? null : "pricing")
                }
                className="flex items-center gap-1 hover:text-yellow-400"
              >
                Pricing <FaChevronDown className="text-xs mt-[2px]" />
              </button>

              {openMenu === "pricing" && (
                <div className="absolute top-10 left-0 bg-gray-200 text-black w-56 rounded-xl shadow-lg p-4 space-y-3">
                  <div className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer">
                    For Individuals
                  </div>
                  <div className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer">
                    For Students
                  </div>
                  <div className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer">
                    For Business
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-yellow-400">Bootcamps</a>
            <a href="#" className="hover:text-yellow-400">Coaching</a>
            <a href="#" className="hover:text-yellow-400">Teams</a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">

            {/* 🔍 SEARCH */}
            <FaSearch
              className="text-white text-xl cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            />

            {/* 🔥 Show Request Demo instead of Login */}
            {showDemoButton ? (
            <button
              onClick={() => navigate("/contact")}
              className="px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-600"
            >
            Request a Demo
            </button>
            ) : (
            !isLoginPage && (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-1.5 text-white border border-white rounded-md hover:bg-white hover:text-blue-600"
            >
            Login
            </button>
          )
        )}

            {/* SIGNUP BUTTON */}
            {!isSignupPage && (
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-1.5 bg-yellow-400 text-blue-900 rounded-md"
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ✅ SEARCH OVERLAY */}
      {isSearchOpen && (
        <Search onClose={() => setIsSearchOpen(false)} />
      )}
    </>
  );
}

export default Header;