"use client";

import { useState } from "react";
import { useShareDialog } from "../portfolio/useShareDialog";

type Props = {
  image: string;
  shareUrl: string;
};

export default function InteriorCard({ image, shareUrl }: Props) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(12);
  const openShare = useShareDialog((s) => s.open);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="relative group self-start">
      {/* IMAGE */}
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover block" 
      />

     {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-[#835C57]/35
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* LIKE — PREMIUM */}
      <button
        onClick={toggleLike}
        className="
          absolute bottom-4 left-4
          flex items-center gap-1.5
          text-[#FAF0EE]
          opacity-0
          group-hover:opacity-100
          transition-all duration-300
          hover:scale-[1.08]
        "
        aria-label="Like interior"
      >
        <span
          className={`
            text-[15px]
            transition-all duration-300
            ${liked ? "text-[#835C57] scale-110" : "text-[#FAF0EE]/90"}
          `}
        >
          ♥
        </span>

        <span
          className="
            text-[11px]
            tracking-wide
            transition-opacity duration-300
            opacity-80
          "
        >
          {count}
        </span>
      </button>

      {/* SHARE — UNCHANGED */}
      <button
        onClick={() => openShare(shareUrl)}
        className="
          absolute bottom-4 right-4
          text-[#FAF0EE] text-lg
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
        aria-label="Share interior"
      >
        ↗
      </button>
    </div>
  );
}
