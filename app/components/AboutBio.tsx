import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useIsMobile } from "../utilities";

const AboutBio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const isMobile = useIsMobile();

  return (
    <motion.div
      ref={ref}
      className="lg:w-3/4 space-y-5 rounded-lg text-xl text-primary-100 origin-right backdrop-blur-sm"
      style={
        !isMobile
          ? {
              x: isInView ? 15 : 0,
              rotateY: isInView ? 10 : 0,
              transformPerspective: "2000px",
              transformStyle: "preserve-3d",
              transition: "transform 1s",
            }
          : {}
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor
        nisi vitae ante pellentesque, quis vehicula diam eleifend. Pellentesque
        eget felis nec risus pretium posuere eu eget ante. Sed molestie, libero
        a tincidunt vestibulum, lorem velit interdum nunc, vitae interdum massa
        ex quis mi. Aliquam sodales elementum est, dignissim eleifend enim
        congue sit amet. Nullam ac velit nibh. Nulla facilisi. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Etiam nisl erat,
        ultricies in sem vel, aliquam blandit neque. Praesent dignissim ante
        purus, in tincidunt ante condimentum ac.
      </p>
      <p>
        In ac dapibus ex. Pellentesque ut pulvinar augue. Maecenas bibendum odio
        et cursus porttitor. Nam volutpat tristique consequat. Praesent ante
        leo, imperdiet fringilla fermentum a, interdum sit amet mauris. Praesent
        non ante in neque finibus tincidunt. Phasellus augue sapien, sagittis eu
        ornare in, rutrum sed est. Nulla dui sem, finibus non tortor sit amet,
        consequat pretium erat. Phasellus facilisis neque ac nisl consequat,
        eget consequat mauris sollicitudin.
      </p>
      <p>
        Nunc et laoreet metus. Suspendisse consequat sit amet leo rutrum
        pretium. Donec ultrices sem quis condimentum laoreet. Suspendisse tempus
        turpis efficitur tempus consectetur. Fusce tincidunt tempus lectus, quis
        posuere nisi volutpat quis. Vivamus maximus leo et sem sollicitudin
        ornare. Morbi tempus lacinia sagittis. Aenean at elementum erat.
        Phasellus volutpat mi sem, eu volutpat elit iaculis vel. Sed eleifend
        felis fringilla porttitor ullamcorper. Vivamus ac luctus ex.
      </p>
    </motion.div>
  );
};

export default AboutBio;
