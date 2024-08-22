import React, { useEffect, useState } from "react";
import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import HomeSection from "./components/Home/HomeSection";
import ProjectSection from "./components/Projects/ProjectSection";
import ToolsSection from "./components/Tools/ToolsSection";
import DivierSection from "./components/Divider/dividerSection";

export default function App() {
  return (
    <>
      <main className="overflow-clip">
        <HomeSection />
        <DivierSection />
        <AboutSection />
        <DivierSection />
        <ToolsSection />
        <DivierSection />
        <ProjectSection />
        <DivierSection />
        <ContactSection />
      </main>
    </>
  );
}
