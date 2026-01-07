"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutImageBlock() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-40 mb-40">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src="/about-2.jpg"
          alt="Studio Work"
          width={1200}
          height={700}
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
