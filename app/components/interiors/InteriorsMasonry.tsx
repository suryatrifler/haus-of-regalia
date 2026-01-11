import React from "react";
import InteriorCard from "./InteriorCard";

const interiors = [
  { id: "01", image: "/project/project-2/14.jpg", shareUrl: "/i/1" },
  { id: "02", image: "/project/project-2/13.jpg", shareUrl: "/i/2" },
  { id: "03", image: "/project/project-2/11.jpg", shareUrl: "/i/3" },
  { id: "04", image: "/project/project-2/8-3.jpg", shareUrl: "/i/4" },
  { id: "05", image: "/project/project-2/9.jpg", shareUrl: "/i/5" },
  { id: "06", image: "/project/project-2/10.jpg", shareUrl: "/i/6" },
  // Adding duplicates to demonstrate the full repeating pattern
  { id: "07", image: "/project/project-2/14.jpg", shareUrl: "/i/7" },
  { id: "08", image: "/project/project-2/13.jpg", shareUrl: "/i/8" },
  { id: "09", image: "/project/project-2/11.jpg", shareUrl: "/i/9" },
  { id: "10", image: "/project/project-2/8-3.jpg", shareUrl: "/i/10" },
];

export default function InteriorsMasonry() {
  /**
   * ADVANCED LAYOUT ENGINE (v2.0)
   * * Updates:
   * 1. Uses a 3-column base (instead of 4) for BIGGER images.
   * 2. Incorporates "Whole Row" spans.
   * 3. Uses natural aspect ratios (4/3, 16/9) instead of just squares.
   * * Cycle Pattern (Repeats every 8 items):
   * 0. Large Focus (2/3rds width) + 1. Vertical Sidebar (1/3rd width)
   * 2. Full Width Hero (Whole Row)
   * 3. Vertical (1/3rd) + 4. Large Landscape (2/3rds)
   * 5. Standard Landscape (1/3rd) + 6. Standard Landscape (1/3rd) + 7. Standard Landscape (1/3rd)
   */
  const getSmartGridStyle = (index: number) => {
    const patternIndex = index % 8;

    switch (patternIndex) {
      // --- ROW 1: Asymmetrical Split (Big Left, Tall Right) ---
      case 0:
        return "md:col-span-2 md:row-span-2 aspect-[4/3]"; // Big 4:3 Image
      case 1:
        return "md:col-span-1 md:row-span-2 aspect-[2/3]"; // Tall Portrait

      // --- ROW 2: The "Showstopper" (Whole Row) ---
      case 2:
        return "md:col-span-3 md:row-span-2 aspect-[21/9]"; // Cinematic Ultrawide

      // --- ROW 3: Asymmetrical Split (Tall Left, Big Right) ---
      case 3:
        return "md:col-span-1 md:row-span-2 aspect-[2/3]"; // Tall Portrait
      case 4:
        return "md:col-span-2 md:row-span-2 aspect-[4/3]"; // Big 4:3 Image

      // --- ROW 4: Gallery Row (Three equal columns) ---
      case 5:
      case 6:
      case 7:
        return "md:col-span-1 md:row-span-1 aspect-square"; // Standard Square

      default:
        return "col-span-1 aspect-square";
    }
  };

  return (
    // MAX-WIDTH INCREASED to 1800px for "Horizontal Expansion"
    <section className="max-w-[1800px] mx-auto px-4 md:px-8 mt-32 mb-32">
      
      {/* HEADER */}
      <div className="flex flex-col items-center mb-24">
        <h2 className="text-xs uppercase tracking-[0.5em] text-[#835C57] font-semibold">
          Selected Works
        </h2>
        <div className="w-10 h-[1px] bg-[#835C57]/40 mt-5" />
      </div>

      {/* GRID SETUP:
         - grid-cols-3: We use 3 columns so items are naturally LARGER.
         - grid-flow-dense: Fills empty pixel gaps automatically.
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 grid-flow-dense">
        {interiors.map((item, i) => (
          <div
            key={item.id}
            className={`
              relative overflow-hidden group 
              bg-gray-100 rounded-sm
              transition-all duration-700 ease-out
              ${getSmartGridStyle(i)}
            `}
          >
            {/* IMAGE HANDLING:
              - 'object-cover': Essential for the grid to lock together perfectly.
              - However, because we adjusted the container aspect ratios (4/3, 21/9)
                to match real photos, significantly LESS cropping will occur compared to before.
            */}
            <div className="w-full h-full">
              {/* Ensure InteriorCard passes these classes to the img tag */}
              <div className="w-full h-full transition-transform duration-1000 group-hover:scale-105">
                 <InteriorCard 
                    image={item.image} 
                    shareUrl={item.shareUrl}
                 />
              </div>
            </div>

            {/* Optional: Subtle Overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}