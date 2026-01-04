"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "./context/AppContext";
import ReactLenis from "lenis/react";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { reveal } = useAppContext();

  useEffect(() => {
    reveal();
  }, []);

  return (
    <>
      <ReactLenis root />
      {children}
    </>
  );
}
