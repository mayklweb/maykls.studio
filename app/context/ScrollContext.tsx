"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Html } from "next/document";

interface ScrollContextType {
  scrollY: number;
  active: boolean;
  menu: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  active: false,
  menu: false,
  setActive: () => {},
  setMenu: () => {},
});

export const useScrollContext = () => useContext(ScrollContext);

export default function ScrollProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [scrollY, setScrollY] = useState<number>(0);
  const [menu, setMenu] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 0.5,
      touchMultiplier: 0.05,
      infinite: false,
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
    <ScrollContext.Provider
      value={{ scrollY, active, menu, setMenu, setActive }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
