import React from "react";
import AboutBio from "./AboutBio";
import BouncingBallCanvas from "./BouncingBallCanvas";

const AboutContent = () => {
  return (
    <div className="sticky top-24 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
