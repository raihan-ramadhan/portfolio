import ActiveSectionContextProvider from "@/context/active-section-context";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import "./globals.css";
import { Viewport } from "next";

import { Space_Mono, Unbounded } from "next/font/google";

const SpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--space-mono",
});

const UnboundedFont = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--unbounded",
});

export const viewport: Viewport = {
  themeColor: "#171717",
};

export const metadata: Metadata = {
  title: "Raihan Ramadhan | Portfolio",
  description:
    "Raihan Ramadhan Portfolio | Full Stack Developer and Front-End Engineer | Expertise in Web Development",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${SpaceMono.variable} ${UnboundedFont.variable} !scroll-smooth m-0 p-0`}
    >
      <body className="relative font-default text-blue bg-black">
        <Providers>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
          </ActiveSectionContextProvider>
        </Providers>
      </body>
    </html>
  );
}
