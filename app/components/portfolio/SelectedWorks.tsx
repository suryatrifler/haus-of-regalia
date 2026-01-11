import Image from "next/image";
import Link from "next/link";

type SelectedProject = {
  id: string;
  title: string;
  image: string;
  slug: string;
};

const selectedProjects: SelectedProject[] = [
  {
    id: "01",
    title: "The Beachside",
    image: "/project/the-beachside/intro.jpg",
    slug: "the-beachside",
  },
  {
    id: "02",
    title: "Nilah",
    image: "/project/project-2/1.jpg",
    slug: "nilah",
  },
  {
    id: "03",
    title: "Nirupamam",
    image: "/project-3.jpg",
    slug: "nirupamam",
  },
];

export default function SelectedWorks() {
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
    Selected Works
  </h2>

  <div className="w-14 h-[1px] bg-neutral-300 mt-6" />
</div>


      {/* GRID */}
      <div className="grid grid-cols-3 gap-8">
        {selectedProjects.map((project) => (
          <div key={project.id} className="group">
            {/* IMAGE */}
            <Link href={`/portfolio/${project.slug}`}>
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.03]
                  "
                />
              </div>
            </Link>

            {/* TITLE */}
            <Link href={`/portfolio/${project.slug}`}>
              <div className="mt-4">
                <h3
                  className="
                    text-[13px]
                    tracking-wide
                    uppercase
                    transition-colors duration-300
                    group-hover:text-neutral-500
                  "
                >
                  {project.title}
                </h3>

                {/* subtle underline */}
                <div className="mt-2 h-[1px] w-8 bg-neutral-300 transition-all duration-500 group-hover:w-14" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
