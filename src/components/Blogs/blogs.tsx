// @ts-nocheck
import React, { FC } from "react";
import { BlogRes } from "../../../@types/res";
import { BlogCard } from "../BlogCard";
import { Section } from "../Section";

interface BlogsProps {
  blogs: BlogRes[];
}

export const Blogs: FC<BlogsProps> = ({ blogs }) => {
  return (
    <Section
      title="Blogs"
      contentClassName="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
    >
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </Section>
  );
};
