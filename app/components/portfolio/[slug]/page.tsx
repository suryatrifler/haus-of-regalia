import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

import ProjectCover from "@/app/components/project/ProjectCover";
import ProjectIntro from "@/app/components/project/ProjectIntro";
import ProjectMetaImages from "@/app/components/project/ProjectMetaImages";
import ProjectNarrative from "@/app/components/project/ProjectNarrative";
import ProjectGallery from "@/app/components/project/ProjectGallery";

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) return notFound();

  return (
    <>
      <ProjectCover src={project.cover} />

      <ProjectIntro
        title={project.title}
        text={project.intro.text}
        image={project.intro.image}
      />

      <ProjectMetaImages
        wide={project.metaImages.wide}
        pair={project.metaImages.pair}
        location={project.location}
        area={project.area}
      />

      <ProjectNarrative text={project.narrative} />

      <ProjectGallery images={project.gallery} />
    </>
  );
}
