"use client";

import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import { Decoration } from "./Decoration";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import ProjectCard from "./projects/ProjectCard";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="text-center py-8 flex flex-col w-full gap-[15px] sm:gap-[25px] xl:gap-[50px] relative"
    >
      <Decoration
        variant="reverseItalicEllipse"
        className="stroke-cream absolute -left-[100px] -top-[100px] w-[220px] h-[280px] md:w-[350px] md:h-[450px] xl:w-[450px] xl:h-[550px] opacity-40 -mask-0-50-45deg"
      />
      <SectionHeading>PROJECTS</SectionHeading>
      <div className="w-full grid grid-cols-[repeat(12,minmax(0,1fr))] gap-x-6 gap-y-2 px-4 sm:px-10 md:px-20 lg:px-[200px] xl:px-[unset] xl:grid-cols-[repeat(12,72px)] xl:justify-center">
        <div className="col-start-1 col-end-[-1] md:col-start-2 md:col-end-[-2] lg:col-start-1 lg:col-end-[-1] ">
          <div className="relative group grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projectsData.slice(0, 4).map(({ id, title, imageUrl }) => (
              <ProjectCard key={id} id={id} imageUrl={imageUrl} title={title} />
            ))}
          </div>
        </div>
      </div>
      <Link
        href={"/projects"}
        className="text-blue text-md text-center col-start-1 col-end-[-1] sm:text-2xl mt-2 mb-2 underline"
      >
        View More Projects
      </Link>
    </section>
  );
}
