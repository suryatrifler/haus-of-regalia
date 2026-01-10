"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ContactMap() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-32">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[11.5px] uppercase tracking-[0.32em] mb-10"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="w-full h-[420px]"
      >
        <iframe
          title="ARK Architecture Studio Location"
          src="https://www.google.com/maps?q=Jawahar%20Nagar%20Kowdiar%20Trivandrum&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  );
}
