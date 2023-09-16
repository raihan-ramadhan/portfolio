"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="my-28 sm:my-40  max-w-[50rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        My journey into web development started as a hobby during my time at{" "}
        <span className="font-medium">
          Network Computer Engineering Vocational High School
        </span>{" "}
        . After graduation, I turned my{" "}
        <span className="underline">hobby into a serious pursuit</span> while
        working at a <span className="italic">supermarket</span>.
      </p>

      <p>
        My core stack includes{" "}
        <span className="font-medium">
          TypeScript, React, Next.js, Tailwind CSS, MongoDB, PlanetScale, and
          Prisma
        </span>
        . Drawing from my experience as a{" "}
        <span className="italic">Graphic Design Freelancer</span>, I am skilled
        in using design tools such as{" "}
        <span className="font-medium">
          Photoshop, Adobe Illustrator, and Figma
        </span>
        . I also have experience in{" "}
        <span className="font-medium">Chrome extensions</span>.
      </p>
    </motion.section>
  );
}
