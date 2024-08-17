"use client";

import { motion } from "framer-motion";

const SvgNoise = () => {
  return (
    <motion.div
      className="fixed -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none z-50 opacity-[20%]"
      // initial={{ opacity: 0 }} // Initial opacity (0 = invisible)
      // animate={{ opacity: 0.1 }} // Final opacity (adjust to control visibility of noise)
      // transition={{ duration: 1, ease: "easeInOut" }} // Transition for the fade-in effect
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 "
      >
        <motion.filter id="noiseFilter">
          <motion.feTurbulence
            type="fractalNoise" // Type of noise (can be "fractalNoise" or "turbulence")
            numOctaves="10" // Number of octaves (higher = more detail in noise)
            stitchTiles="stitch" // Ensures seamless tiling (useful if noise repeats)
            initial={{ baseFrequency: "0.6 0.5" }} // Starting base frequency of the noise (controls detail)
            animate={{ baseFrequency: "0.5 0.4" }} // End base frequency (adjust to increase/decrease noise intensity)
            transition={{
              repeat: Infinity, // Infinite loop for the animation
              repeatType: "reverse", // Reverse the animation to create a smooth loop
              duration: 0.1, // Duration of the frequency animation loop (longer = slower changes)
              ease: "linear", // Easing function for smooth transitions
            }}
          />
        </motion.filter>

        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)" // Apply the noise filter to the entire rect area
        />
      </svg>
    </motion.div>
  );
};

export default SvgNoise;
