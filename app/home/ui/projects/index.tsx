"use client"; // important for GSAP in Next.js

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects({
  props,
  ref,
}: {
  props?: any;
  ref?: React.ForwardedRef<HTMLElement>;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const mask = maskRef.current;
    const image = imageRef.current;

    if (!wrapper || !mask || !image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // 1️⃣ MASK slides down smoothly
    tl.fromTo(
      mask,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.2,
        ease: "power4.out",
      }
    );

    // 2️⃣ IMAGE clip-path reveal + slight scale + vertical move
    tl.fromTo(
      image,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.2,
        ease: "power4.out",
      },
      "<=0.2" // overlap for smooth cinematic effect
    );
  }, []);

  return (
    <section ref={ref} className="relative z-10">
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={wrapperRef}
          className="relative w-[420px] h-[260px] rounded-sm overflow-hidden"
        >
          {/* MASK */}
          <div
            ref={maskRef}
            className="absolute w-full h-full bg-[#002BBA] z-20"
          />
          {/* IMAGE WRAPPER */}
          <div ref={imageRef} className="absolute w-full h-full z-30">
            <Image
              src="/about.avif"
              alt=""
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
