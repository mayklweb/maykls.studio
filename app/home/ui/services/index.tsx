"use client";

import { useEffect, useRef } from "react";
import { Palette, Code2, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Palette,
    name: "Web Design",
    duration: "2-3 weeks",
    desc: "We create clean, thoughtful, and purposeful digital experiences that reflect your brand and connect with your audience.",
  },
  {
    icon: Code2,
    name: "Web Development",
    duration: "3-5 weeks",
    desc: "We build fast, responsive, and scalable websites and web applications using modern technologies and reliable development practices.",
  },
  {
    icon: Smartphone,
    name: "Mobile App",
    duration: "4-6 weeks",
    desc: "We design and develop intuitive mobile applications that feel natural to use, perform smoothly, and bring your ideas to users' hands.",
  },
];

// Effekt: har bir ustun yuqorisidagi yupqa chiziq scroll bilan
// CHAPDAN O'NGGA chizilib boradi (scaleX 0 -> 1), keyin matn
// biroz pastdan yuqoriga fade bilan kiradi

export default function Services() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<Array<HTMLSpanElement>>([]);
  const contentRef = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(linesRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(contentRef.current, { opacity: 0, y: 16 });

      gsap.to(linesRef.current, {
        scaleX: 1,
        duration: 0.9,
        ease: "power3.inOut",
        stagger: 0.12,
        scrollTrigger: { trigger: wrapRef.current, start: "top 80%" },
      });

      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        delay: 0.2,
        scrollTrigger: { trigger: wrapRef.current, start: "top 80%" },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full h-full py-20">
      <div className="container">
        <div>
          <p>What We Do</p>
        <div
          ref={wrapRef}
          className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={service.name}>
                {/* Yuqoridagi yupqa chiziq */}
                <div
                  ref={(el) => {
                    if (el) linesRef.current[i] = el;
                  }}
                  className="h-px w-full bg-[#0000ff]/25"
                />

                <div
                  ref={(el) => {
                    if (el) contentRef.current[i] = el;
                  }}
                  className="mt-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon
                        strokeWidth={1.5}
                        className="h-7 w-7 text-[#0000ff]"
                      />
                      <span className="font-syne text-[26px] tracking-tight text-[#0000ff] md:text-[30px]">
                        {service.name}
                      </span>
                    </div>
                    <span className="whitespace-nowrap text-sm text-[#0000ff]/60">
                      {service.duration}
                    </span>
                  </div>

                  <p className="mt-6 text-[15px] leading-relaxed text-[#0000ff]/80">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
