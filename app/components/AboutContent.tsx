"use client";

import { useRef } from "react";
import AboutBio from "./AboutBio";
import { useInView } from "framer-motion";

const AboutContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some", once: false });

  return (
    <div className="relative w-full">
      <div className="relative w-full h-full mx-auto">
        <div
          ref={ref}
          className="lg:float-right max-w-[500px] mx-auto lg:ml-8 mb-8"
          style={{
            scale: isInView ? 1 : 0.98,
            transition: "all 0.5s ease",
          }}
        >
          <img
            src={"/images/lake.jpg"}
            className="rounded-lg shadow-lg"
            alt="Lake"
          />
        </div>
        <AboutBio />
      </div>
    </div>
  );
};

export default AboutContent;
