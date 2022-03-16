// @ts-nocheck
import React, { FC } from "react";
import { BlogCard } from "../BlogCard";
import { Section } from "../Section";

export const Blogs: FC = () => {
  return (
    <Section
      title="Blogs"
      contentClassName="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
    >
      <BlogCard
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint culpa ipsa laudantium rerum. Illum optio nobis corrupti eos, distinctio, temporibus itaque, ex eius cum nemo laudantium? Fugit, a cumque!"
        title="Blog Title"
        imgSrc="/assets/imgs/shopty.jpeg"
      />
      <BlogCard
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint culpa ipsa laudantium rerum. Illum optio nobis corrupti eos, distinctio, temporibus itaque, ex eius cum nemo laudantium? Fugit, a cumque!"
        title="Blog Title"
        imgSrc="/assets/imgs/shopty.jpeg"
      />
      <BlogCard
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint culpa ipsa laudantium rerum. Illum optio nobis corrupti eos, distinctio, temporibus itaque, ex eius cum nemo laudantium? Fugit, a cumque!"
        title="Blog Title"
        imgSrc="/assets/imgs/shopty.jpeg"
      />
    </Section>
  );
};
