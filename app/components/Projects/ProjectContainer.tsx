"use client";

import { useDisclosure } from "@nextui-org/react";
import { motion, useAnimate } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { transform } from "next/dist/build/swc";

interface ProjectContainerProps {
  title: string;
  description: string;
  image: string;
  writeup: string;
  toolIcons: string[];
  link: string;
  isLeft: boolean;
}

const ProjectContainer = (data: ProjectContainerProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imgScope, animateImg] = useAnimate();
  const [cardScope, animateCard] = useAnimate();
  const [containerScope, animateContainer] = useAnimate();
  const skewAmount = 1;

  const handleHoverStart = () => {
    animateContainer(
      containerScope.current,
      {
        boxShadow: data.isLeft
          ? "0px 0px 14px 0px hsl(var(--nextui-primary-100))"
          : "0px 0px 14px 0px hsl(var(--nextui-primary-100))",
      },
      { type: "tween" }
    );
    animateCard(
      cardScope.current,
      {
        x: data.isLeft ? "-5%" : "5%",
        skewX: data.isLeft ? -skewAmount : skewAmount,
        skewY: data.isLeft ? -skewAmount : skewAmount,
      },
      { type: "tween" }
    );
    animateImg(
      imgScope.current,
      {
        x: data.isLeft ? "30%" : "-30%",
        y: 30,
        rotateZ: data.isLeft ? 2 : -2,
      },
      { type: "tween" }
    );
  };

  const handleHoverEnd = () => {
    animateContainer(
      containerScope.current,
      {
        boxShadow: data.isLeft
          ? "0px 0px 0px 0px hsl(var(--nextui-primary-100))"
          : "0px 0px 0px 0px hsl(var(--nextui-primary-100))",
      },
      { type: "tween" }
    );
    animateCard(
      cardScope.current,
      {
        x: 0,
        skewX: 0,
        skewY: 0,
      },
      { type: "tween" }
    );
    animateImg(
      imgScope.current,
      {
        x: 0,
        y: 0,
        rotateZ: 0,
      },
      { type: "tween" }
    );
  };

  return (
    <motion.div
      ref={containerScope}
      className="relative h-[300px] w-full sm:w-3/4 sm:mx-5 lg:w-[80%] border-large border-[hsl(var(--nextui-primary-100))] bg-[hsl(var(--nextui-primary-100))] rounded-md"
    >
      {/* <div className="relative w-full h-full"> */}
      <motion.button
        ref={cardScope}
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
        style={{
          transformOrigin: data.isLeft ? "0% 0%" : "100% 0%",
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onClick={() => onOpen()}
      >
        <div className="absolute top-0 w-full h-full px-10 content-center text-center space-y-4 bg-background rounded-md z-20 shadow-sm">
          <h2 className="text-4xl lg:text-5xl font-black text-[hsl(var(--nextui-primary-100))]">
            {data.title}
          </h2>
          <p className="">{data.description}</p>
        </div>

        <motion.div
          ref={imgScope}
          className="absolute top-0 left-0 w-full h-full shadow-md"
        >
          <img
            src="/images/lake.jpg"
            className="w-full h-full object-fill rounded-md"
          />
        </motion.div>
      </motion.button>
      {/* </div> */}

      <ProjectModal
        projectTitle={data.title}
        projectImage={data.image}
        projectWriteup={data.writeup}
        projectToolIcons={data.toolIcons}
        projectLink={data.link}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </motion.div>
  );
};

export default ProjectContainer;
