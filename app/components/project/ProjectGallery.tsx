"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function ProjectGallery({
  images,
}: {
  images: string[];
}) {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mb-40 grid grid-cols-2 gap-16">
      {images.map((src, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={src}
            alt=""
            width={600}
            height={800}
            className="w-full h-auto"
          />
        </motion.div>
      ))}
    </section>
  );
}
