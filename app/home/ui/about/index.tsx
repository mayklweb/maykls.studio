"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraph =
  "Oddiy is an independent design and development studio focused on creating thoughtful websites and digital products. We combine purposeful design with modern technology to turn ideas into clear, functional, and meaningful digital experiences. From the first concept to the final details, we approach every project with curiosity, precision, and a commitment to simplicity. Our goal is to make digital experiences that not only look good, but work beautifully for the people who use them.";

// Effekt: so'zlar SCROLL POZITSIYASIGA qarab (scrub kabi) asta-sekin
// ochiladi — lekin faqat OLDINGA tomon. Yuqoriga qaytib scroll qilsangiz,
// eng yuqori yetgan progress saqlanib qoladi va so'zlar YOPILMAYDI.

export default function About() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<Array<HTMLSpanElement>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(wordsRef.current, { opacity: 0, filter: "blur(6px)" });

      // Pauza qilingan timeline — bu yerda hech narsa avtomatik ishlamaydi,
      // progress'ni o'zimiz qo'lda boshqaramiz
      const tl = gsap.timeline({ paused: true }).to(wordsRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.04,
        ease: "none",
      });

      let maxProgress = 0;

      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: "top 90%",
        end: "bottom 70%",
        onUpdate: (self) => {
          // faqat progress OLDINGA (kattaroq) bo'lsa yangilaymiz
          maxProgress = Math.max(maxProgress, self.progress);
          tl.progress(maxProgress);
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const words = paragraph.split(" ");

  return (
    <section className="w-full h-full py-20">
      <div className="container">
        <div>
          <p className="">Creative Development Studio</p>

          <div className="mt-20" ref={wrapRef}>
            <p className="text-[44px] font-syne tracking-tight leading-[120%]">
              {words.map((word, i) => (
                <span key={i}>
                  <span
                    ref={(el) => {
                      if (el) wordsRef.current[i] = el;
                    }}
                    className="inline-block text-[#0000ff]"
                  >
                    {word}
                  </span>{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}