import InteriorCard from "./InteriorCard";

const interiors = [
  {
    id: "int-01",
    image: "/project/project-2/14.jpg",
    shareUrl: "/interiors/int-01",
    span: "col-span-2",
  },
  {
    id: "int-02",
    image: "/project/project-2/13.jpg",
    shareUrl: "/interiors/int-02",
    span: "col-span-1",
  },
  {
    id: "int-03",
    image: "/project/project-2/11.jpg",
    shareUrl: "/interiors/int-03",
    span: "col-span-1",
  },
  {
    id: "int-04",
    image: "/project/project-2/8-3.jpg",
    shareUrl: "/interiors/int-04",
    span: "col-span-2",
  },
];

export default function InteriorsGrid() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-32">
      {/* SECTION LABEL — UPDATED STYLE */}
      <div className="flex flex-col items-center mb-20">
        <div className="w-10 h-[1px] bg-[#835C57]/70 mb-6" />

        <h2
          className="
            text-[11.5px]
            uppercase
            tracking-[0.45em]
            text-[#835C57]
          "
        >
          Selected Works
        </h2>

        <div className="w-14 h-[1px] bg-[#835C57]/40 mt-6" />
      </div>

      {/* NON-UNIFORM GRID */}
      <div className="grid grid-cols-2 gap-12 auto-rows-auto">
        {interiors.map((item) => (
          <div key={item.id} className={item.span}>
            <InteriorCard
              image={item.image}
              shareUrl={item.shareUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
