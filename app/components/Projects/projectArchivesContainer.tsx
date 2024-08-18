import React from 'react'
import { useAnimate, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ProjectArchivesContainer = () => {
  const router = useRouter();
  const [containerScope, animateContainer] = useAnimate();
  const [cardScope, animteCard] = useAnimate();
  const [img1Scope, animateImg1] = useAnimate();
  const [img2Scope, animateImg2] = useAnimate();
  const [img3Scope, animateImg3] = useAnimate();
  
  const handleHoverStart = () => {
    animateContainer(
      containerScope.current,
      {
        boxShadow: "0px 0px 14px 0px hsl(var(--nextui-secondary-100))",
      },
      { type: "tween" }
    );
    animteCard(
      cardScope.current,
      {
        y: "5%",
        skewX: -3,

        originY: "100%",
      },
      { type: "tween" }
    );
    animateImg1(
      img1Scope.current,
      {
        x: "-30%",
        y: "-10%",
        rotateZ: -2,
        skewX: 5,
      },
      { type: "tween" }
    );
    animateImg2(
      img2Scope.current,
      { x: "0%", y: "-30%", rotateZ: 2, skewX: 5 },
      { type: "tween" }
    );
    animateImg3(
      img3Scope.current,
      { x: "30%", y: "-10%", rotateZ: 5, skewX: 5 },
      { type: "tween" }
    );
  };

  const handleHoverEnd = () => {
    animateContainer(
      containerScope.current,
      {
        boxShadow: "0px 0px 0px 0px hsl(var(--nextui-secondary-100))",
      },
      { type: "tween" }
    );
    animteCard(
      cardScope.current,
      {
        y: "0%",
        skewX: 0,
      },
      { type: "tween" }
    );
    animateImg1(
      img1Scope.current,
      {
        x: "0%",
        y: 0,
        rotateZ: 0,
        skewX: 0,
      },
      { type: "tween" }
    );
    animateImg2(
      img2Scope.current,
      { x: "0%", y: 0, rotateZ: 0, skewX: 0 },
      { type: "tween" }
    );
    animateImg3(
      img3Scope.current,
      { x: "0%", y: "0%", rotateZ: 0, skewX: 0 },
      { type: "tween" }
    );
  };
  return (
    <div
      ref={containerScope}
      className="relative w-full lg:w-[500px] h-[300px] mt-8 lg:mt-24 mx-auto border-large border-[hsl(var(--nextui-primary-100))] bg-[hsl(var(--nextui-primary-100))] rounded-md "
    >
      <motion.div
        ref={cardScope}
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onClick={() => {
          router.push("/archive");
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full px-2 content-center text-center bg-background rounded-md shadow-sm z-10">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-black text-[hsl(var(--nextui-primary-100))]">
            Archived Portfolio Versions
          </h2>
          <p className="mt-[5%] font-playfairDisplay">
            *previous iterations of this site
          </p>
        </div>

        <motion.div
          ref={img1Scope}
          className="absolute top-0 left-0 w-full h-full shadow-md"
        >
          <img
            src="/images/portfolio2022.png"
            className="w-full h-full object-cover object-top rounded-md"
          />
        </motion.div>
        <motion.div
          ref={img2Scope}
          className="absolute top-0 left-0 w-full h-full shadow-md"
        >
          <img
            src="/images/portfolio2023.png"
            className="w-full h-full object-cover object-top rounded-md"
          />
        </motion.div>
        <motion.div
          ref={img3Scope}
          className="absolute top-0 left-0 w-full h-full shadow-md"
        >
          <img
            src="/images/soon.webp"
            className="w-full h-full object-cover object-center rounded-md"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectArchivesContainer
