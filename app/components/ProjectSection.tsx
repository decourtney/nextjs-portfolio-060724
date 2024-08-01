import ProjectContainer from "./ProjectContainer";

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
    <section id="projects" className="w-full pt-24 min-h-dvh">
      <div className="w-full text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold">
        <h1>PROJECTS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 md:mt-12">
        {projectTitles.map((title, index) => (
          <div
            key={title}
            className={`col-span-1 flex ${
              index % 2 !== 0 ? "lg:translate-y-10 justify-end" : ""
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
