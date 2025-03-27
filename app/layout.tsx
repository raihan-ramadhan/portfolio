import ActiveSectionContextProvider from "@/context/active-section-context";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import { Viewport } from "next";
import AnimatedCursor from "../components/AnimatedCursor";
import Footer from "@/components/Footer";
import { myMetadata } from "../lib/metadata/metadata";
import type { Metadata } from "next";
import { Space_Mono, Unbounded } from "next/font/google";
import "./globals.css";

const SpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--space-mono",
  display: "swap",
});

const UnboundedFont = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--unbounded",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#171717",
};

export const metadata: Metadata = myMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${SpaceMono.variable} ${UnboundedFont.variable} m-0 p-0`}
    >
      <body className="relative font-default text-blue bg-black max-w-8xl mx-auto">
        <Providers>
          <ActiveSectionContextProvider>
            <AnimatedCursor />
            {children}
            <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
          </ActiveSectionContextProvider>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
