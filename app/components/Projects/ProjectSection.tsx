import ProjectArchivesContainer from "./projectArchivesContainer";
import ProjectContainer from "./projectContainer";

// Define the type for project data
interface Project {
  title: string;
  description: string;
  images: string[];
  writeup: string[];
  toolIcons: string[];
  link: string;
}

const ProjectSection = async () => {
  const response = await fetch("http://localhost:3030/api/projects", {
    cache: "no-store",
  });
  const projects: Project[] = await response.json();

  return (
    <section
      id="projects"
      className="w-full lg:w-[80%] 2xl:w-[60%] mx-auto pt-16 px-4 min-h-dvh"
    >
      <div className="w-full text-5xl font-montserrat font-bold text-center text-[hsl(var(--nextui-primary-100))]">
        <h1>PROJECTS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-y-24 mt-6 md:mt-12 2xl:mt-24 min-h-dvh">
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
