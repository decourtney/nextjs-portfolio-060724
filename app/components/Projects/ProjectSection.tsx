"use client";

import { useEffect, useRef, useState } from "react";
import ProjectContainer from "./projectContainer";
import ProjectArchivesContainer from "./projectArchivesContainer";
import { useInView } from "framer-motion";

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

  return (
    <section
      id="projects"
      className="w-full lg:w-[80%] 2xl:w-[60%] mx-auto pt-16 min-h-dvh"
    >
      <div className="w-full text-5xl font-bold text-center text-[hsl(var(--nextui-primary-100))]">
        <h1>PROJECTS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-y-24 mt-6 md:mt-12 2xl:mt-24">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`col-span-1 flex ${
              index % 2 !== 0 ? "lg:translate-y-32 justify-end" : ""
            }`}
          >
            <ProjectContainer {...project} isLeft={index % 2 === 0} />
          </div>
        ))}
      </div>

      <ProjectArchivesContainer />
    </section>
  );
};

export default ProjectSection;
