"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/* ✅ FIX: explicitly typed as Variants */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1] as const, // ✅ FIX
    },
  },
};

export default function AboutPreview() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-40 grid grid-cols-2 gap-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-[11px] tracking-[0.35em] uppercase mb-10">
          About
        </h2>

        <p className="text-sm text-neutral-700 leading-7 mb-8">
          ARK Architecture Studio is an architectural and interior
          design firm based in Trivandrum and Bangalore, founded in
          2018. ARK Architects are making waves in design through
          meaningful spaces and experiences.
        </p>

        <Link
          href="/about"
          className="inline-block border px-6 py-2 text-[11px] tracking-[0.2em] uppercase hover:bg-black hover:text-white transition"
        >
          Know more
        </Link>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src="/about-preview.jpg"
          alt="About ARK"
          width={500}
          height={650}
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
