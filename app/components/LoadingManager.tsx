"use client";

import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import { AnimatePresence } from "framer-motion";
import { NameSVG } from "../utilities/svgs";

export default function LoadingManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsContentReady(true);
    } else {
      setIsLoading(true);
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      // Simulate a data fetching or content preparation delay
      const timer = setTimeout(() => {
        sessionStorage.setItem("hasVisited", "true");
        setIsLoading(false);
      }, 2000); // Adjust this delay as necessary

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <div className="w-[80%] lg:w-[60%] pt-32 mx-auto">
            <LoadingPage
              key={"loading"}
              setIsContentReady={setIsContentReady}
            />
          </div>
        )}
      </AnimatePresence>

      {isContentReady && children}
    </>
  );
}
