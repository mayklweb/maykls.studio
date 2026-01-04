import { useEffect, useState } from "react";
import ProjectsGrid from "./ui/ProjectsGrid";
import ProjectsList from "./ui/ProjectsList";

function Projects() {
  const [screen, setScreen] = useState<number | null>(null);

  useEffect(() => {
    const updateScreen = () => setScreen(window.innerWidth);

    updateScreen(); // set initial value after mount
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  // Prevent hydration mismatch
  if (screen === null) return null;

  return (
    <section className="">
      <div className="container">
        <div className="w-full h-full mt-10 lg:mt-20">
          <div className="w-full py-5 lg:py-10 flex items-start justify-between flex-col lg:flex-row  lg:items-center gap-4">
            <h1 className="text-6xl text-[#002BBA] font-serif font-semibold tracking-tight">
              Selected work <sup>(03)</sup>
            </h1>
            <p className="text-2xl text-[#002BBA] tracking-tighter">
              We helped more than 70+ brands,
              <br />
              start-ups and agencies to level up
              <br />
              their
              <span className="font-serif italic tracking-tight">
                {" "}
                website{" "}
              </span>
              game!
            </p>
          </div>
        </div>

        <div className="w-full ">
          {screen > 768 ? <ProjectsList /> : <ProjectsGrid />}
        </div>
      </div>
    </section>
  );
}

export default Projects;
