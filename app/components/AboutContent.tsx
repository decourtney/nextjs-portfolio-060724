"use client";

import { useRef } from "react";
import AboutBio from "./AboutBio";
import { useInView } from "framer-motion";

const AboutContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some", once: false });

  return (
    <div className="relative w-[90%] lg:w-full h-full mx-auto text-xl text-primary-100">
      <div
        ref={ref}
        className="lg:float-right lg:max-w-[400px] xl:max-w-[500px] mx-auto lg:mr-2 lg:ml-8 mb-8 rounded-xl shadow-md shadow-[hsl(var(--nextui-primary-100))]"
        style={{
          scale: isInView ? 1 : 0.98,
          transition: "all 0.5s ease",
        }}
      >
        <img
          src={"/images/lake.jpg"}
          className="w-full h-full rounded-xl object-fill"
          alt="Lake"
        />
      </div>

      <AboutBio />
    </div>
  );
};

export default AboutContent;
