import { useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";

const AboutTitle = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: "all", once: false });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <h2
      id="about-title"
      ref={ref}
      className="content-3dtext flex flex-col justify-center text-left lg:space-x-2 lg:flex-row w-full text-3xl lg:text-5xl font-black uppercase"
    >
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          transition: "transform 1s",
        }}
      >
        Im just a dude
      </span>

      <span>who likes art</span>
      <span>and programming</span>
    </h2>
  );
};

export default AboutTitle;
