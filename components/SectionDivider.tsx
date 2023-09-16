"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="transition-colors-smooth bg-gray-500 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20 absolute bottom-0"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "50%" }}
      transition={{ delay: 0.125 }}
    />
  );
}
