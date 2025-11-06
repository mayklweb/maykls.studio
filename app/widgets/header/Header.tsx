import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="w-full px-10 flex items-center justify-between h-20 fixed z-10 text-[#FBFBFB] ">
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
        <div className="flex gap-4 tracking-tight">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
