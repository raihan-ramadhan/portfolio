import airnbn from "@/public/airbnb.png";
import notion from "@/public/notion.png";
import portfolio from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Notion Clone",
    description:
      "the project based on www.notion.so with exactly same interface and functionality",
    tags: [
      "Next.js",
      "MongoDB",
      "Prisma",
      "Cloudinary",
      "tiptap",
      "clerk",
      "radix",
    ],
    imageUrl: notion,
    url: "https://notion-clone-han.vercel.app/",
  },
  {
    title: "Airbnb Clone",
    description:
      "the project based on www.airbnb.com with similar interface and functionality",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Cloudinary"],
    imageUrl: airnbn,
    url: "https://airbnb-clone-sand-psi.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description: "my personal portfolio",
    tags: [
      "React",
      "Next.js",
      "typescript",
      "Tailwind",
      "framer-motion",
      "nodemailer",
      "next-themes",
    ],
    imageUrl: portfolio,
    url: "https://raihan-ramadhan.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Chrome APIs",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PlanetScale",
  "Redux",
  "Zustand",
  "React Query",
  "Auth.js",
  "Clerk",
  "Cloudinary",
  "Framer Motion",
  "Photoshop",
  "Illustrator",
  "Figma",
  "nodemailer",
] as const;
