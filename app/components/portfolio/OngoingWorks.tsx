"use client";

import { useState } from "react";
import { useShareDialog } from "./useShareDialog";

type OngoingProject = {
  id: string;
  title: string;
  image: string;
  shareUrl: string;
};

const ongoingProjects: OngoingProject[] = [
  {
    id: "01",
    title: "Residence for Mr. Arun",
    image: "/project/project-2/1.jpg",
    shareUrl: "/portfolio/residence-for-mr-arun",
  },
  {
    id: "02",
    title: "Hill View Villa",
    image: "/ongoing-2.jpg",
    shareUrl: "/portfolio/hill-view-villa",
  },
];

export default function OngoingWorks() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-40">
      {/* SECTION LABEL */}
      <div className="flex flex-col items-center mb-20">
  <div className="w-10 h-[1px] bg-neutral-400 mb-6" />

  <h2
    className="
      text-[15.5px]
      uppercase
      tracking-[0.45em]
      text-[#835C57]-900
    "
  >
    Ongoing Works
  </h2>

  <div className="w-14 h-[1px] bg-neutral-300 mt-4" />
</div>


      {/* GRID */}
      <div className="grid grid-cols-2 gap-10">
        {ongoingProjects.map((project) => (
          <OngoingCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------ */
/* CARD COMPONENT */
/* ------------------------------------------------ */

function OngoingCard({ project }: { project: OngoingProject }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(24);
  const openShare = useShareDialog((s) => s.open);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="relative group overflow-hidden">
      {/* IMAGE */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-black/40
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500 ease-out
        "
      />

      {/* CENTER TITLE */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500 ease-out
          pointer-events-none
        "
      >
        <h3 className="text-white text-sm tracking-wide text-center">
          {project.title}
        </h3>
      </div>

      {/* HEART — BOTTOM LEFT */}
      <button
        onClick={toggleLike}
        className="
          absolute bottom-4 left-4
          flex items-center gap-1
          text-white
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
      >
        <span
          className={`text-lg ${
            liked ? "text-red-500" : "text-white"
          }`}
        >
          ♥
        </span>
        <span className="text-xs">{likes}</span>
      </button>

      {/* SHARE — BOTTOM RIGHT */}
      <button
        onClick={() => openShare(project.shareUrl)}
        className="
          absolute bottom-4 right-4
          text-white text-lg
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
      >
        ↗
      </button>
    </div>
  );
}
