import LandingPage from "./components/LandingPage";
import React from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import ProjectSection from "./components/ProjectSection";
import ToolsSection from "./components/ToolsSection";

export default function App() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ToolsSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
