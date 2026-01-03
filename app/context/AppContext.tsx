"use client";

import React, { createContext, useContext, useRef } from "react";
import gsap from "gsap";

interface AppContextType {
  playTransition: (cb: () => void) => void;
  reveal: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside AppProvider");
  return ctx;
};

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // PAGE LEAVE (tepdan pastga tushadi)
  const playTransition = (cb: () => void) => {
    if (!overlayRef.current) return;

    gsap.fromTo(
      overlayRef.current,
      { y: "-100%" },
      {
        y: "0%",
        duration: 1,
        ease: "power4.inOut",
        onComplete: cb,
      }
    );
  };

  // PAGE ENTER (tepaga chiqib ketadi)
  const reveal = () => {
    if (!overlayRef.current) return;

    gsap.fromTo(
      overlayRef.current,
      { y: "0%" },
      {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      }
    );
  };

  return (
    <AppContext.Provider value={{ playTransition, reveal }}>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-[#002BBA] z-9999 -translate-y-full"
        style={{ transform: "translateY(-100%)" }}
      />
      {children}
    </AppContext.Provider>
  );
}
