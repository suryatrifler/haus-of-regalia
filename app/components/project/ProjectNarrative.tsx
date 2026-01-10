"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function ProjectNarrative({ text }: { text: string }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-[800px] mx-auto px-24 mb-32"
    >
      <p className="text-sm leading-8 text-neutral-700">
        {text}
      </p>
    </motion.section>
  );
}
