"use client";

import { Box, Flex } from "@radix-ui/themes";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HomeSection from "./components/HomeSection";
import LazySection from "./components/LazySection";
import LandingPage from "./Landing/page";
import { useRouter } from "next/navigation";
import HomeScrollLine from "./components/HomeScrollLine";
import AboutSection from "./components/AboutSection";

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
    <Flex justify={"center"}>
      <Box width={{ initial: "80%", md: "75%", lg: "65%" }}>
        <LazySection name="home">
          <HomeSection />
        </LazySection>

        <LazySection name="about">
          <AboutSection />
        </LazySection>
      </Box>
    </Flex>
  );
}
