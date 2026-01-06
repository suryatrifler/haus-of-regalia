"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

/* ---------------- FONTS ---------------- */

const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

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
      {/* GLOBAL RESET & PREMIUM STYLES */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background-color: #fafafa;
        }
        ::selection {
          background: #000;
          color: #fff;
        }
      `}</style>

      <main
        className={`${sans.variable} ${serif.variable} font-sans bg-[#fafafa] min-h-screen text-[#1a1a1a]`}
      >
        {/* FIRST CURTAIN */}
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

        {/* SECOND CURTAIN */}
        {showSecondCurtain && (
          <CurtainReveal onComplete={() => setShowContent(true)} />
        )}

        {/* PAGE CONTENT */}
        <div
          className={`transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* 1. HEADER SECTION */}
          <Header />

          {/* 2. PROJECT GRID SECTION */}
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
            <ProjectGrid />
          </div>
        </div>
      </main>
    </>
  );
}

/* ================= ANIMATION COMPONENTS ================= */

const InitialCurtain = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[120vh] z-[10000] overflow-hidden bg-black"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{
        duration: 1.4,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={onComplete}
    >
      <Image
        src="/cover-final.jpg"
        alt="Loading Curtain"
        fill
        priority
        className="object-cover opacity-90"
      />
    </motion.div>
  );
};

const CurtainReveal = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[120vh] z-[9999] overflow-hidden bg-black"
      initial={{ x: "0%" }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 2.4, 
        ease: [0.4, 0, 0.2, 1],
      }}
      onAnimationComplete={onComplete}
    >
      <Image
        src="/cover-final.jpg"
        alt="Reveal Curtain"
        fill
        priority
        className="object-cover opacity-90"
      />
    </motion.div>
  );
};

/* ================= HEADER (FORCED SPACING UPDATE) ================= */

const Header = () => (
  <header className="w-full bg-[#F8EEEC] pt-12 pb-12 mb-24 md:mb-32">
    
    <div className="flex flex-col items-center w-full px-4 md:px-0">
        {/* LOGO AREA */}
        <div className="relative w-full h-[120px] md:h-[277px] mb-8">
            <Image
                src="/logo-final.jpg" 
                alt="Haus of Regalia"
                fill
                className="object-contain" 
                priority
            />
        </div>

        {/* NAVIGATION MENU */}
        <nav className="w-full">
        <ul className="flex flex-wrap justify-center items-center gap-y-4 text-xs md:text-sm tracking-[0.2em] text-gray-800 font-medium">
            {[
            "HOME", 
            "PORTFOLIO", 
            "PUBLICATIONS", 
            "INTERIORS", 
            "ABOUT",
            "NEWS",
            "CONTACT"
            ].map((item, index, array) => (
            <li key={item} className="flex items-center">
                <a 
                href="#" 
                className="relative hover:text-black transition-colors duration-300"
                >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 w-full opacity-0 hover:opacity-100"></span>
                </a>
                
                {/* FORCE SPACING FIX:
                   1. Used 'px-12' (Padding Horizontal) instead of margin. 
                      This adds ~48px of pure space on BOTH sides of the pipe.
                   2. Added 'text-gray-400' to match the reference style.
                */}
                {index !== array.length - 1 && (
                <span className="px-12 text-gray-400 font-light select-none">|</span>
                )}
            </li>
            ))}
        </ul>
        </nav>
    </div>
  </header>
);

/* ================= PROJECT GRID ================= */

const ProjectGrid = () => {
  const projects = [
    {
      id: 1,
      title: "The Concrete Void",
      location: "Hyderabad",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      aspect: "aspect-[3/4]",
    },
    {
      id: 2,
      title: "Azure Villa",
      location: "Vizag Coast",
      img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
      aspect: "aspect-[16/9]", 
    },
    {
      id: 3,
      title: "Stone Residence",
      location: "Bangalore",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      aspect: "aspect-square", 
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
      {projects.map((p, index) => (
        <div
          key={p.id}
          className={`group cursor-pointer ${index % 2 === 1 ? "md:mt-24" : ""}`}
        >
          {/* Image Container */}
          <div className={`relative w-full ${p.aspect} bg-gray-200 overflow-hidden mb-6`}>
            <Image
              src={p.img}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>

          {/* Typography */}
          <div className="flex justify-between items-baseline border-b border-gray-300 pb-3 group-hover:border-black transition-colors duration-500">
            <h3 className={`text-2xl md:text-3xl ${serif.className} text-gray-900`}>
              {p.title}
            </h3>
            <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
              0{index + 1}
            </span>
          </div>
          <p className="mt-3 text-sm tracking-wide text-gray-500 uppercase">{p.location}</p>
        </div>
      ))}
    </section>
  );
};