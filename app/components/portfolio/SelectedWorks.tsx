import SelectedProjectCard from "./SelectedProjectCard";

const selectedProjects = [
  {
    id: "mozhi",
    title: "Mozhi",
    image: "/project-1.jpg",
  },
  {
    id: "nilah",
    title: "Nilah",
    image: "/project-2.jpg",
  },
  {
    id: "nirupamam",
    title: "Nirupamam",
    image: "/project-3.jpg",
  },
];

export default function SelectedWorks() {
  return (
    <section className="max-w-[1200px] mx-auto px-24 mt-32">
      <h2 className="text-[11px] uppercase tracking-[0.35em] mb-14">
        Selected Works
      </h2>

      <div className="grid grid-cols-3 gap-16">
        {selectedProjects.map((project) => (
          <SelectedProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
