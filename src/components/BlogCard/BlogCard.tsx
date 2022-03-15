import Image from "next/image";
import React, { FC } from "react";
import { Content } from "../Card";

interface BlogCardProps {
  title: string;
  content: string;

  link: string;

  alt?: string;

  imgSrc: string;
}
export const BlogCard: FC<BlogCardProps> = ({
  title,
  content,
  link,
  imgSrc,
  alt,
}) => {
  return (
    <section className="border rounded p-4">
      <div className="mb-1 overflow-hidden -m-4">
        <Image
          src={imgSrc}
          alt={alt}
          width={1000}
          objectFit="cover"
          height={400}
          className="rounded-t"
        />
      </div>
      <h3 className="text-3xl mb-2 font-medium"> {title} </h3>
      <Content contentLine={4}>{content}</Content>
    </section>
  );
};
