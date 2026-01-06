"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import Image from "next/image";

/* ---------------- FONTS ---------------- */

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nav",
});

/* ---------------- TYPES ---------------- */

type CurtainProps = {
  onComplete: () => void;
};

/* ---------------- NAV ANIMATION ---------------- */

const navContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.9, staggerChildren: 0.08 },
  },
};

const navItem: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ================= MAIN PAGE ================= */

export default function ArchitecturePortfolio() {
  const [showFirstCurtain, setShowFirstCurtain] = useState(true);
  const [showSecondCurtain, setShowSecondCurtain] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* GLOBAL RESET */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background-color: #faf0ee;
        }
      `}</style>

      <main
        className={`${inter.variable} ${playfair.variable} ${montserrat.variable} min-h-screen`}
      >
        {/* CURTAINS */}
        {showFirstCurtain && (
          <InitialCurtain
            onComplete={() => {
              setTimeout(() => {
                setShowSecondCurtain(true);
                setShowFirstCurtain(false);
              }, 600);
            }}
          />
        )}

        {showSecondCurtain && (
          <CurtainReveal onComplete={() => setShowContent(true)} />
        )}

        {/* CONTENT */}
        {showContent && (
          <>
            <Header />
            <HeroSlider />
          </>
        )}
      </main>
    </>
  );
}

/* ================= CURTAINS ================= */

function InitialCurtain({ onComplete }: CurtainProps) {
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

function CurtainReveal({ onComplete }: CurtainProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[120vh] z-[9999] bg-black"
      initial={{ x: "0%" }}
      animate={{ x: "-100%" }}
      transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1] }}
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

/* ================= HEADER ================= */

function Header() {
  return (
    <header className="w-full bg-[#FAF0EE] h-[277px]">
      <div className="h-full flex flex-col items-center pt-12 pb-10">
        {/* LOGO */}
        <div className="relative w-full h-[200px]">
          <Image
            src="/logo-final.jpg"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* NAV */}
        <motion.nav
          className="w-[980px] h-[35px] mt-8 mx-auto"
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          <motion.ul className="flex justify-between h-full">
            {[
              "HOME",
              "PORTFOLIO",
              "PUBLICATIONS",
              "INTERIORS",
              "ABOUT",
              "NEWS",
              "CONTACT",
            ].map((item, index, array) => (
              <motion.li
                key={item}
                variants={navItem}
                className="flex items-center h-full uppercase"
                style={{
                  fontFamily: "var(--font-nav)",
                  fontSize: "15px",
                  fontWeight: 400,
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  color: "rgb(3,3,3)",
                  letterSpacing: "0.12em",
                }}
              >
                {item}
                {index !== array.length - 1 && (
                  <span
                    style={{ marginLeft: "20px", color: "#bdbdbd" }}
                  >
                    |
                  </span>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </div>
    </header>
  );
}

/* ================= HERO SLIDER (STABLE) ================= */

const slides = [
  "/cover-final.jpg",
  "/cover-final.jpg",
  "/cover-final.jpg",
];

function HeroSlider() {
  const slides = [
    "/slide-1.jpg",
    "/slide-2.jpg",
    "/slide-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
        />
      ))}
    </section>
  );
}