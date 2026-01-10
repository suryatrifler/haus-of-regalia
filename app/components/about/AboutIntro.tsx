"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutIntro() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-32 grid grid-cols-2 gap-24">
      {/* IMAGE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src="/about-1.jpg"
          alt="ARK Architecture Studio"
          width={600}
          height={750}
          className="object-cover"
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-3xl mb-8 leading-tight">
          Architecture rooted in context,
          <br />
          culture, and human experience.
        </h1>

        <p className="text-sm leading-7 text-[#835C57]-700">
          ARK Architecture Studio is an architectural and interior
          design practice based in Trivandrum and Bangalore.
          Founded in 2018, the studio explores spatial narratives
          that emerge from climate, material, and everyday life.
        </p>
      </motion.div>
    </section>
  );
}
