"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrollContext } from "@/app/context/ScrollContext";
import { Menu, TextAlignJustify } from "lucide-react";

function Header() {
  const { scrollY } = useScrollContext();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const heroHeight = window.innerHeight;
    if (scrollY > heroHeight - 100) setActive(true);
    else setActive(false);
  }, [scrollY]);

  return (
    <header>
      <div
        className={`w-full px-10 flex items-center justify-between h-20 fixed z-20 border-b transition-all ease-in-out duration-500 ${
          active
            ? "text-[#002BBA] border-[#002BBA] bg-[#FBFBFB] "
            : "text-[#FBFBFB] bg-transparent border-transparent"
        }`}
      >
        <div className="hidden lg:flex gap-4 tracking-tight cursor-pointer">
          <Link href="/projects">Projects</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div>
          <Link href="/">
            <h1 className="text-2xl">
              <span className="font-serif tracking-tight">maykls</span>
              <span className="font-sans tracking-tighter">.studio</span>
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex gap-4 tracking-tight cursor-pointer">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <button className="text-sm tracking-tight">Menu</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
