import React from "react";
import { useContainerSize, useStateContext } from "../customHooks";
import VerticalLine from "./VerticalLine";
import { motion } from "framer-motion";

const AboutContent = () => {
  const { state } = useStateContext();
  const { ref, containerSize } = useContainerSize();

  return (
    <section
      id="about-content"
      ref={ref}
      className="relative h-[500px] bg-green-900 -z-10"
    >
      {containerSize && (
        <>
          <VerticalLine
            containerSize={containerSize}
            toggleKey="section"
            offset={["end end", "end start"]}
            inputRange={[0, 0.5]}
            outputRange={[0, 1]}
          />
          <motion.div>
            <p>
              Im just a guy who likes art and programming. Web development has
              provided me with an outlet to combine the two while still solving
              problems and providing services. On the backend I primarily use
              NodeJs, MySQL, Mongo, and AWS. While exploring the possibilities
              of the front end I build with React coupled with libraries such as
              Framer Motion and Redux and frameworks like Next.js The
              possibilities are truly endless and I always look forward to
              chasing that end of line.
            </p>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default AboutContent;
