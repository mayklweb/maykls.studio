"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/AppContext";

function Header() {
  const [menu, setMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const linesRef = useRef<HTMLDivElement[]>([]);

  const toggleMenu = () => setMenu((prev) => !prev);

  useEffect(() => {
    if (!dropdownRef.current) return;
    const dropdown = dropdownRef.current;

    gsap.killTweensOf([dropdown, itemsRef.current]);

    if (menu) {
      gsap.set(dropdown, { height: "auto" });
      const height = dropdown.offsetHeight;
      gsap.set(dropdown, { height: 0 });

      gsap.to([dropdown], {
        height,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(dropdown, { height: "auto" });
        },
      });

      gsap.fromTo(
        linesRef.current,
        { width: "0px" },
        { width: "100%", stagger: 0.1, duration: 0.6, ease: "power4.inOut" }
      );

      gsap.fromTo(
        itemsRef.current,
        { y: 100 },
        { y: 0, stagger: 0.08, duration: 0.6, ease: "power4.out" }
      );
    } else {
      gsap.to(dropdown, {
        height: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(linesRef.current, {
        width: "0px",
        stagger: 0.1,
        duration: 0.6,
        ease: "power4.inOut",
      });

      gsap.to(itemsRef.current, {
        y: 100,
        stagger: 0.1,
        duration: 0.4,
        ease: "power4.inOut",
      });
    }
  }, [menu]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  const router = useRouter();
  const { playTransition } = useAppContext();

  const handleClick = (href: string) => {
    setMenu(false);

    playTransition(() => {
      router.push(href);
    });
  };

  return (
    <header
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
      className="fixed bottom-5 lg:bottom-auto lg:top-5 left-1/2 -translate-x-1/2 z-50 w-[260px] bg-[#002BBA]/10 backdrop-blur-lg rounded-sm px-2 py-1"
    >
      <div
        ref={dropdownRef}
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
                  if (el) itemsRef.current[i] = el;
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
                ref={(ln) => {
                  if (ln) linesRef.current[i] = ln;
                }}
                className="w-full h-px bg-[#002BBA]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center text-white">
        <Link href="/">
          <Image src="/maykls.italic.svg" width={60} height={26} alt="Logo" />
        </Link>

        <button className="w-5 h-2 cursor-pointer" onClick={toggleMenu}>
          <Image
            src="/menu.svg"
            width={20}
            height={8}
            className="w-full h-full object-cover"
            alt="Menu"
          />
        </button>
      </div>
      <div
        ref={dropdownRef}
        className="overflow-hidden hidden invisible opacity-0 lg:block lg:visible lg:opacity-100"
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
                  if (el) itemsRef.current[i] = el;
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
                ref={(ln) => {
                  if (ln) linesRef.current[i] = ln;
                }}
                className="w-full h-px bg-[#002BBA]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dropdown */}
    </header>
  );
}

export default Header;
