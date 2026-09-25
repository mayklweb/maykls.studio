"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/project-1.png",
  "/project-2.png",
  "/project-3.png",
  "/project-4.png",
  "/project-5.png",
];

export default function ProjectStackGSAP() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const panels = panelsRef.current;
    const ctx = gsap.context(() => {
      panels.forEach((panel, index) => {
        if (index === panels.length - 1) return;
        gsap.to(panel, {
          scale: 0.85,
          rotate: -3,
          ease: "none",
          scrollTrigger: {
            trigger: panels[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {images.map((src, index) => (
        <div
          key={src}
          ref={(el) => {
            if (el) panelsRef.current[index] = el;
          }}
          className="sticky top-0 h-screen w-full overflow-hidden will-change-transform"
          style={{ zIndex: index + 1 }}
        >
          <Image
            src={src}
            alt={`project ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
