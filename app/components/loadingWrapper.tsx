"use client";

import { useEffect, useState } from "react";
import LoadingPage from "./loadingPage";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [storageValue, setStorageValue] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasVisited = sessionStorage.getItem("hasVisited");
    setStorageValue(hasVisited);

    if (hasVisited === null) {
      setIsLoading(true);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="w-[80%] h-dvh lg:w-[60%] pt-32 mx-auto">
          <LoadingPage setIsLoading={setIsLoading} />
        </div>
      )}
      {storageValue !== null && !isLoading && children}
    </>
  );
}
