"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function ProjectCover({ src }: { src: string }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="w-full mb-32"
    >
      <Image
        src={src}
        alt=""
        width={2000}
        height={1200}
        className="w-full h-auto object-cover"
      />
    </motion.section>
  );
}
