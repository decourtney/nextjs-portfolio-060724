import React, { useRef } from "react";
import { useContainerSize, useStateContext } from "../customHooks";
import VerticalLine from "./VerticalLine";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const AboutContent = ({ content }: { content?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const stuff = useTransform(scrollYProgress, [0, 1], [-125, 5]);
  const isInView = useInView(ref);

  return (
    <div className="pt-20">
      <div
        ref={ref}
        className="content-3dtext flex flex-col justify-center text-left lg:space-x-2 lg:flex-row w-full text-3xl font-black uppercase"
      >
        <p
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            transition: "transform 1s",
          }}
        >
          Im just a dude
        </p>

        <p>who likes art</p>
        <p>and programming</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div className="col-span-1 flex justify-center">
          <motion.div
            className=" w-3/4 p-5 space-y-5 rounded-lg text-primary-500 bg-primary-200"
            initial={{  }}
            style={{transformStyle: 'preserve-3d', rotateY: stuff}}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              porttitor nisi vitae ante pellentesque, quis vehicula diam
              eleifend. Pellentesque eget felis nec risus pretium posuere eu
              eget ante. Sed molestie, libero a tincidunt vestibulum, lorem
              velit interdum nunc, vitae interdum massa ex quis mi. Aliquam
              sodales elementum est, dignissim eleifend enim congue sit amet.
              Nullam ac velit nibh. Nulla facilisi. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. Etiam nisl erat, ultricies in
              sem vel, aliquam blandit neque. Praesent dignissim ante purus, in
              tincidunt ante condimentum ac.
            </p>
            <p>
              In ac dapibus ex. Pellentesque ut pulvinar augue. Maecenas
              bibendum odio et cursus porttitor. Nam volutpat tristique
              consequat. Praesent ante leo, imperdiet fringilla fermentum a,
              interdum sit amet mauris. Praesent non ante in neque finibus
              tincidunt. Phasellus augue sapien, sagittis eu ornare in, rutrum
              sed est. Nulla dui sem, finibus non tortor sit amet, consequat
              pretium erat. Phasellus facilisis neque ac nisl consequat, eget
              consequat mauris sollicitudin.
            </p>
            <p>
              Nunc et laoreet metus. Suspendisse consequat sit amet leo rutrum
              pretium. Donec ultrices sem quis condimentum laoreet. Suspendisse
              tempus turpis efficitur tempus consectetur. Fusce tincidunt tempus
              lectus, quis posuere nisi volutpat quis. Vivamus maximus leo et
              sem sollicitudin ornare. Morbi tempus lacinia sagittis. Aenean at
              elementum erat. Phasellus volutpat mi sem, eu volutpat elit
              iaculis vel. Sed eleifend felis fringilla porttitor ullamcorper.
              Vivamus ac luctus ex.
            </p>
          </motion.div>
        </div>
        <div className="col-span-1">
          <img src="/images/tree.jpg" />
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
