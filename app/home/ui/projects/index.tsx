import { useEffect, useState } from "react";
import ProjectsGrid from "./ui/ProjectsGrid";
import ProjectsList from "./ui/ProjectsList";

function Projects() {
  const [screen, setScreen] = useState<number | null>(null);

  useEffect(() => {
    const updateScreen = () => setScreen(window.innerWidth);

    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  if (screen === null) return null;

  return (
    <section className="">
      <div className="container">
        <div className="w-full h-full mt-10 lg:mt-20">
          <div className="w-full py-5 lg:py-10 flex items-start justify-between flex-col lg:flex-row  lg:items-center gap-4">
            <h1 className="">
              {/* Selected work <sup>(03)</sup> */}
              Something We Have Done
            </h1>
            {/* <p className="text-2xl text-[#1a1a1a] tracking-tighter leading-[120%]">
              We helped more than 70+ brands,
              <br />
              start-ups and agencies to level up
              <br />
              their website game!
            </p> */}
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <div
          className="absolute top-0 left-0 pointer-events-none w-full z-50 hidden sm:block"
          style={{ height: 80, top: 0 }}
        >
          <div
            className="absolute left-0 top-0 size-full pointer-events-none"
            style={{
              zIndex: 1,
              backdropFilter:
                "blur(1px);mask-image:linear-gradient(to bottom, black 0%, #000 70%, transparent 100%)",
            }}
          ></div>
          <div
            className="absolute left-0 top-0 size-full pointer-events-none"
            style={{
              zIndex: 2,
              backdropFilter:
                "blur(4px);mask-image:linear-gradient(to bottom, black 0%, #000 50%, transparent 100%)",
            }}
          ></div>
          <div
            className="absolute left-0 top-0 size-full pointer-events-none"
            style={{
              zIndex: 3,
              backdropFilter:
                "blur(10px);mask-image:linear-gradient(to bottom, black 0%, #000 30%, transparent 100%)",
            }}
          ></div>
        </div>
        <ProjectsList />  
      </div>
    </section>
  );
}

export default Projects;
