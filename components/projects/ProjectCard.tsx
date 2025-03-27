"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { cn } from "../../lib/utils";
import { useInView, motion } from "framer-motion";
import { Icons } from "../Icons";

const ProjectCard = ({
  id,
  imageUrl,
  title,
  className,
  isGrayScale = true,
}: {
  id: string;
  imageUrl: string;
  title: string;
  className?: string;
  isGrayScale?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  return (
    <div
      className={cn(
        "w-full relative ",
        className,
        id !== "0" && "mt-3 sm:mt-0"
      )}
    >
      <Link
        href={`/projects/${id}`}
        className={cn(
          "border-2 border-cream aspect-video group/link relative  rounded-[25px] sm:rounded-none inline-block w-full overflow-hidden"
        )}
      >
        <motion.div
          ref={ref}
          initial={{ filter: "grayscale(100%)" }}
          animate={{ filter: isInView ? "grayscale(0%)" : "grayscale(100%)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full p-2 rounded-[24px] sm:rounded-none overflow-hidden"
        >
          <Image
            key={id}
            src={imageUrl}
            alt={`Image representing a link for ${title}`}
            className={cn(
              `object-cover pointer-events-none w-full h-full p-2 rounded-[24px] sm:rounded-none overflow-hidden`
              // isGrayScale && !isInView
              //   ? "grayscale group-hover/link:grayscale-0 duration-300 transition-[filter]"
              //   : ""
            )}
            fill
          />
        </motion.div>
        <div className="absolute inset-x-0 -bottom-[16.66%] h-1/6 bg-black/40 backdrop-blur-sm justify-center items-center group-hover/link:bottom-0 transition-[bottom] text-sm duration-300 ease-out hidden sm:flex">
          Go to project
        </div>
        <div className="absolute inset-x-0 -top-[16.66%] h-1/6 bg-black/40 backdrop-blur-sm justify-center items-center group-hover/link:top-0 transition-[top] text-2xl duration-300 ease-out hidden sm:flex">
          {title}
        </div>
      </Link>
      <p className="text-sm justify-between w-full gap-5 flex sm:hidden px-3">
        <span>{title}</span>
        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center gap-1"
        >
          <span>Go to Project</span>{" "}
          <Icons.arrow className="w-3 h-3 fill-current" />
        </Link>
      </p>
    </div>
  );
};

export default ProjectCard;
