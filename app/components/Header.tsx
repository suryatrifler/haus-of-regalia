"use client";

import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full bg-[#FAF0EE] h-[277px]">
      <div className="h-full flex flex-col items-center  pb-10">
        {/* LOGO */}
        <div className="relative w-full h-[200px]">
          <Image
            src="/logo.jpg"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* NAV */}
        <Navigation />
      </div>
    </header>
  );
}
