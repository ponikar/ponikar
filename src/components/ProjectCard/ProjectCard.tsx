import Image from "next/image";
import React, { FC } from "react";
import { Link, Maximize } from "react-feather";
import { ProjectRes } from "../../../@types/res";
import { getIcons } from "../../utils/icons";
import { Content } from "../Card";
import { Label } from "../Label/Label";
import { SocialIcon } from "../SocialIcon";
import styles from "./projectcard.module.css";

export const ProjectCard: FC<ProjectRes> = ({
  image,
  repo,
  description,
  link,
  language,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="default_shadow bg-white p-4 "
      rel="noreferrer"
    >
      <article className="flex flex-col gap-2">
        <div className={styles.img_container}>
          <Image
            src={image}
            alt={repo}
            width={400}
            objectFit="cover"
            height={200}
            className="rounded-lg mb-3"
          />
        </div>
        <div className="flex -mx-4 px-4 py-2 border-t border-t-black items-center justify-between">
          <h3 className="text-3xl font-medium"> {repo} </h3>
          {getIcons[language] && (
            <SocialIcon
              src={getIcons[language]}
              alt="Github link"
              width={30}
              height={30}
            />
          )}
        </div>
        <Content contentLine={3}>{description}</Content>

        <div className="my-1 items-center justify-between flex gap-3"></div>
      </article>
    </a>
  );
};
