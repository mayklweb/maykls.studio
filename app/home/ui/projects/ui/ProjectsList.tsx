import Image from "next/image";
import React from "react";

function ProjectsList() {
  return (
    <div className="w-full h-full">
      <div className="w-full border-y py-15 flex ">
        <div className="w-2/5">
          <h1 className="text-6xl font-serif font-semibold tracking-tight">
            BUNYOD OPTOM
          </h1>
          <p className="tracking-tight opacity-80 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe?
          </p>
          <button className="mt-10">Visit ↗</button>
        </div>
        <div className="w-3/5 overflow-hidden">
          <Image
            src="/about.avif"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full border-b py-15 flex">
        <div className="w-2/5">
          <h1 className="text-6xl font-serif font-semibold tracking-tight">
            BUNYOD HOUSE
          </h1>
          <p className="tracking-tight opacity-60 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe?
          </p>
          <button className="mt-10">Visit ↗</button>
        </div>
        <div className="w-3/5 overflow-hidden">
          <Image
            src="/about.avif"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full border-b py-15 flex">
        <div className="w-2/5">
          <h1 className="text-6xl font-serif font-semibold tracking-tight">
            SIROJIDDIN ATTOR
          </h1>
          <p className="tracking-tight opacity-60 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe?
          </p>
          <button className="mt-10">Visit ↗</button>
        </div>
        <div className="w-3/5 overflow-hidden">
          <Image
            src="/about.avif"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;
