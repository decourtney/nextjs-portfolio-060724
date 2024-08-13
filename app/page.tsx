import LandingPage from "./components/LandingPage";
import React from "react";
import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import HomeSection from "./components/Home/HomeSection";
import ProjectSection from "./components/Projects/ProjectSection";
import ToolsSection from "./components/Tools/ToolsSection";
import Divider from "./components/divider";

export default function App() {
  return (
    <>
      {/* <HomeSection /> */}
      <AboutSection />
      <Divider />
      <ToolsSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
