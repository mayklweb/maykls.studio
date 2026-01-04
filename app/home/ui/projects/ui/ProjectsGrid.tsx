import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Divide } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectType {
  id: number;
  img: string;
  title: string;
  label: string;
}

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
  // {
  //   id: 4,
  //   img: "/about.avif",
  //   title: "Bunyod Optom",
  //   label: "Web Site",
  // },
  // {
  //   id: 5,
  //   img: "/about.avif",
  //   title: "Bunyod Optom",
  //   label: "Web Site",
  // },
];

function ProjectsGrid() {
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
          duration: 1,
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
          duration: 1,
          ease: "power4.out",
        },
        "<=0.2"
      );
      tl.fromTo(
        [title, label],
        {
          y: 50,
        },
        {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        },
        "<=0.2"
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  return (
    <div >
      {projects.map(({id, img, title, label }, i) => (
        <div key={id}
          ref={(el) => {
            if (el) wrapperRefs.current[i] = el;
          }}
          className="w-full h-full mt-5"
        >
          <div className="relative rounded-sm overflow-hidden">
            <div
              ref={(el) => {
                if (el) maskRefs.current[i] = el;
              }}
              className="w-full h-full bg-[#002BBA] absolute "
            />
            <Image
              ref={(el) => {
                if (el) imageRefs.current[i] = el;
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
                if (el) titleRefs.current[i] = el;
              }}
              className="text-lg font-serif font-semibold tracking-tighter "
            >
              {title}
            </h1>
            <p
              ref={(el) => {
                if (el) labelRefs.current[i] = el;
              }}
              className="text-sm tracking-tight"
            >
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsGrid;
