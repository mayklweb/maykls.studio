"use client";
import gsap from "gsap";
import Link from "next/link";
import { useScrollContext } from "@/app/context/ScrollContext";
import { useEffect, useRef } from "react";

function MenuModal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const { menu, setMenu } = useScrollContext();

  useEffect(() => {
    if (menu && containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { height: "0%" },
        { duration: 1, ease: "power3.inOut", height: "100%" }
      );

      gsap.fromTo(
        itemsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.4,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1, // har biri 0.1s farq bilan chiqadi
        }
      );
    } else if (!menu && containerRef.current) {
      gsap.to(containerRef.current, {
        height: "0%",
        duration: 1,
        ease: "power3.inOut",
      });

      gsap.to(itemsRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.05,
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
    <div
      ref={containerRef}
      className="w-full h-0 fixed top-0 left-0 z-19 bg-[#FBFBFB]  overflow-hidden"
    >
      <div className="w-full h-full  py-14">
        <div>
          {menuItems.map((item, i) => (
            <div
              key={i}
              ref={el => el && (itemsRef.current[i] = el)}
              className="w-full p-5 text-6xl text-[#002BBA] text-center font-serif font-semibold tracking-tight border-b border-[#002DDA]"
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
          {/* <div className="w-full p-5 text-6xl text-[#002BBA] text-center font-serif font-semibold tracking-tight border-b border-[#002DDA]">
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div className="w-full p-5 text-6xl text-[#002BBA] text-center font-serif font-semibold tracking-tight border-b border-[#002DDA]">
            <Link href={"/pricing"}>Pricing</Link>
          </div>

          <div className="w-full p-5 text-6xl text-[#002BBA] text-center font-serif font-semibold tracking-tight border-b border-[#002DDA]">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="w-full p-5 text-6xl text-[#002BBA] text-center font-serif font-semibold tracking-tight border-b border-[#002DDA]">
            <Link href={"/contact"}>Contact</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
