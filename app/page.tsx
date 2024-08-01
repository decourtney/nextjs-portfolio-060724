"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import ProjectSection from "./components/ProjectSection";
import ToolsSection from "./components/ToolsSection";

export default function App() {
  const router = useRouter();
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    // Check if the landing page has been shown in the current session
    const hasSeenLandingPage = sessionStorage.getItem("hasSeenLandingPage");
    if (hasSeenLandingPage) {
      setShowLandingPage(false);
    } else {
      // Redirect to the landing page
      router.push("/Landing");
    }
  }, []);

  if (showLandingPage) {
    return null; // Return null while redirecting
  }

  return (
    <section className="relative w-full lg:max-w-[80%] xl:max-w-[60%] mx-auto -mt-[48px] px-4 md:px-8">
      <HomeSection />

      <AboutSection />

      <ProjectSection />

      <ToolsSection />

      <ContactSection />
    </section>
  );
}
