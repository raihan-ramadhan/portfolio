import { cn } from "@/lib/utils";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-[32px] font-heading font-bold sm:text-[38px] md:text-[54px] lg:text-[62px] xl:text-[72px] m-0",
        className
      )}
    >
      {children}
    </h2>
  );
}
