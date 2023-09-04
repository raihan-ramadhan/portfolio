"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".transition-colors-smooth");

    elements.forEach((element: any) => {
      element.classList.add("transition-colors", "duration-200");
    });
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
