"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const [scrolled, setScrolled] = useState<boolean>(false);

  const onScroll = useCallback(() => {
    if (scrolled === false && window.scrollY > 150) {
      setScrolled(true);
    }
    if (scrolled === true && window.scrollY <= 150) {
      setScrolled(false);
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    if (window.scrollY > 150) {
      setScrolled(true);
    }
  }, []);

  return (
    <header>
      <nav>
        <ul
          className={cn(
            "min-w-[360px] fixed z-[999] top-5 left-1/2 -translate-x-1/2 flex items-center justify-between p-[10px] rounded-full transition-all duration-400 lg:gap-[10px] bg-cream/90",
            scrolled && "bg-black/40 backdrop-blur-sm"
          )}
        >
          {links.map((link) => (
            <li className="relative" key={link.hash}>
              <Link
                className={cn(
                  `flex w-full items-center justify-center transition rounded-full overflow-hidden text-black text-[14px] font-semibold px-[10px] py-[6px] 
                   sm:text-[18px] sm:px-5`,
                  scrolled && "text-cream"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className={cn(
                      "bg-black/10 rounded-full absolute inset-0 w-full h-full -z-10 inline-block duration-0",
                      scrolled && "bg-cream/20",
                      !hydrated && "bg-transparent"
                    )}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
