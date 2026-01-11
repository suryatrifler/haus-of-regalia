import InteriorCard from "./InteriorCard";

const interiors = [
  {
    id: "int-01",
    image: "project/project-2/14.jpg",
    shareUrl: "/interiors/int-01",
    span: "full",
  },
  {
    id: "int-02",
    image: "project/project-2/13.jpg",
    shareUrl: "/interiors/int-02",
    span: "half",
  },
  {
    id: "int-03",
    image: "project/project-2/11.jpg",
    shareUrl: "/interiors/int-03",
    span: "half",
  },
  {
    id: "int-04",
    image: "project/project-2/8-3.jpg",
    shareUrl: "/interiors/int-04",
    span: "full",
  },
  {
    id: "int-05",
    image: "project/project-2/9.jpg",
    shareUrl: "/interiors/int-05",
    span: "half",
  },
  {
    id: "int-06",
    image: "project/project-2/10.jpg",
    shareUrl: "/interiors/int-06",
    span: "half",
  },
];

export default function InteriorsMasonry() {
  const left: typeof interiors = [];
  const right: typeof interiors = [];

  interiors.forEach((item, index) => {
    if (item.span === "full") {
      left.push(item);
      right.push(item);
    } else {
      (left.length <= right.length ? left : right).push(item);
    }
  });

  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-32">
      {/* LABEL */}
      <div className="flex flex-col items-center mb-24">
        <h2 className="text-[10px] uppercase tracking-[0.45em] text-[#835C57]/80">
          Selected Works
        </h2>
        <div className="w-8 h-[1px] bg-[#835C57]/30 mt-4" />
      </div>

      {/* MASONRY */}
      <div className="flex gap-10">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col gap-10">
          {left.map((item) =>
            item.span === "full" ? (
              <div key={item.id} className="w-full">
                <InteriorCard image={item.image} shareUrl={item.shareUrl} />
              </div>
            ) : (
              <InteriorCard
                key={item.id}
                image={item.image}
                shareUrl={item.shareUrl}
              />
            )
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col gap-10">
          {right.map((item) =>
            item.span === "full" ? null : (
              <InteriorCard
                key={item.id}
                image={item.image}
                shareUrl={item.shareUrl}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
