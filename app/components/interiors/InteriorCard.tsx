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
    <div className="relative group overflow-hidden">
      {/* IMAGE */}
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
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

      {/* LIKE — BOTTOM LEFT */}
      <button
        onClick={toggleLike}
        className="
          absolute bottom-4 left-4
          flex items-center gap-1
          text-[#FAF0EE]
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
        aria-label="Like interior"
      >
        <span
          className={`text-lg ${
            liked ? "text-red-500" : "text-[#FAF0EE]"
          }`}
        >
          ♥
        </span>
        <span className="text-xs">{count}</span>
      </button>

      {/* SHARE — BOTTOM RIGHT */}
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
