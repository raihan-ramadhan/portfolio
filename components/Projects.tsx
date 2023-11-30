"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import { Decoration } from "./Decoration";
import { cn } from "@/lib/utils";
import Link from "./Link";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // state and function to make link project able to delay on touch screen
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const nativeEvent = e.nativeEvent as any;
    const target = e.target as HTMLAnchorElement;

    if (nativeEvent.pointerType !== "mouse") {
      e.preventDefault();
      e.stopPropagation();

      if (!isClicked) {
        setIsClicked(true);
        setTimeout(() => {
          router.push(target.href);
        }, 500);
      }
    }
  };

  // state for track current screen size
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  // function handler for track current screen size
  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // initial value for screenSize
  useEffect(() => {
    handleResize();
  }, []);

  // give window an eventListener for track current screen size
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSize = screenSize.width >= 600 ? 250 : 200;

  const variant: Variants = {
    initial: {
      opacity: 0,
      transform: `translate(-50%, -${imageSize / 2}px) scale(0)`,
    },
    animate: {
      opacity: 1,
      transform: `translate(-50%, -${imageSize / 2}px) scale(1)`,
    },
    exit: {
      opacity: 0,
      transform: `translate(-50%, -${imageSize / 2}px) scale(0)`,
    },
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="relative text-center pt-[100px] pb-[100px] md:pt-[60px] md:pb-[90px] lg:pt-[80px] lg:pb-[120px] selection:text-black selection:bg-blue overflow-hidden scroll-mt-[100px] flex flex-col gap-[15px] sm:gap-[25px] lg:gap-[50px] w-full"
    >
      <Decoration.reverseItalicEllipse className="stroke-cream absolute -left-[100px] -top-[100px] w-[220px] h-[280px] md:w-[350px] md:h-[450px] xl:w-[450px] xl:h-[550px] opacity-40 -mask-0-50-45deg" />
      <SectionHeading>PROJECTS</SectionHeading>
      <div className="w-full grid grid-cols-[repeat(12,minmax(0,1fr))] gap-6 px-4 sm:px-8 md:px-6 lg:px-[200px] xl:px-[unset] xl:grid-cols-[repeat(12,72px)] xl:justify-center">
        <div className="col-start-1 col-end-[-1] md:col-start-2 md:col-end-[-2] lg:col-start-1 lg:col-end-[-1]">
          <div className="h-[75px] px-[10px] sm:px-[25px] xl:px-[50px] md:h-[100px] lg:h-[120px] xl:h-[150px] flex w-full items-center text-blue/60 transition-colors duration-500 text-[14px] sm:text-[20px] md:text-[24px] lg:text-[26px] text-left border-b border-blue/60">
            <span className="flex-1 grow">PROJECT</span>
            <span className="flex-1 grow">CATEGORY</span>
            <span className="shrink-0">YEAR</span>
          </div>
          <div className="relative group" ref={containerRef}>
            {projectsData.map(({ id, year, title, category }, index) => (
              <Link
                id={id}
                key={id}
                year={year}
                heading={title}
                category={category}
                href={`/project/${id}`}
                handleClick={handleClick}
                containerRef={containerRef}
                setHoveredItem={setHoveredItem}
                setCursorPosition={setCursorPosition}
              />
            ))}
            <AnimatePresence>
              {hoveredItem ? (
                <motion.div
                  className={`absolute pointer-events-none !overflow-hidden -translate-x-1/2 -translate-y-1/2`}
                  style={{
                    left: cursorPosition.x,
                    top: cursorPosition.y,
                    width: imageSize,
                    height: imageSize,
                  }}
                  variants={variant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div
                    className={cn(
                      "pointer-events-none transition-transform duration-500 h-full w-full"
                    )}
                    style={{
                      transform: `translateY(-${
                        parseInt(hoveredItem ?? "0") * imageSize
                      }px)`,
                    }}
                  >
                    {projectsData.map(
                      ({ id, title, imageUrlMobile }, index) => (
                        <Image
                          key={id}
                          src={imageUrlMobile}
                          alt={`Image representing a link for ${title}`}
                          className={`object-cover z-50 pointer-events-none w-full h-full`}
                          width={imageSize}
                          height={imageSize}
                        />
                      )
                    )}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
