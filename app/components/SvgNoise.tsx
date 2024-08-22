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
        animate={{ x: "-10%"}}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.1,
          ease: "linear",
        }}
      >
        <filter id="noiseFilter">
          <motion.feTurbulence
            type="fractalNoise" // Type of noise (can be "fractalNoise" or "turbulence")
            numOctaves="2" // Number of octaves (higher = more detail in noise)
            stitchTiles="stitch" // Ensures seamless tiling (useful if noise repeats)
            baseFrequency="0.6" // Starting base frequency of the noise (controls detail)
            // initial={{ baseFrequency: "0.6 0.5" }} // Starting base frequency of the noise (controls detail)
            // animate={{ baseFrequency: "0.5 0.4" }} // End base frequency (adjust to increase/decrease noise intensity)
            // transition={{
            //   repeat: Infinity, // Infinite loop for the animation
            //   repeatType: "reverse", // Reverse the animation to create a smooth loop
            //   duration: 0.1, // Duration of the frequency animation loop (longer = slower changes)
            //   ease: "linear", // Easing function for smooth transitions
            // }}
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
