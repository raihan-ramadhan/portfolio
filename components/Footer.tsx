import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center transition-colors-smooth text-gray-600 dark:text-gray-300">
      <small className="mb-2 block text-xs">
        &copy; 2030 Raihan. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Nodemailer, Vercel hosting.
      </p>
    </footer>
  );
}
