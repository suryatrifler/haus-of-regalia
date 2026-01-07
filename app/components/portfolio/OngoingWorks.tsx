import OngoingProjectCard from "./OngoingProjectCard";

const ongoingProjects = [
  {
    id: "house-01",
    title: "Residence for Mr. Sunil",
    image: "/ongoing-1.jpg",
    likes: 12,
  },
  {
    id: "house-02",
    title: "Courtyard House",
    image: "/ongoing-2.jpg",
    likes: 8,
  },
];

export default function OngoingWorks() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-40">
      <h2 className="text-[11px] uppercase tracking-[0.35em] mb-14">
        Ongoing Works
      </h2>

      <div className="grid grid-cols-2 gap-20">
        {ongoingProjects.map((project) => (
          <OngoingProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
