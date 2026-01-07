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

export default function AboutText() {
  return (
    <section className="max-w-[900px] mx-auto px-24 mt-40">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-sm leading-8 text-neutral-700"
      >
        The practice believes that architecture must emerge
        organically from its surroundings. Each project is
        approached as a dialogue between site, client, climate,
        and craft. The studio’s work reflects a deep sensitivity
        to materiality and proportion, creating spaces that are
        timeless, honest, and lived-in.
        <br />
        <br />
        Through careful detailing and restrained expression,
        ARK Architecture Studio aims to produce work that is
        both rooted and contemporary, responding quietly yet
        meaningfully to its context.
      </motion.p>
    </section>
  );
}
