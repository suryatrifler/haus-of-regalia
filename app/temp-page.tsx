"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

// Fonts
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function ArchitecturePortfolio() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (

    
    <main className={`${sans.variable} ${serif.variable} font-sans bg-white min-h-screen overflow-x-hidden`}>
      
      {/* 1. THE CURTAIN (Slides LEFT) */}
      <CurtainReveal />

      {/* 2. THE HOMEPAGE */}
      <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <div className="relative z-0 min-h-screen pt-24 px-4 md:px-12 text-black">
          <Header />
          <ProjectGrid />
        </div>
      </div>

    </main>
  );
}

// --- THE CURTAIN COMPONENT ---
const CurtainReveal = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[120vh] z-[9999] flex items-center justify-center bg-black" // Fallback color
      initial={{ x: "0%" }}        
      animate={{ x: "-100%" }}     
      transition={{
        delay: 2.5,        
        duration: 1.2,     
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* FULL SCREEN IMAGE FIX:
          1. removed the width/height wrapper
          2. added object-cover to make it act like a wallpaper
      */}
      <Image
        src="/cover-final.jpg" 
        alt="Haus of Regalia"
        fill
        sizes="100vw"
        className="object-cover" // This makes the image fill the WHOLE screen
        priority
      />
    </motion.div>
  );
};

// --- HEADER ---
const Header = () => (
  <div className="text-center mb-16 space-y-4">
    {/* Small logo at top of page */}
    <div style={{ position: 'relative', width: '400px', height: '200px', margin: '0 auto 1.5rem auto', opacity: 1 }}>
         <Image src="/logo-final.jpg" alt="Logo" fill style={{ objectFit: "contain" }} />
    </div>
    <h1 className="text-sm tracking-[0.3em] uppercase text-gray-500">Haus of Regalia</h1>
    <h2 className={`text-4xl md:text-6xl text-gray-900 ${serif.className}`}>Selected Works</h2>
    <div className="w-12 h-[1px] bg-gray-300 mx-auto mt-6"></div>
  </div>
);

// --- GRID ---
const ProjectGrid = () => {
  const projects = [
    { id: 1, title: "Modern Void", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
    { id: 2, title: "Azure Villa", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b" },
    { id: 3, title: "Stone House", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" },
  ];
  return (
    <div className="max-w-4xl mx-auto pb-20 space-y-12">
      {projects.map((p, i) => (
        <div key={p.id} className="relative aspect-video bg-gray-100 mb-8 group cursor-pointer">
          <Image 
            src={p.img} 
            alt={p.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute bottom-0 left-0 bg-white p-4">
            <span className={`text-xl ${serif.className}`}>{p.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};