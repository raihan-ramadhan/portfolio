"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { Decoration } from "./Decoration";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      ref={ref}
      id="projects"
      className="relative text-center space-y-[15px] pt-[100px] pb-[100px] md:pt-[60px] md:pb-[90px] lg:pt-[80px] lg:pb-[120px] sm:space-y-[25px] xl:space-y-[50px] selection:text-black selection:bg-blue overflow-hidden scroll-mt-[100px]"
    >
      <SectionHeading>PROJECTs</SectionHeading>
      <div className="w-full grid grid-cols-[repeat(12,minmax(0,1fr))] gap-6 px-4 sm:px-8 md:px-6 lg:px-[200px] xl:px-[unset] xl:grid-cols-[repeat(12,72px)] xl:justify-center">
        <div className="col-start-1 col-end-[-1] md:col-start-2 md:col-end-[-2] lg:col-start-1 lg:col-end-[-1]">
          <div className="flex flex-col w-full">
            {projectsData.map(({ id, year, title }) => (
              <Link
                href={`/project/${id}`}
                key={id}
                className="flex h-[75px] border-y hover:z-10 relative border-blue-secondary text-blue-secondary hover:border-blue hover:text-blue transition-colors duration-300 w-full items-center justify-between px-[10px] sm:px-[25px] xl:px-[75px] md:h-[100px] lg:h-[120px] xl:h-[150px] -mt-[1px]"
              >
                <span className="text-[20px] md:text-[36px] lg:text-[42px] font-heading">
                  {title}
                </span>
                <span className="text-[14px] md:text-[20px] xl:text-[32px]">
                  {year}
                </span>
              </Link>
            ))}
            <Link
              href={`/project`}
              className="flex h-[75px] hover:z-10 relative border-y border-blue-secondary text-blue-secondary hover:border-blue hover:text-blue transition-all duration-300 w-full items-center px-[10px] group md:h-[100px] sm:px-[25px] xl:px-[75px] lg:h-[120px] xl:h-[150px] -mt-[1px]"
            >
              <span className="text-[16px] group-hover:text-[20px] transition-[font-size] duration-300 font-heading md:text-[28px] md:group-hover:text-[36px] lg:text-[32px] lg:group-hover:text-[42px]">
                View All
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Decoration.reverseItalicEllipse className="stroke-cream absolute -left-[100px] -top-[100px] w-[220px] h-[280px] md:w-[350px] md:h-[450px] xl:w-[450px] xl:h-[550px] opacity-40 -mask-0-50-45deg" />
    </section>
  );
}
