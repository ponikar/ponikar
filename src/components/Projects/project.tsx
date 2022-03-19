import React, { FC } from "react";
import { ProjectRes } from "../../../@types/res";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Section } from "../Section";

interface ProjectsProps {
  projects: ProjectRes[];
}
export const Projects: FC<ProjectsProps> = ({ projects = [] }) => {
  return (
    <Section
      contentClassName="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
      title="Projects"
    >
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </Section>
  );
};
