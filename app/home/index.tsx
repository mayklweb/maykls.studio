"use client";
import { useEffect, useRef } from "react";
import { About, Contact, Hero, Mission, Process, Projects } from "./ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function App() {
  const sec2Ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!sec2Ref.current) return;

  //   ScrollTrigger.matchMedia({
  //     // Desktop
  //     "(min-width: 769px)": function () {
  //       gsap.to(sec2Ref.current, {
  //         y: "-20vh",
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: sec2Ref.current,
  //           start: "top bottom",
  //           end: "top top",
  //           scrub: true,
  //         },
  //       });
  //     },

  //     // Mobile
  //     "(max-width: 768px)": function () {
  //       gsap.to(sec2Ref.current, {
  //         y: "-10vh", // Mobil uchun kichikroq qiymat
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: sec2Ref.current,
  //           start: "top bottom",
  //           end: "top top",
  //           scrub: true,
  //         },
  //       });
  //     },
  //   });
  // }, []);

  return (
    <>
      <Hero />
      <Mission />
      <Projects  />
      <Process />
      <About />
      <Contact />
    </>
  );
}

export default App;
