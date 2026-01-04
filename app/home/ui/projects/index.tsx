import ProjectList from "./ui/ProjectList";

function Projects() {
  const projects = [
    {
      id: 1,
      img: "/about.avif",
      title: "Bunyod Optom",
      label: "Web Site",
    },
    {
      id: 2,
      img: "/about.avif",
      title: "Bunyod Optom",
      label: "Web Site",
    },
    {
      id: 3,
      img: "/about.avif",
      title: "Bunyod Optom",
      label: "Web Site",
    },
    {
      id: 4,
      img: "/about.avif",
      title: "Bunyod Optom",
      label: "Web Site",
    },
    {
      id: 5,
      img: "/about.avif",
      title: "Bunyod Optom",
      label: "Web Site",
    },
  ];

  return (
    <section className=" mt-20">
      <div className="w-full h-full text-[#002BBA]">
        <div className="w-full p-5 lg:p-10 flex items-start justify-between flex-col lg:flex-row  lg:items-center gap-4">
          <h1 className="text-6xl font-serif font-semibold tracking-tight">
            Selected work <sup>(03)</sup>
          </h1>
          <p className="text-2xl tracking-tighter">
            We helped more than 70+ brands,
            <br />
            start-ups and agencies to level up
            <br />
            their
            <span className="font-serif italic tracking-tight"> website </span>
            game!
          </p>
        </div>
      </div>
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center gap-5 overflow-hidden">
          {projects.map((project) => (
            <ProjectList key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
