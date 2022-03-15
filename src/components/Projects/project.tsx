// @ts-nocheck
import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Section } from "../Section";

export const Projects = () => {
  return (
    <Section
      contentClassName="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
      title="Projects"
    >
      <ProjectCard
        imgSrc="/assets/imgs/shopty.jpeg"
        title="Shopty.in"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus cupiditate laudantium corporis nemo illo ex quibusdam atque, exercitationem nostrum dolores animi quod dolorem soluta, molestias dolore dolorum distinctio mollitia reiciendis?"
      />
      <ProjectCard
        imgSrc="/assets/imgs/shopty.jpeg"
        title="Shopty.in"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus cupiditate laudantium corporis nemo illo ex quibusdam atque, exercitationem nostrum dolores animi quod dolorem soluta, molestias dolore dolorum distinctio mollitia reiciendis?"
      />
      <ProjectCard
        imgSrc="/assets/imgs/shopty.jpeg"
        title="Shopty.in"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus cupiditate laudantium corporis nemo illo ex quibusdam atque, exercitationem nostrum dolores animi quod dolorem soluta, molestias dolore dolorum distinctio mollitia reiciendis?"
      />
    </Section>
  );
};
