"use client";

import React, { useState, useEffect } from "react";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";

import InitialCurtain from "./InitialCurtain";
import CurtainReveal from "./CurtainReveal";
import Header from "./Header";
import Footer from "./HomeFooter"; // add later when ready

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

export default function GlobalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showFirstCurtain, setShowFirstCurtain] = useState(true);
  const [showSecondCurtain, setShowSecondCurtain] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* GLOBAL RESET — EXACT SAME */}
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
            {children}
            {<Footer />}
          </>
        )}
      </main>
    </>
  );
}
