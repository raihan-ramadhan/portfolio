"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { GithubIcon, ArrowUpRightSquare } from "lucide-react";

type ProjectProps = (typeof projectsData)[number] & {
  order: string;
};

export default function Project({
  title,
  tags,
  imageUrl,
  url,
  repo,
  features,
  imageUrlMobile,
  order,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.6 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group"
    >
      <section className="bg-gray-100 max-w-[60rem] border border-black/5 rounded-lg overflow-hidden relative sm:min-h-[22rem] lg:min-h-[28rem] hover:bg-gray-200 transition-[background] dark:text-white dark:bg-white/10 dark:hover:bg-white/20 h-full px-5 sm:px-10 py-5 sm:py-8 flex flex-col">
        <div className="z-10 sm:max-w-[calc(100%)] lg:max-w-[calc(100%_-_400px)] flex-1 flex flex-col lg:group-even:ml-[400px]">
          <div className="relative h-[200px] w-full mb-5 rounded-t-md overflow-hidden sm:hidden pointer-events-none drop-shadow-sm">
            <Image
              fill
              src={imageUrlMobile}
              alt={title}
              className="object-cover object-left-top select-none pointer-events-none"
              quality={50}
            />
          </div>

          <div className="flex flex-col sm:flex-row w-full items-center gap-2 sm:gap-3 shrink-0">
            <h3 className="text-2xl font-bold drop-shadow-lg">{title}</h3>
            <div className="flex gap-1">
              <a
                href={repo}
                target="_blank"
                className="bg-white px-3 py-0.5 text-[0.8rem] tracking-wider text-black rounded-full flex items-center cursor-pointer gap-1 font-semibold hover:bg-gray-300 transition-colors drop-shadow-md focus:outline-none focus:ring-1 ring-white ring-offset-2 ring-offset-gray-950"
              >
                <span>Repo</span>
                <GithubIcon size={13} />
              </a>
              <a
                href={url}
                target="_blank"
                className="bg-white px-3 py-0.5 text-[0.8rem] tracking-wider text-black rounded-full flex items-center cursor-pointer gap-1 font-semibold hover:bg-gray-300 transition-colors drop-shadow-md focus:outline-none focus:ring-1 ring-white ring-offset-2 ring-offset-gray-950"
              >
                <span>Open </span>
                <ArrowUpRightSquare size={14} />
              </a>
            </div>
          </div>

          <div className="py-5 h-full flex-1">
            <span className="text-xl"># Main Features : </span>
            <ul className="list-disc list-outside ml-5">
              {features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black px-2 py-1 text-[0.55rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={url}
          target="_blank"
          tabIndex={-1}
          className={`z-0 absolute hidden sm:block -right-4 lg:-right-8 w-[350px] lg:w-[400px] rounded-t-md overflow-hidden group-hover:shadow-2xl transition blur-sm lg:blur-none opacity-20 lg:opacity-100 focus:outline-none pointer-events-none lg:pointer-events-auto
                      group-hover:scale-[1.04]
                      group-hover:-translate-x-3
                      group-hover:translate-y-3
                      group-hover:-rotate-3
                     
                      lg:group-even:group-hover:translate-x-3
                      lg:group-even:group-hover:translate-y-3
                      lg:group-even:group-hover:rotate-3
                     
                      lg:group-even:right-[initial] lg:group-even:-left-8`}
        >
          <Image src={imageUrl} alt={title} quality={95} />
        </Link>
      </section>
      <div className="my-4 sm:my-14 group-last:mb-0 block text-center pointer-events-none">
        <span className="text-gray-700 dark:text-gray-300 text-sm">
          {order}
        </span>
      </div>
    </motion.div>
  );
}
