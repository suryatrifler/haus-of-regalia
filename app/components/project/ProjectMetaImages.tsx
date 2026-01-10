"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

type Props = {
  wide: string;
  pair: [string, string];
  location: string;
  area: string;
};

export default function ProjectMetaImages({
  wide,
  pair,
  location,
  area,
}: Props) {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mb-32">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src={wide}
          alt=""
          width={1200}
          height={600}
          className="mb-10"
        />

        <div className="grid grid-cols-2 gap-10 mb-10">
          <Image src={pair[0]} alt="" width={600} height={400} />
          <Image src={pair[1]} alt="" width={600} height={400} />
        </div>

        <p className="text-xs tracking-wide text-neutral-500">
          {location} · {area}
        </p>
      </motion.div>
    </section>
  );
}
