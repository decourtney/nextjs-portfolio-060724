import ProjectContainer from "./ProjectContainer";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const projectTitles = [
    "Project Title 1",
    "Project Title 2",
    "Project Title 3",
    "Project Title 4",
    "Project Title 5",
    "Project Title 6",
  ];

  // Adjust project cards to stagger when on smaller
  return (
    <section id="project-section" className="relative w-full min-h-[120dvh]">
      <div className="sticky top-12 mt-12 min-h-dvh">
        <motion.div
          className="w-full mb-24 text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold"
          initial={{
            x: 0,
            scaleX: 0,
            scaleY: 0.5,
            transformOrigin: "center",
            translateY: "-20%",
          }}
          animate={{ scaleX: 1, scaleY: 1 }}
        >
          <h1>PROJECTS</h1>
        </motion.div>
        
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectTitles.map((title, index) => (
            <div
              key={title}
              className={`col-span-1 ${
                index % 2 !== 0 ? "lg:translate-y-10" : ""
              }`}
            >
              <ProjectContainer projectTitle={title} isLeft={index % 2 === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
