import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutBio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <motion.div
      ref={ref}
      className="w-3/4 p-5 space-y-5 rounded-lg text-primary-100 origin-right bg-primary-200 bg-transparent"
      style={{
        x: isInView ? 15 : 0,
        rotateY: isInView ? 10 : 0,
        transformPerspective: "2000px",
        transformStyle: "preserve-3d",
        transition: "transform 1s",
        boxShadow: isInView
          ? "0px 0px 5px hsl(var(--nextui-primary-100)), -1px 1px 1px hsl(var(--nextui-primary-200)), -2px 1px 2px hsl(var(--nextui-primary-300)), -3px 2px 2px hsl(var(--nextui-primary-300)), -4px 2px 2px hsl(var(--nextui-primary-300)), -5px 3px 2px hsl(var(--nextui-primary-300)), -6px 3px 1px hsl(var(--nextui-primary-300)), -20px 20px 30px hsl(var(--nextui-content1-500)), -30px 30px 40px hsl(var(--nextui-content1-500))"
          : "none",
      }}
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
