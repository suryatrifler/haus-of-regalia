"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type CurtainProps = {
  onComplete: () => void;
};

export default function InitialCurtain({ onComplete }: CurtainProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[120vh] z-[10000] bg-black"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
    >
      <Image
        src="/cover-final.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
