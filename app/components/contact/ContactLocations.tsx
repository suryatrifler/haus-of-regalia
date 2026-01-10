"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ContactLocations() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-28">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[11px] uppercase tracking-[0.35em] mb-12"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        Get in Touch
      </motion.h2>

      <div className="space-y-10 text-[14px] leading-[1.7]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <strong>Trivandrum</strong>
          <br />
          23/2719, Jawahar Nagar,
          <br />
          Kowdiar PO, Trivandrum – 695003
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <strong>Bangalore</strong>
          <br />
          Studio address details
          <br />
          Bangalore – India
        </motion.p>
      </div>
    </section>
  );
}
