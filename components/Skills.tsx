"use client";

import { useSectionInView } from "@/lib/hooks";
import { Decoration } from "./Decoration";
import SectionHeading from "./SectionHeading";
import SkillsListMobile from "./SkillsListMobile";
import SkillsList from "./SkillsList";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="scroll-mt-10 sm:scroll-mt-5 ">
      <div className="overflow-hidden flex flex-col w-full h-full gap-[15px] sm:gap-[25px] relative text-center pt-[50px] pb-[75px] px-4 selection:bg-blue selection:text-black sm:pt-[100px] sm:pb-[150px] sm:px-8 md:pt-[60px] md:pb-[90px] lg:pt-[80px] lg:pb-[120px] xl:pt-[120px] xl:pb-[160px] md:px-0">
        <Decoration.andromeda className="absolute top-0 -right-6 w-[120px] h-[120px] stroke-cream mask-0-70-45deg opacity-40 sm:h-[150px] sm:w-[150px] sm:top-[15px] sm:right-0 md:w-[450px] md:h-[450px] md:-right-[50px] md:-top-[100px] lg:h-[700px] lg:w-[700px] lg:-top-[200] lg:-right-[120px] z-0" />
        <SectionHeading>SKILLS</SectionHeading>

        {/* Skills on tablet - dekstop */}
        <SkillsList />

        {/* Skills on mobile */}
        <SkillsListMobile />
      </div>
    </section>
  );
}
