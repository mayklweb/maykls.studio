import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section>
      <div>
        <div>
          <h1>About</h1>
        </div>
        <div className="relative">
          <div className="w-full h-screen">
            <Image
              src={"/about.avif"}
              alt=""
              width={1980}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-end justify-end absolute top-0 left-0 p-10">
            <div className="w-full border-t border-[#FBFBFB] flex items-start justify-between pt-5">
              <div>
                <h1 className="text-[#FBFBFB] text-6xl  tracking-tight">
                  <span className="font-snas italic">Were</span>{" "}
                  <span className="font-serif">maykls</span>.studio
                </h1>
              </div>
              <div className="lg:w-[40%] hidden">
                <p className="text-[#FBFBFB] text-3xl font-medium tracking-tight">
                  <span className="pl-20">A</span> creative boutique studio
                  crafting exceptional
                  <span className="font-serif italic"> websites</span> with
                  sharp messaging, award-winning design, and smooth animations.
                  All delivered with the precision, passion, and dedication of a
                  Grand Slam Tennis match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
