"use client";

import Image from "next/image";
import { useState } from "react";
import { useShareDialog } from "./useShareDialog";

type Props = {
  id: string;
  title: string;
  image: string;
  likes: number;
};

export default function OngoingProjectCard({
  id,
  title,
  image,
  likes,
}: Props) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likes);
  const { open } = useShareDialog();

  function toggleLike() {
    setLiked((prev) => !prev);
    setCount((c) => (liked ? c - 1 : c + 1));
  }

  return (
    <div className="relative group">
      <Image
        src={image}
        alt={title}
        width={700}
        height={500}
        className="object-cover"
      />

      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

      {/* TITLE */}
      <p className="absolute bottom-6 left-6 text-white text-sm opacity-0 group-hover:opacity-100 transition">
        {title}
      </p>

      {/* HEART */}
      <button
        onClick={toggleLike}
        className="absolute bottom-6 left-6 translate-y-8 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition"
      >
        <span className={liked ? "text-red-500" : ""}>♥</span>
        <span className="text-xs">{count}</span>
      </button>

      {/* SHARE */}
      <button
        onClick={() => open(window.location.href)}
        className="absolute bottom-6 right-6 translate-y-8 text-white opacity-0 group-hover:opacity-100 transition"
      >
        ⤴
      </button>
    </div>
  );
}
