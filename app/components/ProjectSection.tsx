import { useContainerSize } from "../utilities";
import ProjectContainer from "./ProjectContainer";

const ProjectSection = () => {
  const { containerSize, ref } = useContainerSize();
  const projectTitles = [
    "Project Title 1",
    "Project Title 2",
    "Project Title 3",
    "Project Title 4",
    "Project Title 5",
    "Project Title 6",
  ];

  return (
    <section id="project-section" className="pt-12 lg:p-12">
      <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
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
    </section>
  );
};

export default ProjectSection;
