"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Guntoju Revant
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-white text-center px-4 text-1xl md:text-1xl"
      >
        Baabu lake baabu | Raju lake raju | Maharaju | Maa revant anna
      </motion.p>
    </LampContainer>
  );
} 