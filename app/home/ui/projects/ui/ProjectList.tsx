import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectType {
  id: number;
  img: string;
  title: string;
  label: string;
}

function ProjectList({ project }: { project: ProjectType }) {
  const { img, title, label } = project;
  const wrapperRefs = useRef<HTMLDivElement[]>([]);
  const maskRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const labelRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    wrapperRefs.current.forEach((wrapper, i) => {
      const mask = maskRefs.current[i];
      const image = imageRefs.current[i];
      const title = titleRefs.current[i];
      const label = labelRefs.current[i];

      if (!wrapper || !mask || !image) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        mask,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.4,
          ease: "power4.out",
        }
      );

      tl.fromTo(
        image,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.4,
          ease: "power4.out",
        },
        "<=0.2"
      );
      tl.fromTo(
        [title, label],
        {
          y: -50,
        },
        {
          y: 0,
          duration: 1.4,
          stagger: 0.1,
          ease: "power4.out",
        },
        "<=0.2"
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  return (
    <div
      ref={(el) => {
        if (el) wrapperRefs.current[0] = el;
      }}
      className="w-full h-full "
    >
      <div className="relative rounded-sm overflow-hidden">
        <div
          ref={(el) => {
            if (el) maskRefs.current[0] = el;
          }}
          className="w-full h-full bg-[#002BBA] absolute "
        />
        <Image
          ref={(el) => {
            if (el) imageRefs.current[0] = el;
          }}
          src={img}
          alt=""
          width={1920 / 2}
          height={1080 / 2}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="mt-1 w-full flex items-center justify-between overflow-hidden">
        <h1
          ref={(el) => {
            if (el) titleRefs.current[0] = el;
          }}
          className="text-lg font-serif font-semibold tracking-tighter "
        >
          {title}
        </h1>
        <p
          ref={(el) => {
            if (el) labelRefs.current[0] = el;
          }}
          className="text-sm tracking-tight"
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export default ProjectList;
