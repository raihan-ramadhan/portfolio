"use client";

import { cn } from "@/lib/utils";
import { HTMLProps, InputHTMLAttributes, createElement } from "react";
import { Variants, motion } from "framer-motion";

const Decorations = {
  andromeda: ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      className={cn("select-none", className)}
      viewBox="0 0 710 710"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M498.435 279.894C596.734 468.648 612.209 655.29 532.991 696.771C453.777 738.249 309.868 618.861 211.567 430.105C113.265 241.351 97.7936 54.7089 177.01 13.2292C256.226 -28.2504 400.132 91.1398 498.435 279.894Z"
        stroke="inherit"
        vectorEffect="non-scaling-stroke"
        strokeWidth={0.5}
      />
      <path
        d="M428.942 499.32C240.046 596.629 53.8113 610.893 12.9745 531.187C-27.8625 451.481 92.1623 307.983 281.058 210.678C469.955 113.372 656.19 99.1057 697.026 178.812C737.862 258.519 617.836 402.015 428.942 499.32Z"
        stroke="inherit"
        strokeWidth={0.5}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  ),
  asterisk: ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      className={cn("select-none", className)}
      viewBox="0 0 313 313"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <line
          x1="157.15"
          y1="0.308716"
          x2="157.15"
          y2="313.008"
          strokeWidth={0.5}
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="313"
          y1="157.159"
          x2="0.300232"
          y2="157.159"
          stroke="inherit"
          strokeWidth={0.5}
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="266.853"
          y1="267.568"
          x2="45.7404"
          y2="46.456"
          stroke="inherit"
          strokeWidth={0.5}
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="45.7407"
          y1="266.861"
          x2="266.853"
          y2="45.7489"
          stroke="inherit"
          strokeWidth={0.5}
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="12.0103"
          y1="216.029"
          x2="300.907"
          y2="96.364"
          stroke="inherit"
          strokeWidth={0.5}
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="12.393"
          y1="96.3641"
          x2="301.29"
          y2="216.029"
          stroke="inherit"
          strokeWidth={0.5}
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="97.2798"
          y1="12.0189"
          x2="216.945"
          y2="300.916"
          stroke="inherit"
          strokeWidth={0.5}
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="216.945"
          y1="12.4015"
          x2="97.2798"
          y2="301.298"
          stroke="inherit"
          strokeWidth={0.5}
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  ),
  reverseItalicEllipse: ({
    className,
    ...props
  }: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      className={cn("select-none", className)}
      viewBox="0 0 323 372"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M293.389 116.033C318.658 163.493 326.742 214.287 319.405 258.033C312.069 301.779 289.321 338.45 252.945 357.748C216.569 377.046 173.392 375.349 132.963 356.942C92.5336 338.535 54.8806 303.428 29.6113 255.967C4.34204 208.507 -3.74195 157.713 3.5946 113.967C10.931 70.2208 33.6789 33.5496 70.055 14.2517C106.431 -5.04623 149.608 -3.3487 190.037 15.0578C230.466 33.4646 268.119 68.5724 293.389 116.033Z"
        stroke="inherit"
        strokeWidth={0.5}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  ),
};

type DecorationVariant = keyof typeof Decorations;

export const Decoration = ({
  variant,
  ...rest
}: React.SVGProps<SVGSVGElement> & { variant: DecorationVariant }) => {
  return createElement(Decorations[variant], { ...rest });
};

type MotionDecorationprops = {
  motionVariants: Variants;
  variant: DecorationVariant;
  motionStyles: string;
  decorStyles: string;
};

export const MotionDecoration: React.FC<MotionDecorationprops> = ({
  motionVariants,
  variant,
  motionStyles,
  decorStyles,
}) => {
  return (
    <motion.div
      variants={motionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={motionStyles}
    >
      <Decoration variant={variant} className={decorStyles} />
    </motion.div>
  );
};
