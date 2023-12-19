"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Icons } from "./Icons";
import { Decoration, MotionDecoration } from "./Decoration";

const refVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
} as Variants;

const [variants1, variants2, variants3, variants4] = [
  {
    ...refVariants,
    animate: {
      ...refVariants.animate,
      transition: { duration: 0.25, delay: 0 },
    },
  },
  {
    ...refVariants,
    animate: {
      ...refVariants.animate,
      transition: { duration: 0.25, delay: 0.15 },
    },
  },
  {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.25, delay: 0.4 },
    },
  },
  {
    initial: {
      opacity: 0,
      scale: 0.75,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, delay: 0.6 },
    },
  },
] as Variants[];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full bg-cream overflow-hidden px-4 sm:px-8 lg:px-[200px] xl:px-[unset] selection:bg-black selection:text-cream"
    >
      <div className="w-full min-h-[inherit] flex flex-col items-center justify-center text-center gap-[25px] py-[100px]">
        <motion.h1
          className="text-[34px] font-bold font-heading text-black leading-tight sm:text-[60px] md:text-[72px] lg:text-[92px] xl:text-[120px]"
          variants={variants1}
          initial="initial"
          whileInView="animate"
        >
          Hi, I’m Raihan <br />A Developer <br />& Designer
        </motion.h1>
        <motion.p
          className="text-[15px] font-normal max-w-[360px] sm:max-w-[450px] sm:text-[16px]] md:max-w-[600px] xl:text-[23px] xl:max-w-[736px] text-black leading-normal"
          variants={variants2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          I love crafting apps that are engaging, easy to use, and totally
          user-focused.
        </motion.p>
        <motion.div
          className="w-fit mx-auto flex flex-col justify-center items-center text-base gap-[5px] sm:flex-row sm:mx-[unset]"
          variants={variants3}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="flex gap-[5px] flex-wrap justify-center shrink-0 sm:order-2">
            <a
              className="h-[35px] px-[10px] text-base font-bold text-black flex items-center border border-black box-border truncate md:h-[45px] lg:text-[18px] xl:text-[20px]"
              href="/CV.pdf"
              download
            >
              <span>Download CV</span>
            </a>

            <a
              className="h-[35px] w-[35px] text-base font-bold text-black flex items-center justify-center p-1 border border-black box-border md:h-[45px] md:w-[45px] lg:text-[18px] xl:text-[20px] md:p-2"
              href="https://github.com/raihan-ramadhan"
              target="_blank"
            >
              <Icons.github className="fill-black" />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="h-[35px] w-[35px] text-base font-bold text-black flex items-center justify-center p-1 border border-black box-border md:h-[45px] md:w-[45px] lg:text-[18px] xl:text-[20px] md:p-2"
              href="https://www.linkedin.com/in/raihan-ramadhan-baab69227/"
              target="_blank"
            >
              <Icons.linkedin className="fill-black" />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
          <Link
            href="#contact"
            className="bg-black text-cream w-full h-[35px] flex items-center justify-center truncate sm:px-5 sm:order-1 md:h-[45px] md:px-[35px] lg:text-[18px] xl:text-[20px]"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here
          </Link>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <MotionDecoration
        decorStyles="stroke-black w-[50px] h-[50px] lg:h-[85px] lg:w-[85px] xl:h-[100px] xl:w-[100px]"
        motionStyles="absolute -left-[15px] top-[calc(100vh/7)] md:left-[85px] lg:left-[20px] lg:top-[20px] xl:top-[calc(100vh/12)] xl:left-[calc(100vw/20)]"
        variant="andromeda"
        motionVariants={variants4}
      />
      <MotionDecoration
        decorStyles="stroke-black w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[130px] md:h-[130px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px]"
        motionStyles="absolute -right-[35px] -bottom-[15px] sm:right-[15px] md:bottom-[20px] md:right-[50px] lg:-right-[20px] lg:-bottom-[50px] xl:bottom-[calc(100vh/25)] xl:right-[calc(100vw/20)]"
        variant="andromeda"
        motionVariants={variants4}
      />
    </section>
  );
}
