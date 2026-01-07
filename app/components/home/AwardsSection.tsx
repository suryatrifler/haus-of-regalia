"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const awards = [
  "/award-1.jpg",
  "/award-1.jpg",
  "/award-1.jpg",
  "/award-1.jpg",
  "/award-1.jpg",
  "/award-1.jpg",
];

export default function AwardsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-40 mb-40">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-[11px] tracking-[0.35em] uppercase mb-16"
      >
        Notable Awards
      </motion.h2>

      <div className="grid grid-cols-3 gap-16 place-items-center">
        {awards.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={src}
              alt="Award"
              width={120}
              height={120}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
