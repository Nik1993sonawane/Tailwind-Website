/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";

function Slider() {

  const staticText = "Develop Your";

  const animatedTexts = [
    { word: "/Potential", color: "#FF4C4C" },
    { word: "/Self", color: "#FFD93D" },
    { word: "/Career", color: "#6BCB77" },
    { word: "/Skills", color: "#4D96FF" },
    { word: "/Team", color: "#C77DFF" }
  ];

  const images = [
    "https://miro.medium.com/v2/resize:fit:1024/1*n2T5RrtlG53gwOrHqtXdNw.jpeg",
    "https://www.microsoft.com/en-us/garage/wp-content/uploads/2022/11/GPW2022_team_1024w-com.jpg",
    "https://msftstories.thesourcemediaassets.com/2017/08/2017-Hackathon-Monday-0060.jpg",
    "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/others/4c/1a/4c1a7169-aab3-4e21-b1789691804216fd.jpg/_jcr_content/renditions/cq5dam.thumbnail.1280.1280.png",
    "https://s.yimg.com/ny/api/res/1.2/eVIEE53.8t_GyB.jaefEkA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ1Nw--/https://media.zenfs.com/en/aol_business_insider_articles_308/65bef00667349cf09a4da91e5bc4034b"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const navigate = useNavigate();

  /* Typing animation */
  useEffect(() => {

    const word = animatedTexts[textIndex].word;

    if (charIndex < word.length) {

      const timer = setTimeout(() => {
        setDisplayText(prev => prev + word.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 120);

      return () => clearTimeout(timer);
    }

  }, [charIndex, textIndex]);

  /* Change word */
  useEffect(() => {

    if (!playing) return;

    if (charIndex === animatedTexts[textIndex].word.length) {

      const timer = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex(prev => (prev + 1) % animatedTexts.length);
      }, 4000);

      return () => clearTimeout(timer);
    }

  }, [charIndex, playing]);

  /* Image slider */
  useEffect(() => {

    if (!playing) return;

    const slider = setInterval(() => {
      setImageIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);

  }, [playing]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Login Success:", tokenResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  const activeColor = animatedTexts[textIndex].color;

  return (

    <div className="bg-[#000] pt-12">

      <div className="flex justify-center">

        {/* IMPORTANT: overflow-hidden removed */}
        <div className="relative w-[1100px] h-[500px] rounded-xl">

          {/* Image */}
          <img
            src={images[imageIndex]}
            alt="slide"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

          {/* Static Text */}
          <div className="absolute top-10 left-12 bg-black text-white px-6 py-3 rounded text-3xl font-semibold">
            {staticText}
          </div>

          {/* Animated Text */}
          <div
            className="absolute top-28 left-12 bg-black px-6 py-3 rounded text-3xl font-bold"
            style={{
              color: activeColor,
              border: `2px solid ${activeColor}`,
              boxShadow: `0 0 20px ${activeColor}`
            }}
          >
            {displayText}
            <span className="animate-pulse ml-1">|</span>
          </div>

          {/* Play Pause */}
          <button
            onClick={() => setPlaying(!playing)}
            className="absolute mt-52 right-6 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-[5px] shadow"
          >
            {playing ? <FaPause /> : <FaPlay />}
          </button>

          {/* SIGNUP BOX */}
          <div
            className="absolute left-1/2 -bottom-24 -translate-x-1/2 w-[900px] bg-black rounded-xl p-6 flex justify-between items-center"
            style={{
              border: `2px solid ${activeColor}`,
              boxShadow: `0 0 30px ${activeColor}`
            }}
          >

            {/* Left */}
            <div className="flex flex-col gap-4 w-[300px]">

              <button 
                onClick={() => login()}
                className="flex items-center justify-center gap-2 bg-gray-200 py-3 rounded font-semibold">
                <FcGoogle size={20}/>
                Sign up with Google
              </button>

              <div className="flex items-center text-white text-sm">
                <div className="flex-1 border-t border-gray-500"></div>
                <span className="px-3">OR</span>
                <div className="flex-1 border-t border-gray-500"></div>
              </div>

              <button 
                onClick={() => navigate("/signup")}
                className="bg-yellow-400 py-3 rounded font-semibold hover:bg-yellow-300">
                More ways to sign up
              </button>

            </div>

            {/* Right */}
            <div className="text-gray-200 text-lg max-w-[420px]">
              Grow in your career and unlock new opportunities by learning
              in-demand skills in AI, data, coding, cybersecurity, and more.
            </div>

          </div>

        </div>

      </div>

      {/* Company Logos */}
      <div className="bg-[#130C34] py-20 mt-12">

        <div className="text-center mb-12">
      {/* Section Title */}
      <p className="text-white mt-2 mb-10 text-[25px]">
        Our learners work at
      </p>

      {/* Logos Row */}
      <div className="flex justify-center items-center mt-6 gap-14 flex-wrap">
        <img
          src="https://logo.svgcdn.com/logos/meta.svg"
          alt="Meta Logo"
          className="h-10 object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft"
          className="h-10 object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
          className="h-10 object-contain"
        />
        <img
          src="https://www.nicepng.com/png/detail/25-257559_ea-logo-electronic-arts-logo-png.png"
          alt="EA Logo"
          className="h-10 object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple Logo"
          className="h-10 object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          className="h-10 object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
          alt="Spotify"
          className="h-10 object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Reddit_logo.svg"
          alt="Reddit"
          className="h-10 object-contain"
        />
      </div>

      {/* IBM Logo Center */}
      <div className="flex justify-center mt-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
          alt="IBM"
          className="h-10 object-contain"
        />
      </div>
    </div>

    {/* Transform Your Team Box */}
    <div className="flex justify-center mt-10">
      <div
          onClick={() => navigate("/transform")} 
          className="group relative w-[1100px] bg-gradient-to-r from-[#020617] to-[#020B2D] border border-blue-900 rounded-xl p-6 flex items-center cursor-pointer
                     transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]">
                  
      <div className="flex items-start gap-4">
        <span className="text-blue-400 text-2xl">≫</span>
      <div>
      <h4 className="text-blue-400 font-mono text-lg">
        Transform your team with Codecademy Teams training
      </h4>
      <p className="text-gray-300">
        Help everyone on your team build job-ready skills with a plan
        that offers flexible content assignment, progress tracking,
        and more
      </p>
    </div>
  </div>
          
  {/* Arrow fixed to right side */}
  <div className="absolute right-10 text-blue-400 text-4xl transition-transform duration-300 group-hover:translate-x-2">
    <FaArrowRight />
  </div>
  </div>
  </div>
   </div>
</div>
  );
}

export default Slider;