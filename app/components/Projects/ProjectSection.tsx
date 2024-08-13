"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import ProjectContainer from "./ProjectContainer";
import { useRouter } from "next/navigation";

// Define the type for project data
interface Project {
  title: string;
  description: string;
  image: string;
  writeup: string;
  toolIcons: string[];
  link: string;
}

const ProjectSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter();
  const [containerScope, animateContainer] = useAnimate();
  const [cardScope, animteCard] = useAnimate();
  const [img1Scope, animateImg1] = useAnimate();
  const [img2Scope, animateImg2] = useAnimate();
  const [img3Scope, animateImg3] = useAnimate();

  // Fetch project data from the JSON file stored in the S3 bucket
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleHoverStart = () => {
    animateContainer(
      containerScope.current,
      {
        boxShadow: "0px 0px 14px 0px hsl(var(--nextui-primary-100))",
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
        boxShadow: "0px 0px 0px 0px hsl(var(--nextui-primary-100))",
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
    <section
      id="projects"
      className="w-full lg:w-[80%] mx-auto pt-16 min-h-dvh"
    >
      <div className="w-full text-5xl font-bold text-center text-[hsl(var(--nextui-primary-100))]">
        <h1>PROJECTS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-y-24 mt-6 md:mt-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`col-span-1 flex ${
              index % 2 !== 0 ? "lg:translate-y-32 justify-end" : ""
            }`}
          >
            <ProjectContainer
              // projectTitle={project.title}
              // projectDescription={project.description}
              // projectImage={project.image}
              // projectWriteup={project.writeup}
              // projectToolIcons={project.toolIcons}
              // projectLink={project.link}
              {...project}
              isLeft={index % 2 === 0}
            />
          </div>
        ))}
      </div>

      <div
        ref={containerScope}
        className="relative w-full lg:w-[500px] h-[300px] mt-8 lg:mt-24 mx-auto border-large border-[hsl(var(--nextui-primary-100))] bg-[hsl(var(--nextui-primary-100))] rounded-md "
      >
        <motion.div
          ref={cardScope}
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onClick={()=> {router.push("/archive")}}
        >
          <div className="absolute top-0 left-0 w-full h-full content-center text-center bg-background rounded-md shadow-sm z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-[hsl(var(--nextui-primary-100))]">
              Archived Portfolio Versions
            </h2>
            <p className="mt-[5%]">*previous iterations of this site</p>
          </div>

          <motion.div
            ref={img1Scope}
            className="absolute top-0 left-0 w-full h-full shadow-md"
          >
            <img
              src="/images/lake.jpg"
              className="w-full h-full object-fill rounded-md"
            />
          </motion.div>
          <motion.div
            ref={img2Scope}
            className="absolute top-0 left-0 w-full h-full shadow-md"
          >
            <img
              src="/images/lake.jpg"
              className="w-full h-full object-fill rounded-md"
            />
          </motion.div>
          <motion.div
            ref={img3Scope}
            className="absolute top-0 left-0 w-full h-full shadow-md"
          >
            <img
              src="/images/lake.jpg"
              className="w-full h-full object-fill rounded-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
