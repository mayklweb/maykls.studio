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

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // PAGE LEAVE → overlay pastga tushadi
  const playTransition = (cb: () => void) => {
    if (!overlayRef.current) return;

    gsap.fromTo(
      overlayRef.current,
      { y: "-100%" }, // yuqoridan boshlash
      {
        y: "0%", // pastga tushadi
        duration: 0.6,
        ease: "power4.inOut",
        onComplete: cb,
      }
    );
  };

  // PAGE ENTER → overlay yuqoriga chiqadi
  const reveal = () => {
    if (!overlayRef.current) return;

    gsap.fromTo(
      overlayRef.current,
      { y: "0%" }, // pastda
      {
        y: "-100%", // yuqoriga chiqadi
        duration: 0.6,
        ease: "power4.inOut",
      }
    );
  };

  return (
    <AppContext.Provider value={{ playTransition, reveal }}>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-[#002BBA] z-9999"
        style={{ transform: "translateY(-100%)" }} // initial hidden
      />
      {children}
    </AppContext.Provider>
  );
}
