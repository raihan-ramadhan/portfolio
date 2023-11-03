"use client";
import {
  DesignerSkills,
  DeveloperSkills,
  designerSkills,
  developerSkills,
} from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Variants, motion } from "framer-motion";

type SkillItemProps = {
  title: string;
  arraySkill: DesignerSkills | DeveloperSkills;
  src: string;
  hoveredDiv: "right" | "left" | null;
  onMouseOver: (div: "left" | "right") => void;
  div: "left" | "right";
};

const variants: Variants = {
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.25 } },
  hidden: {
    opacity: 0,
    display: "none",
  },
};

const SkillBox = ({
  title,
  arraySkill,
  src,
  hoveredDiv,
  onMouseOver,
  div,
}: SkillItemProps) => {
  return (
    <div
      className={cn(
        "hidden md:block col-span-5 bg-blue-foreground rounded-[25px] relative overflow-hidden shadow-[0_8px_20px_0_rgba(0,0,0,0.35)] h-full w-[270px] transition-[width] duration-300 lg:w-[350px] xl:w-[450px] xl:rounded-[50px]",
        !!hoveredDiv &&
          hoveredDiv !== div &&
          "w-[50px] lg:w-[50px] xl:w-[100px]",
        !!hoveredDiv &&
          hoveredDiv === div &&
          "w-[490px] lg:w-[650px] xl:w-[800px]"
      )}
      onMouseOver={() => onMouseOver(div)}
    >
      <motion.div
        animate={!!hoveredDiv && hoveredDiv == div ? "hidden" : "show"}
        variants={{
          show: { opacity: 1, transition: { duration: 0.2 } },
          hidden: {
            opacity: 0,
            transition: { duration: 0.2 },
          },
        }}
      >
        <Image
          alt={title}
          src={src}
          fill
          quality={95}
          // im not sure about this size option
          sizes="(min-width: 905px) 270px, (min-width: 1240px) 350px, (min-width: 1440px) 450px"
          className="object-cover z-10 select-none pointer-events-none"
        />
      </motion.div>
      <div className="w-full h-full px-[30px] lg:px-[60px] xl:px-[90px] md flex flex-col gap-[15px] justify-center items-center">
        <motion.p
          animate={!!hoveredDiv && hoveredDiv == div ? "show" : "hidden"}
          variants={variants}
          className="text-cream tracking-widest text-[16px] lg:text-[20px] xl:text-[23px] underline selection:bg-cream selection:text-black font-heading"
        >
          {title}
        </motion.p>
        <motion.p
          animate={!!hoveredDiv && hoveredDiv == div ? "show" : "hidden"}
          variants={variants}
          className="text-cream w-full text-[13px] lg:text-[16px] xl:text-[20px] break-words selection:bg-cream selection:text-black"
        >
          {arraySkill.map((skill, index) => (
            <span key={index}>
              {skill}
              {index !== arraySkill.length - 1 && " / "}
            </span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

const SkillsList: React.FC = () => {
  const containerRef = useRef(null);

  const [hoveredDiv, setHoveredDiv] = useState<"right" | "left" | null>(null);

  const onMouseOver = (div: "left" | "right") => {
    setHoveredDiv(div);
  };

  const onMouseLeave = () => {
    setHoveredDiv(null);
  };

  // This is event for tap touch screen, so when user tap outside of wrapper skill box (containerRef) then onMouseLeave will be excuted
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        // @ts-ignore
        !containerRef.current.contains(event.target as Node)
      ) {
        onMouseLeave();
      }
    };
    // Add event listeners when component mounts
    window.addEventListener("mousedown", handleClickOutside);

    // Remove event listeners when component unmounts
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div className="w-full px-6 grid-cols-[repeat(12,minmax(0,1fr))] gap-6 lg:px-[200px] xl:px-[unset] xl:grid-cols-[repeat(12,72px)] xl:justify-center hidden md:grid">
      <div className="w-full flex justify-center col-start-3 col-end-[-3] lg:col-start-2 lg:col-end-[-2] h-[270px] lg:h-[350px] xl:h-[450px]">
        <div
          className="flex justify-center gap-6"
          onMouseLeave={onMouseLeave}
          ref={containerRef}
        >
          <SkillBox
            div="left"
            onMouseOver={onMouseOver}
            src="/developer.png"
            title="Fullstack Developer"
            hoveredDiv={hoveredDiv}
            arraySkill={developerSkills}
          />

          <SkillBox
            div="right"
            onMouseOver={onMouseOver}
            src="/designer.png"
            title="UI/UX & Graphic Designer"
            hoveredDiv={hoveredDiv}
            arraySkill={designerSkills}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
