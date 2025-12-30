"use client";
import gsap from "gsap";
import Link from "next/link";
import { useScrollContext } from "@/app/context/ScrollContext";
import { useEffect, useRef } from "react";

function MenuModal() {
  const { menu } = useScrollContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  
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
}

export default MenuModal;
