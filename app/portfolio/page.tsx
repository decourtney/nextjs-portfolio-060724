// TODO - Continue moving client-side code out to separate components to allow for as much server-side as possible
// "use client";

import React from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HomeSection from "../components/HomeSection";
import ProjectSection from "../components/ProjectSection";
import ToolsSection from "../components/ToolsSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const  PortfolioPage = () => {
  return (
    <>
      <NavBar />
      {/* <HomeSection />
      <AboutSection />
      <ProjectSection /> */}
      <ToolsSection />
      <ContactSection />
      {/* <Footer /> */}
    </>
  );
};

export default  PortfolioPage;
