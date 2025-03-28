export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About-me",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type ProjectsData = Array<{
  id: string;
  year: string;
  title: string;
  features: Array<String>;
  imageMetadata: string;
  tech: Array<DeveloperSkill>;
  imageUrl: any;
  imageUrlMobile: any;
  url: string;
  repo: string;
  category: "Clone App" | "Landing Page" | "Design" | "Web App";
  carouselItems: Array<{ label: string; url: string }>;
}>;

export const projectsData: ProjectsData = [
  {
    id: "0",
    year: "2025",
    title: "Breakpoints",
    category: "Web App",
    features: [
      " Multi-screen breakpoint support",
      "Zoom in/out functionality",
      "Customizable screen setup",
      "Orientation toggle",
    ],
    imageMetadata:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1743111137/portfolio/breakpoints_metadata_byvvzk.png",
    tech: ["React (Vite)", "Typescript", "Shadcn", "Tailwind"],
    imageUrl:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1743066235/portfolio/breakpoints-one.vercel.app__hpeeag.png",
    imageUrlMobile:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1743034528/portfolio/breakpoints-one.vercel.app__1_ru0uk7.png",
    url: "https://breakpoints-one.vercel.app",
    repo: "https://github.com/raihan-ramadhan/breakpoints",
    carouselItems: [
      {
        label: "Beautiful UI with Shadcn",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1743066235/portfolio/breakpoints-one.vercel.app__hpeeag.png",
      },
      {
        label: "Full Responsive",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1743066035/portfolio/responsive_size_ayhbxr.jpg",
      },
      {
        label: "Dark Mode",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1743066346/portfolio/asasa_ssrfkn.png",
      },
    ],
  },
  {
    id: "1",
    year: "2023",
    title: "DashboardX",
    category: "Web App",
    features: [
      "Great ui and ux with Material UI component and icon",
      "Full responsivity and mobile UI",
      "State management with redux toolkit and query request with RTK query",
      "ODM using Mongoose for backend and MVC pattern with express as main framework for backend",
    ],
    imageMetadata:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1743111214/portfolio/dashboardx_metadata_ecchfb.png",
    tech: [
      "React (Vite)",
      "Typescript",
      "Nivo Chart",
      "Material UI",
      "Redux Toolkit",
      "RTK Query",
      "Javascript",
      "Node.js",
      "Express Js",
      "Mongoose",
      "Atlas (Mongodb)",
    ],
    imageUrl:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1702708092/portfolio/dashboard-banner.jpg",
    imageUrlMobile:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1702707444/portfolio/dashboardx-mobile-banner.jpg",
    url: "https://admin-dahsboard-ecommerce.vercel.app",
    repo: "https://github.com/raihan-ramadhan/admin-dahsboard-ecommerce",
    carouselItems: [
      {
        label: "Beautiful UI with MUI",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1702724731/portfolio/dashboardx-1.jpg",
      },
      {
        label: "Full Responsive",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1702724732/portfolio/dashboardx-2.jpg",
      },
      {
        label: "Dark Mode",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1702724731/portfolio/dashboardx-3.jpg",
      },
    ],
  },
  {
    id: "2",
    year: "2023",
    title: "Discord Clone",
    category: "Clone App",
    features: [
      "1:1 conversation and video calls between members",
      "Delete & Edit messages in real time for all users",
      "Send attachments (image & pdf) as messages",
      "Infinite loading for messages with tanstack/query",
      "Unique invite link generation for invite into server",
      "Full responsivity in all screen and Light / Dark mode",
      "User authentication with Clerk, and database stored in Planetscale (MySQL).",
    ],
    imageMetadata:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1702708091/portfolio/discord-banner.jpg",
    tech: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Prisma",
      "Clerk",
      "Uploadthing",
      "Socket.io",
      "Livekit",
      "PlanetScale (MySQL)",
      "React Query",
      "Zustand",
    ],
    imageUrl:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1702708091/portfolio/discord-banner.jpg",
    imageUrlMobile:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1702707256/portfolio/discord-mobile-banner.jpg",
    url: "https://discord-clone-alpha-two.vercel.app",
    repo: "https://github.com/raihan-ramadhan/discord-clone",
    carouselItems: [
      {
        label: "Realtime Chat with Socket.io",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1702727714/portfolio/discord-1.jpg",
      },
      {
        label: "Send attachments as messages using UploadThing",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1702727714/portfolio/discord-2.jpg",
      },
      {
        label: "1:1 chat and video call between user",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1702727715/portfolio/discord-3.jpg",
      },
      {
        label: "Member management for admin and moderator",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1702727714/portfolio/discord-4.jpg",
      },
      {
        label: "White Mode",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1702727847/portfolio/discord-5.jpg",
      },
    ],
  },
  {
    id: "3",
    year: "2023",
    title: "Notion Clone",
    category: "Clone App",
    features: [
      "CRUD document and share documents",
      "Beautiful editor powered by Tiptap, with features like suggestion, paragraph, heading, todo-list, etc.",
      "Image signed uploads, update and delete with Cloudinary. When image get update or delete the the image will be overwrite and invalidate the CDN",
      "Full responsivity in all screen and Light / Dark mode (depend on system)",
      "User authentication with Clerk, and documents data stored in mongoDB atlas.",
    ],
    imageMetadata:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1743111386/portfolio/notion_metadata_tqpwty.png",
    tech: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Prisma",
      "Clerk",
      "Cloudinary",
      "Atlas (Mongodb)",
      "React Query",
      "Zustand",
    ],
    imageUrl:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835254/portfolio/notion-banner.jpg",
    imageUrlMobile:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835255/portfolio/notion-mobile-banner.jpg",
    url: "https://notion-clone-han.vercel.app",
    repo: "https://github.com/raihan-ramadhan/notion-clone",
    carouselItems: [
      {
        label: "Rich Text Editor (WYSIWYG) by tiptap",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835250/portfolio/notion-1.jpg",
      },
      {
        label: "Full Responsive",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835255/portfolio/notion-2.jpg",
      },
      {
        label: "Beautiful UI",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835253/portfolio/notion-3.jpg",
      },
      {
        label: "Dark Mode",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835254/portfolio/notion-4.jpg",
      },
    ],
  },
  {
    id: "4",
    year: "2023",
    title: "Airbnb Clone",
    category: "Clone App",
    features: [
      "Booking / Reservation system",
      "Guest reservation cancellation",
      "Owner reservation cancellation",
      "Creation and deletion of properties",
      "Full responsivity in all screen and beautiful design with tailwind and react components",
      "Google & Github authentication with Next-Auth, while all data users, properties and reservations is stored in mongoDB atlas",
    ],
    imageMetadata:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1743111440/portfolio/airbnb_metadata_iexn9p.png",
    tech: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Prisma",
      "Cloudinary",
      "Atlas (Mongodb)",
      "Zustand",
      "Next-Auth",
    ],
    imageUrl:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835251/portfolio/airbnb-banner.jpg",
    imageUrlMobile:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835246/portfolio/airbnb-mobile-banner.jpg",
    url: "https://airbnb-clone-han.vercel.app",
    repo: "https://github.com/raihan-ramadhan/airbnb-clone",
    carouselItems: [
      {
        label: "Full Responsive",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835250/portfolio/airbnb-1.jpg",
      },
      {
        label: "Beautiful Components",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835247/portfolio/airbnb-2.jpg",
      },
      {
        label: "Beautiful Components",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835246/portfolio/airbnb-3.jpg",
      },
    ],
  },
  {
    id: "5",
    year: "2023",
    title: "Messenger Clone",
    category: "Clone App",
    features: [
      "Full-stack web application Real-time messaging, utilized Pusher with feature like notif alert, online status, read receipt, etc.",
      "Group chats and 1:1 conversation",
      "Send attachments (image & file) as messages",
      "Client form validation and handling using react-hook-form",
      "Google & Github authentication with Next-Auth, while all data users, properties and reservations is handled by mongoDB atlas",
    ],
    imageMetadata:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835248/portfolio/messenger-banner.jpg",
    tech: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Prisma",
      "Cloudinary",
      "Atlas (Mongodb)",
      "Zustand",
      "Pusher",
      "Next-Auth",
    ],
    imageUrl:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835248/portfolio/messenger-banner.jpg",
    imageUrlMobile:
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835248/portfolio/messenger-mobile-banner.jpg",
    url: "https://messenger-clone-han.vercel.app",
    repo: "https://github.com/raihan-ramadhan/messenger-clone",
    carouselItems: [
      {
        label: "Realtime Chat with Pusher",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835246/portfolio/messenger-1.jpg",
      },
      {
        label: "Group and Personal Chat",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835248/portfolio/messenger-2.jpg",
      },
      {
        label: "Full Responsive",
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1700835250/portfolio/messenger-3.jpg",
      },
    ],
  },
];

export const developerSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React (Vite)",
  "Next.js",
  "Node.js",
  "Express Js",
  "Git",
  "Tailwind",
  "Material UI",
  "Nivo Chart",
  "Prisma",
  "Mongoose",
  "Atlas (Mongodb)",
  "PlanetScale (MySQL)",
  "Redux Toolkit",
  "Zustand",
  "RTK Query",
  "React Query",
  "Next-Auth",
  "Clerk",
  "Cloudinary",
  "Uploadthing",
  "Framer Motion",
  "Nodemailer",
  "Socket.io",
  "Livekit",
  "Pusher",
  "Shadcn",
  "Supabase",
  "Authentication",
  "Figma",
  "Adobe Photoshop",
] as const;

export const developerSkillsAboutMe: Array<DeveloperSkill> = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React (Vite)",
  "Next.js",
  "Tailwind",
  "Shadcn",
  "Material UI",
  "Zustand",
  "Redux Toolkit",
  "Atlas (Mongodb)",
  "Supabase",
  "Authentication",
  "Figma",
  "Adobe Photoshop",
];

export type DeveloperSkills = typeof developerSkills;
export type DeveloperSkill = (typeof developerSkills)[number];
