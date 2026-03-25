import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaApple } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import Header from "../components/Header";  
import Footer from "../components/Footer";  

const Login = () => {
  return (
    <div className="bg-[#000] min-h-screen flex flex-col">

      {/* 🔷 HEADER */}
      <Header isLoginPage={true} />

      {/* 🔷 LOGIN SECTION */}
      <div className="flex-grow flex flex-col items-center pt-10 px-4">
        <div className="w-[600px] bg-[#eef3f7] p-8 rounded-lg shadow-lg mb-10">

          <h1 className="text-4xl font-bold text-center text-[#10162F] mb-6">
            Log in to Codecademy
          </h1>

          {/* Required Note */}
          <p className="text-xs text-red-800 mb-4">* Required</p>

          <form className="space-y-6">

            {/* Email / Username */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">
                Email or Username <span className="text-red-800">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email or username"
                className="w-full border-2 border-gray-900 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">
                Password <span className="text-red-800">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border-2 border-gray-900 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                required
              />
            </div>

            {/* Login Button */}
            <button className="bg-[#3A10E5] text-white w-full py-2 font-bold rounded hover:opacity-90 transition">
              Log in
            </button>
          </form>

          {/* 🔷 SOCIAL LOGIN */}
          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-gray-800 mb-4">
              Or log in using:
            </p>

            <div className="flex justify-center gap-4">
              <SocialBox icon={<FcGoogle size={20} />} />
              <SocialBox icon={<FaFacebook size={20} className="text-[#1877F2]" />} />
              <SocialBox icon={<FaGithub size={20} />} />
              <SocialBox icon={<BsTwitterX size={18} />} />
              <SocialBox icon={<FaApple size={20} />} />
            </div>
          </div>

          {/* 🔷 SIGNUP LINK */}
          <p className="mt-6 text-center text-sm">
            Not a member yet?{" "}
            <span className="text-blue-700 underline cursor-pointer">
              Sign up for free
            </span>
          </p>

        </div>
      </div>

      {/* 🔷 FOOTER */}
      <Footer />
    </div>
  );
};

// 🔹 Social Icon Box with hover effect
const SocialBox = ({ icon }) => (
  <div className="
    w-12 h-12 border-2 border-gray-900 flex items-center justify-center bg-white 
    cursor-pointer rounded-[10px] transition transform
    hover:bg-transparent hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,255,0.6)]
  ">
    {icon}
  </div>
);

export default Login;