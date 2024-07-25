import React from "react";
import AboutBio from "./AboutBio";
// import BouncingIcons from "./old_BouncingIcons";
import BouncingIcons from "./BouncingIcons";

const AboutContent = () => {
  return (
    <div className="sticky top-0 min-h-dvh">
      <div className="relative pt-24 max-w-[60%] mx-auto">
        <div className="float-right max-w-[500px] ml-4 mb-4 z-20">
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
      <div className="absolute top-0 w-full h-full -z-20">
        <BouncingIcons />
      </div>
    </div>
  );
};

export default AboutContent;
