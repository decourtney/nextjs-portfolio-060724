"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import LazySection from "./components/LazySection";
import useWindowSize from "./customHooks/useWindowSize";
import HomeScrollLine from "./components/HomeScrollLine";

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
      <div className=" w-full mx-auto p-2 -mt-[48px]">
        <LazySection name="home">
          <HomeSection />
        </LazySection>

        <LazySection name="about">
          <AboutSection toggleKey="aboutSection" />
        </LazySection>

        {/* <div className="h-[500px]"></div> */}
      </div>
    </section>
  );
}
