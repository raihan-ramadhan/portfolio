import airnbn from "@/public/airbnb.png";
import airnbnMobile from "@/public/airbnb-mobile.png";
import notion from "@/public/notion.png";
import notionMobile from "@/public/notion-mobile.png";
import discord from "@/public/discord.png";
import discordMobile from "@/public/discord-mobile.png";
import messenger from "@/public/messenger.png";
import messengerMobile from "@/public/messenger-mobile.png";

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

type ProjectsData = Array<{
  title: string;
  features: Array<String>;
  tags: Array<SkillsData>;
  imageUrl: any;
  imageUrlMobile: any;
  url: string;
  repo: string;
}>;

export const projectsData: ProjectsData = [
  {
    title: "Discord Clone",
    features: [
      "1:1 conversation and video calls between members",
      "Delete & Edit messages in real time for all users",
      "Send attachments (image & pdf) as messages",
      "Infinite loading for messages with tanstack/query",
      "Unique invite link generation for invite into server",
      "Full responsivity in all screen and Light / Dark mode",
      "User authentication with Clerk, and database stored in Planetscale (MySQL).",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Clerk",
      "Uploadthing",
      "Socket.io",
      "Livekit",
      "PlanetScale (SQL)",
      "Tanstack Query",
      "Zustand",
    ],
    imageUrl: discord,
    imageUrlMobile: discordMobile,
    url: "https://discord-clone-alpha-two.vercel.app/",
    repo: "https://github.com/raihan-ramadhan/discord-clone",
  },
  {
    title: "Notion Clone",
    features: [
      "CRUD document and share documents",
      "Beautiful editor powered by Tiptap, with features like suggestion, paragraph, heading, todo-list, etc.",
      "Image signed uploads, update and delete with Cloudinary. When image get update or delete the the image will be overwrite and invalidate the CDN",
      "Full responsivity in all screen and Light / Dark mode (depend on system)",
      "User authentication with Clerk, and documents data stored in mongoDB atlas.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Clerk",
      "Cloudinary",
      "MongoDB (NO-SQL)",
      "Tanstack Query",
      "Zustand",
    ],
    imageUrl: notion,
    imageUrlMobile: notionMobile,
    url: "https://notion-clone-han.vercel.app/",
    repo: "https://github.com/raihan-ramadhan/notion-clone",
  },
  {
    title: "Airbnb Clone",
    features: [
      "Booking / Reservation system",
      "Guest reservation cancellation",
      "Owner reservation cancellation",
      "Creation and deletion of properties",
      "Full responsivity in all screen and beautiful design with tailwind and react components",
      "Google & Github authentication with Next-Auth, while all data users, properties and reservations is stored in mongoDB atlas",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Cloudinary",
      "MongoDB (NO-SQL)",
      "Zustand",
      "Next-Auth",
    ],
    imageUrl: airnbn,
    imageUrlMobile: airnbnMobile,
    url: "https://airbnb-clone-sand-psi.vercel.app/",
    repo: "https://github.com/raihan-ramadhan/airbnb-clone",
  },
  {
    title: "Messenger Clone",
    features: [
      "Full-stack web application Real-time messaging, utilized Pusher with feature like notif alert, online status, read receipt, etc.",
      "Group chats and 1:1 conversation",
      "Send attachments (image & file) as messages",
      "Client form validation and handling using react-hook-form",
      "Google & Github authentication with Next-Auth, while all data users, properties and reservations is handled by mongoDB atlas",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Cloudinary",
      "MongoDB (NO-SQL)",
      "Zustand",
      "Pusher",
      "Next-Auth",
    ],
    imageUrl: messenger,
    imageUrlMobile: messengerMobile,
    url: "https://messenger-clone-eight-virid.vercel.app/",
    repo: "https://github.com/raihan-ramadhan/messenger-clone",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB (NO-SQL)",
  "PlanetScale (SQL)",
  "Redux",
  "Zustand",
  "Tanstack Query",
  "Next-Auth",
  "Clerk",
  "Cloudinary",
  "Uploadthing",
  "Framer Motion",
  "Photoshop",
  "Illustrator",
  "Figma",
  "Nodemailer",
  "Socket.io",
  "Livekit",
  "Pusher",
] as const;

export type SkillsData = (typeof skillsData)[number];
