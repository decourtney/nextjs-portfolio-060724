import React from "react";
import AboutBio from "./AboutBio";
// import BouncingIcons from "./old_BouncingIcons";
import BouncingIcons from "./BouncingIcons";
import { useIsMobile } from "../utilities";
import BoringIcons from "./BoringIcons";

const AboutContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="sticky top-0 min-h-dvh">
      <div className="relative pt-24 mx-auto">
        <div className="lg:float-right max-w-[500px] lg:ml-8 mb-8 z-20">
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
      <div className="lg:absolute top-0 w-full h-full -z-20">
        {isMobile ? <BoringIcons /> : <BouncingIcons />}
      </div>
    </div>
  );
};

export default AboutContent;
