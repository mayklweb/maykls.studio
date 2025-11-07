"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext({ scrollY: 0 });
export const useScrollContext = () => useContext(ScrollContext);

export default function ScrollProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    (window as any).lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }: {scroll: number}) => {
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
