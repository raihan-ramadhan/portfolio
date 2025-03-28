"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { Decoration } from "./Decoration";
import { developerSkillsAboutMe } from "../lib/data";

export default function About() {
  const { ref } = useSectionInView("About-me");

  return (
    <div className="min-h-[calc(100dvh_-_80px)] flex items-center relative overflow-hidden sm:min-h-[unset] xl:min-h-[calc(100vh_-_120px)] selection:bg-blue selection:text-black py-8">
      <section
        ref={ref}
        className="w-full flex flex-col justify-center items-center scroll-mt-28 gap-[15px] sm:gap-[25px] xl:gap-[50px] sm:pt-[100px] sm:pb-[150px] xl:pt-[unset] xl:pb-[unset] xl:min-h-[inherit]"
        id="about"
      >
        <SectionHeading>ABOUT ME</SectionHeading>
        <div className="w-full grid grid-cols-[repeat(12,minmax(0,1fr))] gap-6 px-4 sm:px-8 md:px-6 lg:px-[200px] xl:px-[unset] xl:grid-cols-[repeat(12,72px)] xl:justify-center">
          <div className="col-start-1 col-end-[-1] md:col-start-2 md:col-end-[-2] lg:col-start-1 lg:col-end-[-1]">
            <div className="w-full flex flex-col gap-[30px] text-justify text-[14px] font-normal leading-6 md:text-[15px] lg:text-base xl:text-[20px] 2xl:text-3xl">
              <p className="text-center">
                I'm a <strong className="font-bold">Fullstack Developer</strong>{" "}
                with a strong passion in{" "}
                <strong className="font-bold">UI/UX</strong>. I also have
                experience as a{" "}
                <strong className="font-bold">
                  Freelance Graphic Designer
                </strong>
                . My expertise lies in{" "}
                <strong className="font-normal underline">
                  Front-End development
                </strong>
                , and I also have basic proficiency in Back-End development.
              </p>

              <p className="inline-flex w-full flex-wrap gap-3 text-black font-medium text-sm justify-center">
                {developerSkillsAboutMe.map((item, i) => (
                  <span
                    key={i}
                    className="bg-cream/80 hover:bg-cream transition-[background-color] duration-300 px-2 py-0.5"
                  >
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute right-[15px] top-[10px] md:-right-[25px] md:-top-[35px] lg:-right-[50px] lg:-top-[50px] xl:-right-[100px] xl:-top-[100px] mask-0-80-45deg md:mask-0-60-45deg">
        <Decoration
          variant="asterisk"
          className="stroke-cream w-20 h-20 sm:w-[120px] sm:h-[120px] md:w-[260px] md:h-[260px] lg:w-[350px] lg:h-[350px] xl:w-[500px] xl:h-[500px] opacity-40"
        />
      </div>
    </div>
  );
}
