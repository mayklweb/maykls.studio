"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

interface ScrollContextType {
  scrollY: number;
}

const ScrollContext = createContext<ScrollContextType>({ scrollY: 0 });
export const useScrollContext = () => useContext(ScrollContext);

export default function ScrollProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.5, // scroll silliqligini boshqaradi (0–1 oralig‘ida)
      wheelMultiplier: 1, // g‘ildirak tezligini boshqaradi
      touchMultiplier: 1.5, // mobil uchun tezlik
      infinite: false, // infinite scroll yo‘q bo‘lsa false
    });
    (window as any).lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      setScrollY(scroll);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
}
