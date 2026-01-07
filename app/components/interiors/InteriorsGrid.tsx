import InteriorCard from "./InteriorCard";

const interiors = [
  {
    id: "int-01",
    title: "Living Space, Trivandrum",
    image: "/interior-1.jpg",
    likes: 14,
    span: "col-span-2",
  },
  {
    id: "int-02",
    title: "Bedroom Interior",
    image: "/interior-2.jpg",
    likes: 9,
    span: "col-span-1",
  },
  {
    id: "int-03",
    title: "Dining Area",
    image: "/interior-3.jpg",
    likes: 6,
    span: "col-span-1",
  },
  {
    id: "int-04",
    title: "Kitchen Space",
    image: "/interior-4.jpg",
    likes: 11,
    span: "col-span-2",
  },
];

export default function InteriorsGrid() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-32">
      {/* SECTION LABEL */}
      <h2 className="text-[11px] uppercase tracking-[0.35em] mb-14">
        Selected Works
      </h2>

      {/* NON-UNIFORM GRID */}
      <div className="grid grid-cols-2 gap-20 auto-rows-auto">
        {interiors.map((item) => (
          <InteriorCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
