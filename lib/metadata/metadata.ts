import type { Metadata } from "next";

export const myMetadata: Metadata = {
  title: "Raihan Ramadhan | Portfolio",
  description:
    "Raihan Ramadhan Portfolio | Full Stack Developer and Front-End Engineer | Expertise in Web Development | Front End Developer",
  authors: [
    { name: "Raihan Ramadhan", url: "https://raihan-ramadhan.vercel.app/" },
  ],
  keywords: [
    "Front End",
    "Frontend",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Software Engineer",
    "Pekanbaru",
    "Indonesia",
    "Web Development",
    "Tailwind CSS",
  ],
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
  openGraph: {
    title: "Raihan Ramadhan | Portfolio",
    description:
      "Explore the portfolio of Raihan Ramadhan, a skilled Front-End Developer and Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://raihan-ramadhan.vercel.app/",
    siteName: "Raihan Ramadhan Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dloh9unzh/image/upload/v1743110196/portfolio/metadata_image_l2hm1v.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Ramadhan | Portfolio",
    description:
      "Explore the portfolio of Raihan Ramadhan, a skilled Front-End Developer and Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: [
      "https://res.cloudinary.com/dloh9unzh/image/upload/v1743110196/portfolio/metadata_image_l2hm1v.png",
    ],
    creator: "@raihan_rn22",
  },
  metadataBase: new URL("https://raihan-ramadhan.vercel.app/"),
};
