"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="hidden sm:block transition-colors-smooth fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[28rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />
      <motion.div
        className="block sm:hidden transition-colors-smooth fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[28rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: 0, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed top-0 left-1/2 h-[4.5rem] -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <React.Fragment key={link.hash}>
              <motion.li
                className="h-3/4 items-center justify-center relative hidden sm:flex"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={cn(
                    "transition-colors-smooth flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-white rounded-full overflow-hidden",
                    activeSection === link.name &&
                      "text-gray-950 dark:text-white"
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
                      className="transition-colors-smooth bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-700"
                      layoutId={mounted ? "activeSection-1" : undefined}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
              <motion.li
                className="h-3/4 items-center justify-center relative flex sm:hidden"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={cn(
                    "transition-colors-smooth flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-white rounded-full overflow-hidden",
                    activeSection === link.name &&
                      "text-gray-950 dark:text-white"
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
                      className="transition-colors-smooth bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-700"
                      layoutId={mounted ? "activeSection-2" : undefined}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
}
