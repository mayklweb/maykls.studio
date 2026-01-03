"use client";

import { useEffect } from "react";
import { useAppContext } from "./context/AppContext";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { reveal } = useAppContext();

  useEffect(() => {
    reveal();
  }, []);

  return <>{children}</>;
}
