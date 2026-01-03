"use client";

import { useEffect, useRef } from "react";
import {useRouter, usePathname} from 'next/navigation';
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoOverlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
//   const blocksRef = useRef<HTMLDivElement>([]);   
  const isTransitioning = useRef(false);

    useEffect(() => {
     
    }, [router, pathname])

  return (
    <div ref={overlayRef}>
      {children}
    </div>
  );
}
