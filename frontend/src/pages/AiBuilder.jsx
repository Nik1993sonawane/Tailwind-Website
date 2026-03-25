import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AiBuild from "../pages/ai-builder-box/AiBuild";
import AiCreate from "../pages/ai-builder-box/AiCreate";
import AiWorks from "../pages/ai-builder-box/AiWorks";
import AiCommunity from "../pages/ai-builder-box/AiCommunity";
import AiQuestion from "../pages/ai-builder-box/AiQuestion";

function AiBuilder() {
  return (
    <>
      {/* 🔷 Header */}
      <Header />

      {/* 🔷 Page Content */}
      <AiBuild />

      <AiCreate />

      <AiWorks />

      <AiCommunity />

      <AiQuestion />

      {/* 🔷 Footer */}
      <Footer />
    </>
  );
}

export default AiBuilder;