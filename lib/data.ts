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
  id: string;
  year: string;
  title: string;
  features: Array<String>;
  tech: Array<SkillsData>;
  imageUrl: any;
  imageUrlMobile: any;
  url: string;
  repo: string;
  category: "Clone App" | "Landing Page" | "Design";
  carouselItems: Array<{ label: string; url: string }>;
}>;

export const projectsData: ProjectsData = [
  // {
  //   id: "0",
  //   year: "2023",
  //   title: "Discord Clone",
  //   features: [
  //     "1:1 conversation and video calls between members",
  //     "Delete & Edit messages in real time for all users",
  //     "Send attachments (image & pdf) as messages",
  //     "Infinite loading for messages with tanstack/query",
  //     "Unique invite link generation for invite into server",
  //     "Full responsivity in all screen and Light / Dark mode",
  //     "User authentication with Clerk, and database stored in Planetscale (MySQL).",
  //   ],
  //   tech: [
  //     "Next.js",
  //     "TypeScript",
  //     "Tailwind",
  //     "Prisma",
  //     "Clerk",
  //     "Uploadthing",
  //     "Socket.io",
  //     "Livekit",
  //     "PlanetScale (SQL)",
  //     "Tanstack Query",
  //     "Zustand",
  //   ],
  //   imageUrl: discord,
  //   imageUrlMobile: discordMobile,
  //   url: "https://discord-clone-alpha-two.vercel.app/",
  //   repo: "https://github.com/raihan-ramadhan/discord-clone",
  // },
  {
    id: "0",
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
    tech: [
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
    id: "1",
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
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Cloudinary",
      "MongoDB (NO-SQL)",
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
    id: "2",
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
    tech: [
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
export const developerSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySql",
  "Redux",
  "Zustand",
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
] as const;

export const designerSkills = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Wireframing",
  "Prototyping",
  "Social Media Post Design",
];

export type SkillsData = (typeof skillsData)[number];
export type DesignerSkills = typeof designerSkills;
export type DeveloperSkills = typeof developerSkills;

export const cvUrl =
  "https://drive.google.com/file/d/1RfhIGOfEU5IGx466CdsYGztb8Hs7ZGwP/view";
