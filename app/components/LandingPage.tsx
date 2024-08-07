"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const router = useRouter();
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    // Check if the landing page has been shown in the current session
    const hasSeenLandingPage = sessionStorage.getItem("hasSeenLandingPage");
    if (!hasSeenLandingPage) {
      sessionStorage.setItem("hasSeenLandingPage", "true");
      setShowLandingPage(true);
    } else {
      // Immediately navigate to the home page if the landing page was seen
      router.replace("/portfolio#home");
    }
  }, []);

  // if (!showLandingPage) {
  //   return <p>Loading...</p>; // Loading indicator while redirecting
  // }

  const handleProceed = () => {
    router.replace("/portfolio#home"); // Redirect to main page
  };

  return (
    <section id="landing">
      <div className="w-[80%] min-h-dvh max-w-[300px] mx-auto flex flex-col items-center justify-center">
        <svg
          id="euto1GbIvJT1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 168"
          width="100%"
          height="100%"
          fill="hsl(var(--nextui-default-900))"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <g transform="translate(-101.2402-71.286941)">
            <path
              d="M100,156.20776c0,0,24.479862,0,49.21572,0c25.258674,0,50.78428,0,50.78428,0s0,26.71102,0,26.71102-1.02161,0-1.02161,13.61806c0,19.41303-21.150526,38.741988-48.978391,38.741988-27.632824,0-48.878439-19.328958-48.878439-38.741988c0-13.61806-1.12156-13.61806-1.12156-13.61806v-26.71102Zm23.70598,40.32908c0,2.91436.178209,19.41303,26.37264,19.41303s26.19443-16.49867,26.19443-19.41303c0-13.61806,0-13.61806,0-13.61806s-52.56707,0-52.56707,0s0,0,0,13.61806Z"
              transform="translate(.798208 3.058513)"
            />
            <g>
              <path
                d="M-0.000001,-599.078106c0,0,16.035997,0,16.035997,0l.000001,669.458313c0,0-16.035997,0-16.035997,0l-.000001-669.458313Z"
                transform="matrix(1.338928 0 0 0.095376 156.43544 129.37422)"
              />
              <path
                d="M-0.000001,-598.463193c0,0,16.035997,0,16.035997,0l.000001,668.8434c0,0-16.035997,0-16.035997,0l-.000001-668.8434Z"
                transform="matrix(1.338928 0 0 0.095474 122.445796 129.374223)"
              />
            </g>
          </g>
        </svg>
        <div>
          <Button onClick={handleProceed} size="lg">
            home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
