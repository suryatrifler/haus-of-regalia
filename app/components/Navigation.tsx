"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

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

const items = [
  { label: "HOME", href: "/" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "PUBLICATIONS", href: "/publications" },
  { label: "INTERIORS", href: "/interiors" },
  { label: "ABOUT", href: "/about" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navigation() {
  return (
    <motion.nav
      className="w-[980px] h-[35px] mt-10 mx-auto"
      variants={navContainer}
      initial="hidden"
      animate="show"
    >
      <motion.ul className="flex justify-between h-full">
        {items.map((item, index) => (
          <motion.li
            key={item.label}
            variants={navItem}
            className="relative flex items-center h-full uppercase group"
            style={{
              fontFamily: "var(--font-nav)",
              fontSize: "15px",
              fontWeight: 400,
              letterSpacing: "0.14em",
              color: "rgb(20,20,20)",
            }}
          >
            {/* LINK */}
            <Link
              href={item.href}
              className="relative pb-2 transition-colors duration-300 group-hover:text-black"
            >
              {item.label}

              {/* SLIDE UNDERLINE */}
              <span
                className="
                  absolute left-0 -bottom-[2px]
                  h-[1px] w-full
                  bg-black
                  scale-x-0
                  origin-left
                  transition-transform duration-300 ease-out
                  group-hover:scale-x-100
                "
              />
            </Link>

            {/* SEPARATOR */}
            {index !== items.length - 1 && (
              <span className="mx-5 text-neutral-300">|</span>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
