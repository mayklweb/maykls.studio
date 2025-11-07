import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <section>
      <div className="relative">
        <div>
          <Image
            width={1400}
            height={574}
            src={"/maykls.italic.svg"}
            alt="maykls svg"
            className="w-full h-full"
          />
        </div>
        <div className="bg-[#002BBA] text-[#FBFBFB] py-5">
          <div className="w-full p-10 flex items-center justify-between">
            <h1 className="text-6xl font-serif tracking-tight">
              Selected work <sup>03</sup>
            </h1>
            <p className="w-1/4 text-2xl tracking-tighter">
              We helped more than 70+ brands, start-ups and agencies to level up
              their{" "}
              <span className="font-serif italic tracking-tight">website</span>{" "}
              game!
            </p>
          </div>
          <div className="mt-10">
            <div className="w-full border-b border-solid border-[#FBFBFB] cursor-pointer group">
              <div className="px-10 py-5 flex items-end justify-between relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:z-[-1] after:bg-[#FBFBFB] z-1 group-hover:text-[#002BBA] group-hover:after:h-full after:transition-all after:ease-out after:duration-300 transition-all ease-out duration-300">
                <div className="w-full h-full flex items-end justify-between absolute top-0 left-0 px-10 py-5 ">
                  <div className="w-1/4 flex items-center justify-between">
                    <p className="text-lg tracking-tighter">Agency</p>
                    <p className="text-lg tracking-tighter">Website</p>
                  </div>
                  <div className="w-1/4 flex items-center justify-between">
                    <p className="text-lg tracking-tighter">Year</p>
                    <p className="text-lg tracking-tighter">2025</p>
                  </div>
                </div>
                <div className="w-full h-full flex items-end justify-center gap-5">
                  <div>
                    <h1 className="text-9xl font-serif">Ondevi</h1>
                    <p className="lg:hidden">Tap to view</p>
                  </div>
                  <div className="rounded-lg overflow-hidden hidden group-hover:block transition-all duration-500 ease-out">
                    <Image src={"/about.avif"} alt="" width={220} height={80} priority />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-b border-solid border-[#FBFBFB] cursor-pointer group">
              <div className="px-10 py-5 flex items-end justify-between relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:z-[-1] after:bg-[#FBFBFB] z-1 group-hover:text-[#002BBA] group-hover:after:h-full after:transition-all after:ease-out after:duration-300 transition-all ease-out duration-300">
                <div className="w-full h-full flex items-end justify-between absolute top-0 left-0 px-10 py-5 ">
                  <div className="w-1/4 flex items-center justify-between">
                    <p className="text-lg tracking-tighter">Agency</p>
                    <p className="text-lg tracking-tighter">Website</p>
                  </div>
                  <div className="w-1/4 flex items-center justify-between">
                    <p className="text-lg tracking-tighter">Year</p>
                    <p className="text-lg tracking-tighter">2025</p>
                  </div>
                </div>
                <div className="w-full h-full flex items-end justify-center gap-5">
                  <div>
                    <h1 className="text-9xl font-serif">Ondevi</h1>
                    <p className="lg:hidden">Tap to view</p>
                  </div>
                  <div className="rounded-lg overflow-hidden hidden group-hover:block transition-all duration-500 ease-out">
                    <Image src={"/about.avif"} alt="" width={220} height={80} priority />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-b border-solid border-[#FBFBFB] cursor-pointer group">
              <div className="px-10 py-5 flex items-end justify-between relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:z-[-1] after:bg-[#FBFBFB] z-1 group-hover:text-[#002BBA] group-hover:after:h-full after:transition-all after:ease-out after:duration-300 transition-all ease-out duration-300">
                <div className="w-full h-full flex items-end justify-between absolute top-0 left-0 px-10 py-5 ">
                  <div className="w-1/4 flex items-center justify-between">
                    <p className="text-lg tracking-tighter">Agency</p>
                    <p className="text-lg tracking-tighter">Website</p>
                  </div>
                  <div className="w-1/4 flex items-center justify-between text-[#FBFBFB]">
                    <p className="text-lg tracking-tighter">Year</p>
                    <p className="text-lg tracking-tighter">2025</p>
                  </div>
                </div>
                <div className="w-full h-full flex items-end justify-center gap-5">
                  <div>
                    <h1 className="text-9xl font-serif">Ondevi</h1>
                    <p className="lg:hidden">Tap to view</p>
                  </div>
                  <div className="rounded-lg overflow-hidden hidden group-hover:block transition-all duration-500 ease-out">
                    <Image src={"/about.avif"} alt="" width={220} height={80} priority />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full border-b border-solid border-[#FBFBFB] cursor-pointer group">
            <div className="px-10 py-10 flex items-end justify-between relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:z-[-1] after:bg-[#FBFBFB] z-1 group-hover:text-[#002BBA] group-hover:after:h-full after:transition-all after:ease-out after:duration-300 transition-all ease-out duration-300">
              <p className="text-lg tracking-tighter">Agency</p>
              <p className="text-lg tracking-tighter">Website</p>
              <h1 className="text-8xl font-serif">Ondevi</h1>
              <p className="text-lg tracking-tighter">Year</p>
              <p className="text-lg tracking-tighter">2025</p>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
