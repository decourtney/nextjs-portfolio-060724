"use client";

import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import { AnimatePresence } from "framer-motion";

export default function LoadingManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("LoadingManager: Content is loading");

    // Simulate a data fetching or content preparation delay
    const timer = setTimeout(() => {
      console.log("LoadingManager: Content is ready");
      setIsLoading(false);
    }, 3000); // Adjust this delay as necessary

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingPage key={"loading"} />}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
}
