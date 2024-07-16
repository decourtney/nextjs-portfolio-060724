import React, { useRef } from "react";
import { useContainerSize, useStateContext } from "../customHooks";
import VerticalLine from "./VerticalLine";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const AboutContent = ({ content }: { content: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const stuff = useTransform(scrollYProgress, [0, 1], [-125, 5]);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="content-text w-full pt-16 text-6xl font-black space-y-10 uppercase"
    >
      <p
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          transition: "transform 1s",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default AboutContent;

/**
Im a dude who likes art and programming.

Web development has provided me with an outlet to combine the two while still solving 
problems and providing services. On the backend I primarily use
NodeJs, MySQL, Mongo, and AWS. While exploring the possibilities
of the front end I build with React coupled with libraries such as
Framer Motion and Redux and frameworks like Next.js The
possibilities are truly endless and I always look forward to
chasing that end of line.
 */
