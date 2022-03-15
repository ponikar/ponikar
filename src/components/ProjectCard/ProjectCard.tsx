import Image from "next/image";
import React, { FC } from "react";
import { Link, Maximize } from "react-feather";
import { Content } from "../Card";
import { Label } from "../Label/Label";
import { SocialIcon } from "../SocialIcon";
import styles from "./projectcard.module.css";
interface ProjectCardProps {
  title: string;
  content: string;

  link: string;

  imgSrc: string;

  alt?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  content,
  link,
  imgSrc,
  alt = "",
}) => {
  return (
    <section className="border p-4 rounded">
      <article className="flex flex-col gap-2">
        <div className={styles.img_container}>
          <Image
            src={imgSrc}
            alt={alt}
            width={400}
            objectFit="cover"
            height={250}
            className="rounded-lg mb-3"
          />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-medium"> {title} </h3>
          <Label text="LIVE" variant="success" />
        </div>
        <Content contentLine={3}>{content}</Content>

        <div className="my-1 items-center justify-between flex gap-3">
          <Link
            size={18}
            className="text-gray-600 cursor-pointer hover:text-green-900"
          />
          <SocialIcon src="gh.svg" alt="Github link" width={20} height={20} />

          <Maximize
            size={18}
            className="text-gray-600 cursor-pointer ml-auto"
          />
        </div>
      </article>
    </section>
  );
};
