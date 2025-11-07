"use client";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";

interface HeaderProps {
  heroRef?: MutableRefObject<HTMLElement | null>;
}

function Header({ heroRef }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  console.log(heroRef);

  useEffect(() => {

    const lenis = (window as any).lenis;
    if (!lenis || !heroRef?.current) return;
    
    const onScroll = ({ scroll }: { scroll: number }) => {
      const heroHeight = heroRef?.current?.clientHeight;
      if (scroll > heroHeight) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, [heroRef]);

  return (
    <header ref={headerRef}>
      <div
        ref={headerRef}
        className={`w-full px-10 flex items-center justify-between h-20 fixed z-20 border-b border-[#002BBA] bg-[#FBFBFB] 
     ${active ? "hidden" : "block"}
            `}
      >
        <div className="flex gap-4 tracking-tight">
          <Link href="/projects">Projects</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <Link href="/">
          <h1 className="text-2xl">
            <span className="font-serif tracking-tight">maykls</span>
            <span className="font-sans tracking-tighter">.studio</span>
          </h1>
        </Link>
        <div className="flex gap-4 tracking-tight cursor-pointer">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
