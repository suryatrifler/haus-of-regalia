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

export default function ContactDetails() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-24 mb-40 text-[14px]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <p>
          Phone:
          <br />
          <a href="tel:+919744999050" className="hover:underline">
            +91 97449 99050
          </a>
          <br />
          <a href="tel:+918129206164" className="hover:underline">
            +91 81292 06164
          </a>
        </p>

        <p>
          Email:
          <br />
          <a
            href="mailto:arkdesignstudio18@gmail.com"
            className="hover:underline"
          >
            arkdesignstudio18@gmail.com
          </a>
          <br />
          <a
            href="mailto:ark@arkarchitecturestudio.com"
            className="hover:underline"
          >
            ark@arkarchitecturestudio.com
          </a>
        </p>

        <p>
          <strong>For Careers</strong>
          <br />
          <a
            href="mailto:careers@arkarchitecturestudio.com"
            className="hover:underline"
          >
            careers@arkarchitecturestudio.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
