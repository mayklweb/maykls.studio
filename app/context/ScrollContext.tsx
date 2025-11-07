"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext({ scrollY: 0 });
export const useScrollContext = () => useContext(ScrollContext);

export default function ScrollProvider({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }) => {
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
