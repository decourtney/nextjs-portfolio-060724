"use client";

import { useEffect, useState } from "react";
import LoadingPage from "./loadingPage";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true); // Set initial state to true
  const [storageValue, setStorageValue] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasVisited = sessionStorage.getItem("hasVisited");
    setStorageValue(hasVisited);

    if (hasVisited === null) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true"); // Mark as visited
      }
    };

    if (isLoading) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="w-[80%] h-dvh lg:w-[60%] pt-32 mx-auto">
          <LoadingPage setIsLoading={setIsLoading} />
        </div>
      )}
      {!isLoading && children}
    </>
  );
}
