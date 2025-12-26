"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   let currentScroll = 0;
  //   let isScrollingDown = true;

  //   let tween = gsap
  //     .to(".marquee_part", {
  //       xPercent: -100,
  //       repeat: -1,
  //       duration: 15,
  //       ease: "linear",
  //     })
  //     .totalProgress(0.8);

  //   gsap.set(".marquee_inner", {
  //     xPercent: -50,
  //   });

  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > currentScroll) {
  //       isScrollingDown = true;
  //     } else {
  //       isScrollingDown = false;
  //     }

  //     gsap.to(tween, {
  //       timeScale: isScrollingDown ? 1 : -1,

  //     });
  //   });
  // }, []);

  return (
    <section data-header="light">
      <div>
        <div>
          <h1>About</h1>
        </div>

        {/* <section>
          <div className="">
            <hr />
            <div className="overflow-hidden scroll-strip-track flex w-max">
              <div className="w-full h-full">
                <Image
                  width={2800}
                  height={525}
                  src={"/maykls.svg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  width={2800}
                  height={525}
                  src={"/maykls.svg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <hr />
            <div className="overflow-hidden">
              <div className="w-full h-full">
                <Image
                  width={2800}
                  height={525}
                  src={"/studio.svg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <hr />
          </div>
        </section> */}

        <section className="marquee py-10">
          <div className="marquee_inner w-fit flex flex-auto flex-row gap-10">
            {/* <div className="marquee_part flex items-center shrink-0 py-1 w-[1440px] relative">
              <Image
                src="/maykls.svg"
                alt=""
                width={1440}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="marquee_part flex items-center shrink-0 py-1 w-[1440px] relative">
              <Image
                src="/maykls.svg"
                alt=""
                width={1440}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="marquee_part flex items-center shrink-0 py-1 w-[1440px] relative">
              <Image
                src="/maykls.svg"
                alt=""
                width={1440}
                height={700}
                className="object-cover w-full h-full"
              />
            </div> */}
            {/* <div className="marquee_part w-[1440px] relative">
              <Image
                src="/studio.svg"
                alt=""
                width={1440}
                height={700}
                className="object-cover w-full h-full"
              />
            </div> */}
          </div>
        </section>

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
                  All delivered with the precision,  passion, and dedication of a
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
