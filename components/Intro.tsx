"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, ArrowRight, Download } from "lucide-react";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import SectionDivider from "./SectionDivider";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div className="relative sm:h-screen flex w-full items-center justify-center flex-col">
      <section
        ref={ref}
        id="home"
        className="max-w-[50rem] mt-32 sm:mt-0 text-center scroll-mt-[100rem]"
      >
        <motion.h1
          className="mb-12 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Raihan.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> with a strong
          passion in <span className="font-bold">UI/UX</span>. I enjoy building{" "}
          <span className="italic"> sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition select-none"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <ArrowRight
              size={22}
              className="opacity-70 group-hover:translate-x-2 delay-100 transition-transform"
            />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 select-none gap-3"
            href="/CV.pdf"
            download
          >
            <span>Download CV </span>
            <Download
              size={22}
              className="opacity-60 group-hover:translate-y-1 transition-transform delay-100"
            />
          </a>
          <div className="flex gap-2">
            <a
              className="transition bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 outline-none shrink-0"
              href="https://www.linkedin.com/in/raihan-ramadhan-baab69227/"
              target="_blank"
            >
              <span className="sr-only">Linkedin</span>
              <LinkedinIcon />
            </a>

            <a
              className="transition bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 outline-none shrink-0"
              href="https://github.com/raihan-ramadhan"
              target="_blank"
            >
              <span className="sr-only">Github</span>
              <GithubIcon />
            </a>
          </div>
        </motion.div>
      </section>
      <SectionDivider />
    </div>
  );
}
