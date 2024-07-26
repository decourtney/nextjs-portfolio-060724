"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import LazySection from "./components/LazySection";
import useWindowSize from "./utilities/useWindowSize";
import HomeScrollLine from "./components/VerticalLine";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

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
    return null; // Return nothing while redirecting
  }

  return (
    <section id="page-content">
      <div className="w-full lg:max-w-[60%] mx-auto -mt-[48px] px-4">
        {/* <LazySection name="home"> */}
        {/* <HomeSection /> */}
        {/* </LazySection> */}

        {/* <LazySection name="about"> */}
        {/* <AboutSection /> */}
        {/* </LazySection> */}

        {/* <LazySection name="projects"> */}
        <ProjectSection />
        {/* </LazySection> */}

        {/* <LazySection name="contact"> */}
        <ContactSection />
        {/* </LazySection> */}
      </div>
    </section>
  );
}
