import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TransformLearners from "../pages/transform-team-box/TransformLearners";
import TransformTeams from "../pages/transform-team-box/TransformTeams";
import TransformIndustry from "../pages/transform-team-box/TransformIndustry";
import TransformBreakthrough from "../pages/transform-team-box/TransformBreakthrough";
import TransformLearning from "../pages/transform-team-box/TransformLearning";
import TransformCompanies from "../pages/transform-team-box/TransformCompanies";
import TransformResources from "../pages/transform-team-box/TransformResources";
import TransformSlider from "../pages/transform-team-box/TransformSlider";
import TransformPart from "../pages/transform-team-box/TransformPart";
import TransformReady from "../pages/transform-team-box/TransformReady";
import TransformQuestion from "../pages/transform-team-box/TransformQuestion";

function Transform() {
  return (
    <>
      {/* 🔷 Header */}
      <Header showDemoButton={true} />

      {/* 🔷 Page Content */}
      <TransformLearners />

      <TransformTeams />

      <TransformIndustry />

      <TransformBreakthrough />

      <TransformLearning />

      <TransformCompanies />

      <TransformResources />

      <TransformSlider />

      <TransformPart />

      <TransformReady />

      <TransformQuestion />

      {/* 🔷 Footer */}
      <Footer />
    </>
  );
}

export default Transform;