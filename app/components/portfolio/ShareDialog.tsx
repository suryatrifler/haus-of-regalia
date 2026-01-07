"use client";

import { useShareDialog } from "./useShareDialog";

export default function ShareDialog() {
  const { isOpen, url, close } = useShareDialog();

  if (!isOpen || !url) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-10 w-[500px] relative">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-xl"
        >
          ×
        </button>

        <div className="flex justify-center gap-6 mb-8 text-xl">
          <span>f</span>
          <span>𝕏</span>
          <span>P</span>
          <span>t</span>
          <span>✉</span>
        </div>

        <div className="flex border">
          <input
            value={url}
            readOnly
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <button
            onClick={() => navigator.clipboard.writeText(url)}
            className="bg-black text-white px-4"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
