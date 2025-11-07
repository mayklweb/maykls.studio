// app/provider.tsx
"use client";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Provider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}
