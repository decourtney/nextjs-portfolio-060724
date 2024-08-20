"use client";

import { useDisclosure } from "@nextui-org/react";
import { motion, useAnimate, useInView } from "framer-motion";
import ProjectModal from "./projectModal";
import { transform } from "next/dist/build/swc";

interface ProjectContainerProps {
  title: string;
  description: string;
  image: string;
  writeup: string[];
  toolIcons: string[];
  link: string;
  isLeft: boolean;
}

const ProjectContainer = (props: ProjectContainerProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imgScope, animateImg] = useAnimate();
  const [cardScope, animateCard] = useAnimate();
  const [containerScope, animateContainer] = useAnimate();
  const skewAmount = 1;

  const handleHoverStart = () => {
    animateContainer(
      containerScope.current,
      {
        zIndex: 50,
        boxShadow: "0px 0px 14px 0px hsl(var(--nextui-secondary-100))",
      },
      { type: "tween" }
    );
    animateCard(
      cardScope.current,
      {
        x: props.isLeft ? "-5%" : "5%",
        skewX: props.isLeft ? -skewAmount : skewAmount,
        skewY: props.isLeft ? -skewAmount : skewAmount,
      },
      { type: "tween" }
    );
    animateImg(
      imgScope.current,
      {
        x: props.isLeft ? "30%" : "-30%",
        y: 30,
        rotateZ: props.isLeft ? 2 : -2,
      },
      { type: "tween" }
    );
  };

  const handleHoverEnd = () => {
    animateContainer(
      containerScope.current,
      {
        zIndex: 0,
        boxShadow: "0px 0px 0px 0px hsl(var(--nextui-secondary-100))",
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
      className="relative h-[300px] w-full sm:w-3/4 sm:mx-5 lg:w-[90%] border-large border-[hsl(var(--nextui-primary-100))] bg-[hsl(var(--nextui-primary-100))] rounded-md"
    >
      <motion.button
        ref={cardScope}
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
        style={{
          transformOrigin: props.isLeft ? "0% 0%" : "100% 0%",
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onClick={() => onOpen()}
      >
        <motion.div
          ref={imgScope}
          className="absolute top-0 left-0 w-full h-full shadow-md"
        >
          <img
            src={props.image}
            className="w-full h-full object-cover rounded-md"
          />
        </motion.div>

        <div className="absolute top-0 w-full h-full px-4 content-center text-center space-y-4 bg-background rounded-md shadow-sm">
          <motion.h2
            className="text-4xl lg:text-5xl font-montserrat font-black text-[hsl(var(--nextui-primary-100))]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {props.title.toUpperCase()}
          </motion.h2>
          <motion.p
            className="font-playfairDisplay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {props.description}
          </motion.p>
        </div>
      </motion.button>

      <ProjectModal {...props} isOpen={isOpen} onOpenChange={onOpenChange} />
    </motion.div>
  );
};

export default ProjectContainer;
