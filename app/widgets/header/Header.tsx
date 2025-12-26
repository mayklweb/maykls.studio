"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useScrollContext } from "@/app/context/ScrollContext";
import Image from "next/image";
import gsap from "gsap";

function Header() {
  const { scrollY, setActive, menu, setMenu } = useScrollContext();

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  /* ---------- Scroll logic ---------- */
  useEffect(() => {
    const heroHeight = window.innerHeight;
    setActive(scrollY > heroHeight - 70);
  }, [scrollY, setActive]);

  /* ---------- Explicit handlers ---------- */
  const openMenu = () => {
    setActive(true);
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const toggleMenu = () => {
    setActive(true);
    setMenu((prev) => !prev);
  };

  /* ---------- GSAP animation ---------- */
  useEffect(() => {
    if (!dropdownRef.current) return;

    const dropdown = dropdownRef.current;

    // IMPORTANT: kill previous tweens
    gsap.killTweensOf(dropdown);
    gsap.killTweensOf(itemsRef.current);

    if (menu) {
      // OPEN
      gsap.set(dropdown, { height: "auto" });
      const height = dropdown.offsetHeight;
      gsap.set(dropdown, { height: 0 });

      gsap.to(dropdown, {
        height,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(dropdown, { height: "auto" });
        },
      });

      gsap.fromTo(
        itemsRef.current,
        { y: -10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          delay: 0.15,
          stagger: 0.07,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(itemsRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: "power3.in",
      });

      gsap.to(dropdown, {
        height: 0,
        duration: 0.5,
        ease: "power3"
      });
    }
  }, [menu]);

  const menuItems = [
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header>
      {/* Wrapper includes header + dropdown */}
      <div
        ref={wrapperRef}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        className="w-[300px] px-2 py-1 bg-[#002BBA]/10 backdrop-blur-lg rounded-sm fixed top-2.5 left-1/2 -translate-x-1/2 z-50"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between text-white">
          <Link href="/">
            <Image width={60} height={40} src="/maykls.italic.svg" alt="Logo" />
          </Link>

          <button className="cursor-pointer" onClick={toggleMenu}>
            <Image width={20} height={8} src="/menu.svg" alt="Menu" />
          </button>
        </div>

        {/* Dropdown */}
        <div
          ref={dropdownRef}
          className="overflow-hidden"
          style={{ height: 0 }}
        >
          <div className="pt-2">
            {menuItems.map((item, i) => (
              <div
                key={item.href}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
                className=" text-[#002BBA] font-serif font-semibold border-b border-[#002BBA]/20 flex"
              >
                <Link
                  className="flex gap-2 w-full group transition-all duration-300 ease-in-out"
                  href={item.href}
                >
                  <span className="italic">({i+1})</span>
                  <span className="block tracking-tight italic group-hover:pl-2 group-hover:opacity-50 transition-all duration-500 ease-in-out">
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full mt-5 flex items-center justify-between">
            <button className="italic text-sm font-serif font-bold">tg</button>
            <button className="italic text-sm font-serif font-bold">ig</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
