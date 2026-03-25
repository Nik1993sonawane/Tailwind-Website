import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaApple, FaInfoCircle } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Signup = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    password: "",
    updates: true,
  });

  // ✅ STEP CHANGE FIX
  const handleContinue = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      email: "",    
      password: "",  
    });

    setStep(2);
  };

  return (
    <div className="bg-[#000] min-h-screen flex flex-col">
      <Header isSignupPage={true} />

      <div className="flex-grow flex flex-col items-center pt-10 px-4">
        <div className="w-[600px] bg-[#eef3f7] p-8 rounded-lg shadow-lg mb-10">

          <h1 className="text-4xl font-bold text-center mb-4">
            Get started for free
          </h1>

          <p className="text-1xl text-black-600 font-bold text-center mb-4">
            Step {step} of 2
          </p>

          <p className="text-xs text-red-800 mb-4">* Required</p>

          <form onSubmit={step === 1 ? handleContinue : undefined} className="space-y-6">

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Mobile Number <span className="text-red-800">*</span>
                  </label>

                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    placeholder="Enter mobile number"
                    className="w-full border-2 border-gray-900 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    required
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 accent-blue-700 cursor-pointer"
                    checked={formData.updates}
                    onChange={(e) =>
                      setFormData({ ...formData, updates: e.target.checked })
                    }
                  />
                  <p className="text-sm text-gray-800">
                    I want to receive regular updates on WhatsApp about new Codecademy features or promotions
                  </p>
                </div>

                <button className="bg-[#3A10E5] text-white w-full py-2 rounded">
                  Continue
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                {/* ✅ Email */}
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Email <span className="text-red-800">*</span>
                  </label>

                  <input
                    type="email"
                    value={formData.email}  
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter your email"
                    className="w-full border-2 border-gray-900 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Password <span className="text-red-800">*</span>
                  </label>

                  <input
                    type="password"
                    value={formData.password} 
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="Create password"
                    className="w-full border-2 border-gray-900 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    required
                  />
                </div>

                <button className="bg-[#3A10E5] text-white w-full py-2 rounded">
                  Sign Up
                </button>

                {/* Terms */}
                <p className="text-xs text-gray-600 text-center">
                  By signing up, you agree to Terms & Privacy Policy
                </p>

                {/* Social Signup */}
                <div className="mt-6 text-center">
                  <p className="text-sm font-bold text-gray-800 mb-4">
                    Or sign up using:
                  </p>

                  <div className="flex justify-center gap-4">
                    <SocialBox icon={<FcGoogle size={20} />} />
                    <SocialBox icon={<FaFacebook size={20} className="text-[#1877F2]" />} />
                    <SocialBox icon={<FaGithub size={20} />} />
                    <SocialBox icon={<FaApple size={20} />} />
                  </div>
                </div>
              </>
            )}
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-700 underline cursor-pointer"
            >
              Log in
            </span>
          </p>

        </div>
      </div>

      <Footer />
    </div>
  );
};

// 🔹 SAME SocialBox as Login
const SocialBox = ({ icon }) => (
  <div className="
    w-12 h-12 border-2 border-gray-900 flex items-center justify-center bg-white 
    cursor-pointer rounded-[10px] transition transform
    hover:bg-transparent hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,255,0.6)]
  ">
    {icon}
  </div>
);

export default Signup;