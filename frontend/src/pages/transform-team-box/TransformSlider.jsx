import React, { useState } from "react";

const TransformSlider = () => {
  const testimonials = [
    {
      logo: "https://iconape.com/wp-content/files/xe/173427/svg/173427.svg",
      quote:
        "At Paradox, investing in our team’s continued learning is of utmost importance, for both the success of our business and the betterment of each employee. Codecademy Teams equips us with the technical skills and education tools we need to be an industry leader, while keeping our employees engaged, motivated, and connected to one another through learning.",
      author: "Adam Godson",
      title: "Chief Product Officer at Paradox",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Motley_Fool_logo.svg/1280px-The_Motley_Fool_logo.svg.png",
      quote:
        "At The Montley Fool, our purpose is to make the world smarter, happier and richer - and this include our employees. Code academy has been an assets in our effort's to increase technical skills around various points of the company and move trainning participants from unfamilier-to-conversant-to-practitioners in the realm of coding.",
      author: "Johnnie Weathersby",
      title: "Senior BI Data Analyst at The Motley Fool",
    },
    {
      logo: "https://wp.logos-download.com/wp-content/uploads/2023/02/Fortune_500_Logo.png?dl",
      quote:
        "My experience has been very positive. I feel like I can complete micro-lessons and make progress even on days I don't have much time to allocate for self - development. Code Academy is an effective platform to learn programming languages and technical topics for users may not always have consistent timeto commeit to learning. Moreover, it makes technical topics more approchable for less technical users.",
      author: "Greg Jubb",
      title: "Technical Product Manager at Fortune 500 financial institution",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  /* 🔷 Next Slide */
  const nextSlide = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  /* 🔷 Previous Slide */
  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="bg-black py-10 flex justify-center items-center">
      
      {/* 🔷 Wrapper */}
      <div>

        {/* 🔷 Navigation */}
        <div className="flex justify-end gap-3 mb-4">
          
          <button
            onClick={prevSlide}
            disabled={activeIndex === 0}
            className={`p-3 border text-[#eef3f7] transition-all duration-300 
              ${activeIndex === 0 
                ? "opacity-30 cursor-not-allowed border-black-500" 
                : "cursor-pointer border-white hover:shadow-[0_0_30px_blue]"}
            `}
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            disabled={activeIndex === testimonials.length - 1}
            className={`p-3 border text-[#eef3f7] transition-all duration-300 
              ${activeIndex === testimonials.length - 1 
                ? "opacity-30 cursor-not-allowed border-black-500" 
                : "cursor-pointer border-white hover:shadow-[0_0_30px_blue]"}
            `}
          >
            ❯
          </button>

        </div>

        {/* 🔷 Card (Fixed Width 500px) */}
        <div className="bg-[#eef3f7] w-[1000px] rounded-lg shadow-xl p-8 transition-all duration-500">

          {/* 🔷 Logo */}
          <div className="mb-6 flex justify-center">
            <img
              src={testimonials[activeIndex].logo}
              alt="logo"
              className="h-10 object-contain"
            />
          </div>

          {/* 🔷 Quote */}
          <p className="text-black-900 text-base leading-relaxed mb-6">
            “{testimonials[activeIndex].quote}”
          </p>

          {/* 🔷 Author */}
          <div>
            <p className="font-bold text-black-900 text-lg">
              {testimonials[activeIndex].author}
            </p>
            <p className="text-black-600 text-sm mt-2 tracking-wide">
              {testimonials[activeIndex].title}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformSlider;