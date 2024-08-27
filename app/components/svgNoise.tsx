"use client";

import { motion } from "framer-motion";

const SvgNoise = () => {
  return (
    <div
      className="fixed top-0 left-0 w-[150%] h-[100%] pointer-events-none opacity-[20%]"
      style={{ zIndex: 100 }}
    >
      <motion.svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 "
        initial={{ x: "-25%" }}
        animate={{ x: "-10%" }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.1,
          ease: "linear",
        }}
      >
        <filter id="noiseFilter">
          <motion.feTurbulence
            type="fractalNoise"
            numOctaves="2"
            stitchTiles="stitch"
            baseFrequency="0.6"
          />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)" // Apply the noise filter to the entire rect area
        />
      </motion.svg>
    </div>
  );
};

export default SvgNoise;
