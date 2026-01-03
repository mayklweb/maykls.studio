"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/AppContext";

function Header() {
  const [menu, setMenu] = useState(false);

  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  const mobileItemsRef = useRef<HTMLAnchorElement[]>([]);
  const mobileLinesRef = useRef<HTMLDivElement[]>([]);
  const desktopItemsRef = useRef<HTMLAnchorElement[]>([]);
  const desktopLinesRef = useRef<HTMLDivElement[]>([]);

  const router = useRouter();
  const { playTransition } = useAppContext();

  const isDesktop = () => window.innerWidth >= 1024;

  useEffect(() => {
    const dropdown = isDesktop()
      ? desktopDropdownRef.current
      : mobileDropdownRef.current;

    const items = isDesktop()
      ? desktopItemsRef.current
      : mobileItemsRef.current;

    const lines = isDesktop()
      ? desktopLinesRef.current
      : mobileLinesRef.current;

    if (!dropdown) return;

    gsap.killTweensOf([dropdown, ...items, ...lines]);

    if (menu) {
      gsap.set(dropdown, { height: "auto" });
      const height = dropdown.offsetHeight;
      gsap.set(dropdown, { height: 0 });

      gsap.to(dropdown, {
        height,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(dropdown, { height: "auto" });
        },
      });

      gsap.fromTo(
        lines,
        { width: 0 },
        { width: "100%", stagger: 0.1, duration: 0.6, ease: "power4.inOut" }
      );

      gsap.fromTo(
        items,
        { y: 100 },
        { y: 0, stagger: 0.08, duration: 0.6, ease: "power4.out" }
      );
    } else {
      gsap.to(dropdown, {
        height: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(items, {
        y: 100,
        stagger: 0.1,
        duration: 0.4,
        ease: "power4.inOut",
      });

      gsap.to(lines, {
        width: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [menu]);

  const handleClick = (href: string) => {
    setMenu(false);
    playTransition(() => router.push(href));
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      onMouseEnter={() => isDesktop() && setMenu(true)}
      onMouseLeave={() => isDesktop() && setMenu(false)}
      className="fixed bottom-5 lg:bottom-auto lg:top-5 left-1/2 -translate-x-1/2 z-50 w-[260px] bg-[#002BBA]/10 backdrop-blur-lg rounded-sm px-2 py-1"
    >
      {/* Mobile dropdown */}

      <div
        ref={mobileDropdownRef}
        className="overflow-hidden block visible opacity-100 lg:hidden lg:invisible lg:opacity-0"
        style={{ height: 0 }}
      >
        <div className="py-2">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className=" text-[#002BBA] font-serif font-semibold flex flex-col overflow-hidden"
            >
              <Link
                ref={(el) => {
                  el && (mobileItemsRef.current[i] = el);
                }}
                onClick={() => handleClick(item.href)}
                className="italic tracking-tight flex gap-2 w-full group overflow-hidden "
                href={item.href}
              >
                <span className="">({i + 1})</span>
                <span className="group-hover:pl-2 group-hover:opacity-50 transition-all duration-500 ease-in-out">
                  {item.label}
                </span>
              </Link>
              <div
                ref={(el) => {
                  el && (mobileLinesRef.current[i] = el);
                }}
                className="w-full h-px bg-[#002BBA]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Header bar */}
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src="/maykls.italic.svg" width={60} height={26} alt="Logo" />
        </Link>

        <button
          onClick={() => setMenu((p) => !p)}
          className="w-5 h-2 cursor-pointer"
        >
          <Image src="/menu.svg" width={20} height={8} alt="Menu" />
        </button>
      </div>

      {/* Desktop dropdown */}
      <div
        ref={desktopDropdownRef}
        className="overflow-hidden hidden lg:block"
        style={{ height: 0 }}
      >
        <div className="py-2">
          {menuItems.map((item, i) => (
            <div
              key={item.href}
              className=" text-[#002BBA] font-serif font-semibold flex flex-col overflow-hidden"
            >
              <Link
                ref={(el) => {
                  el && (desktopItemsRef.current[i] = el);
                }}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className="italic tracking-tight flex gap-2 w-full group overflow-hidden "
              >
                <span>({i + 1})</span>
                <span className="group-hover:pl-2 group-hover:opacity-50 transition-all duration-500 ease-in-out">
                  {item.label}
                </span>
              </Link>
              <div
                ref={(el) => {
                  el && (desktopLinesRef.current[i] = el);
                }}
                className="w-full h-px bg-[#002BBA]"
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
