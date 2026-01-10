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

export default function ContactInfo() {
  return (
    <section className="max-w-[900px] mx-auto px-24 mt-24 mb-40">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12 text-[14px] leading-[1.7] text-[#835C57]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {/* ADDRESS */}
        <div>
          <p>
            ARK Architecture Studio
            <br />
            23/2719, Jawahar Nagar,
            <br />
            Kowdiar PO,
            <br />
            Trivandrum – 695003
          </p>
        </div>

        {/* CONTACT */}
        <div className="space-y-2">
          <p>
            Phone:{" "}
            <a href="tel:+919744999050" className="hover:underline">
              +91 9744999050
            </a>
            ,{" "}
            <a href="tel:+918129206164" className="hover:underline">
              +91 81292 06164
            </a>
          </p>

          <p>
            Email:{" "}
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
        </div>

        {/* CAREERS */}
        <div>
          <p className="uppercase tracking-[0.25em] text-[11px] mb-2">
            For Careers
          </p>
          <a
            href="mailto:careers@arkarchitecturestudio.com"
            className="hover:underline"
          >
            careers@arkarchitecturestudio.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
