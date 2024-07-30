import React, { useRef } from "react";
import AboutBio from "./AboutBio";
// import BouncingIcons from "./old_BouncingIcons";
import BouncingIcons from "./BouncingIcons";
import { useIsMobile } from "../utilities";
import BoringIcons from "./BoringIcons";
import { motion, useInView } from "framer-motion";

const AboutContent = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, {amount: "some", once: false });

  return (
    <motion.div
      className="min-h-dvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="relative pt-24 mx-auto">
        <div
          ref={ref}
          className="lg:float-right max-w-[500px] lg:ml-8 mb-8 z-20"
          style={{
            scale: isInView ? 1 : 0.98,
            transition: "all 0.5s ease",
          }}
        >
          <img
            src={"/images/lake.jpg"}
            className="rounded-lg shadow-lg"
            alt="Lake"
          />
        </div>
        <div className="relative -z-10">
          <AboutBio />
        </div>
      </div>
      <div className="lg:absolute lg:top-0 w-full h-full -z-20">
        {isMobile ? <BoringIcons /> : <BouncingIcons />}
      </div>
    </motion.div>
  );
};

export default AboutContent;
