"use client";

import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".transition-colors-smooth");

    elements.forEach((element: any) => {
      element.classList.add("!transition-colors", "!duration-200");
    });
  }, []);

  return <>{children}</>;
}
