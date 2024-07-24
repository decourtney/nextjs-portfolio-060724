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
    <div className="sticky top-0 h-dvh pt-12">
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