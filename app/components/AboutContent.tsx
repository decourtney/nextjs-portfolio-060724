import React, { useEffect, useRef } from "react";
import { useContainerSize, useStateContext } from "../customHooks";
import VerticalLine from "./VerticalLine";
import {
  animate,
  ElementOrSelector,
  inView,
  motion,
  Segment,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import AboutTitle from "./AboutTitle";
import AboutBio from "./AboutBio";
import BouncingBallCanvas from "./BouncingBallCanvas";

const AboutContent = () => {
  return (
    <div className="sticky top-0 pt-[5rem]">
      {/* <AboutTitle /> */}

      <div className="relative grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div className="col-span-1 flex justify-center">
          <AboutBio />
        </div>

        <div className="col-span-1 w-full h-full">
          <BouncingBallCanvas />
        </div>
      </div>
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
