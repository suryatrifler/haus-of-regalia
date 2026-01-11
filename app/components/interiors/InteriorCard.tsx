"use client";

import { useState } from "react";
import { useShareDialog } from "../portfolio/useShareDialog";

export default function InteriorCard({
  image,
  shareUrl,
}: {
  image: string;
  shareUrl: string;
}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(12);
  const openShare = useShareDialog((s) => s.open);

  return (
    <div className="relative group">
      <img
        src={image}
        alt=""
        className="w-full block"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#835C57]/35 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* LIKE */}
      <button
        onClick={() => {
          setLiked(!liked);
          setCount((c) => (liked ? c - 1 : c + 1));
        }}
        className="absolute bottom-4 left-4 text-[#FAF0EE] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition duration-500"
      >
        ♥ <span className="text-xs">{count}</span>
      </button>

      {/* SHARE */}
      <button
        onClick={() => openShare(shareUrl)}
        className="absolute bottom-4 right-4 text-[#FAF0EE] text-lg opacity-0 group-hover:opacity-100 transition duration-500"
      >
        ↗
      </button>
    </div>
  );
}
