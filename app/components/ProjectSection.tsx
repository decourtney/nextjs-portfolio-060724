'use client'

import React, { useEffect, useState } from "react";
import ProjectContainer from "./ProjectContainer";

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
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "/projects.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        console.log(data)
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="w-full pt-24 min-h-dvh">
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
              projectTitle={project.title}
              projectDescription={project.description}
              projectImage={project.image}
              projectWriteup={project.writeup}
              projectToolIcons={project.toolIcons}
              projectLink={project.link}
              isLeft={index % 2 === 0}
            />
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default ProjectSection;
