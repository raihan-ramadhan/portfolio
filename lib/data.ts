import airnbn from "@/public/airbnb.png";

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
    title: "Airbnb Clone",
    description:
      "the project based on www.airbnb.com with similar interface and functionality",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Cloudinary"],
    imageUrl: airnbn,
    url: "https://airbnb-clone-sand-psi.vercel.app/",
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
  "Uploadthing",
  "Cloudinary",
  "Framer Motion",
  "Photoshop",
  "Illustrator",
  "Figma",
] as const;
