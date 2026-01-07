"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/slide-1.jpg",
  "/slide-2.jpg",
  "/slide-3.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </section>
  );
}
