"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import LazySection from "./components/LazySection";

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
      <div className="w-[80%] mx-auto -mt-[48px]">
        <LazySection name="home">
          <HomeSection />
        </LazySection>

        <LazySection name="about">
          <AboutSection />
        </LazySection>
      </div>
    </section>
  );
}
