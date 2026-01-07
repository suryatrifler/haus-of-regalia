"use client";

import Image from "next/image";
import { useState } from "react";
import { useShareDialog } from "@/app/components/portfolio/useShareDialog";

type Props = {
  id: string;
  title: string;
  image: string;
  likes: number;
  span: string; // "col-span-1" | "col-span-2"
};

export default function InteriorCard({
  title,
  image,
  likes,
  span,
}: Props) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likes);
  const { open } = useShareDialog();

  function toggleLike() {
    setLiked((prev) => !prev);
    setCount((c) => (liked ? c - 1 : c + 1));
  }

  return (
    <div className={`relative group ${span}`}>
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        width={1200}
        height={800}
        className="object-cover w-full h-full"
      />

      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* HEART */}
      <button
        onClick={toggleLike}
        className="
          absolute top-5 left-5
          flex items-center gap-2
          text-white text-sm
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        <span className={liked ? "text-red-500" : ""}>♥</span>
        <span className="text-xs">{count}</span>
      </button>

      {/* SHARE */}
      <button
        onClick={() => open(window.location.href)}
        className="
          absolute top-5 right-5
          text-white text-sm
          opacity-0 group-hover:opacity-100
          transition
        "
        aria-label="Share"
      >
        ⤴
      </button>
    </div>
  );
}
