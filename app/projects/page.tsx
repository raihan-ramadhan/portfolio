import React from "react";
import ProjectCard from "../../components/projects/ProjectCard";
import { projectsData } from "../../lib/data";
import Header from "../../components/projects/Header";
import { Metadata } from "next";
import { projectsMetadata } from "../../lib/metadata/porjectsMetadata";

export const metadata: Metadata = projectsMetadata;

const page = () => {
  return (
    <div className="flex-1 text-cream selection:text-black selection:bg-cream relative overflow-hidden">
      <Header title="All Projects" />
      <div className="w-full grid grid-cols-[repeat(12,minmax(0,1fr))] gap-6 px-4 sm:px-8 md:px-6 lg:px-[200px] xl:px-[unset] xl:grid-cols-[repeat(12,72px)] xl:justify-center mt-10 mb-20">
        <div className="col-start-1 col-end-[-1] md:col-start-2 md:col-end-[-2] lg:col-start-1 lg:col-end-[-1] ">
          <div className="relative group grid grid-cols-2 gap-y-10 sm:gap-5 md:gap-10">
            {projectsData.map(({ id, title, imageUrl }, index) => (
              <ProjectCard
                key={id}
                isGrayScale={false}
                id={id}
                imageUrl={imageUrl}
                title={title}
                className={`col-span-2 sm:col-span-1 ${
                  index === projectsData.length - 1 &&
                  projectsData.length % 2 !== 0
                    ? "!col-span-2"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
