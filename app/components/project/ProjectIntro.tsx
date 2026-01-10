"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function ProjectIntro({
  title,
  text,
  image,
}: Props) {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mb-32 grid grid-cols-2 gap-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-3xl mb-4">{title}</h1>
        <div className="w-12 h-px bg-black mb-6" />
        <p className="text-sm leading-7 text-neutral-700">
          {text}
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        <Image
          src={image}
          alt=""
          width={600}
          height={450}
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
