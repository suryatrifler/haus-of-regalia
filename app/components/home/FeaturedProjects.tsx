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

const projects = [
  {
    id: "01",
    title: "Mozhi",
    description:
      "A house of conversations in the heart of Trivandrum city for a family of four.",
    image: "/slide-1.jpg",
  },
  {
    id: "02",
    title: "Nilah",
    description:
      "A contemporary spirit, a home designed to suit its users’ primary needs.",
    image: "/slide-2.jpg",
  },
  {
    id: "03",
    title: "Nirupamam",
    description:
      "An intuitive home designed looking around light, nature and privacy.",
    image: "/slide-3.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-32">
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-between items-center mb-14"
      >
        <h2 className="text-[11px] tracking-[0.35em] uppercase">
          Featured Projects
        </h2>

        <Link
          href="/portfolio"
          className="border px-6 py-2 text-[11px] tracking-[0.2em] uppercase hover:bg-[#835C57] hover:text-[#FAF0EE] transition"
        >
          See more
        </Link>
      </motion.div>

      {/* PROJECT LIST */}
      <div className="space-y-20">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="grid grid-cols-2 gap-16"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={700}
              height={450}
              className="object-cover"
            />

            <div className="pt-10">
              <span className="text-xs text-[#835C57]-400">
                {project.id}
              </span>

              <h3 className="text-lg mt-4 mb-4">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-600 max-w-md">
                {project.description}
              </p>

              <Link
                href="/portfolio"
                className="inline-block mt-6 text-xs tracking-wide text-[#835C57]-500 hover:text-[#835C57]"
              >
                View project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-[#835C57]-500 mt-20">
        Head over to portfolio section to check out our other projects.
      </p>
    </section>
  );
}
