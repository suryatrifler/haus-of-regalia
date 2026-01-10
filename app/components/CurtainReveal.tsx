"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type CurtainProps = {
  onComplete: () => void;
};

export default function CurtainReveal({ onComplete }: CurtainProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[120vh] z-[9999] bg-black"
      initial={{ x: "0%" }}
      animate={{ x: "-100%" }}
      transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={onComplete}
    >
      <Image
        src="/SecondaryCurtain.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
