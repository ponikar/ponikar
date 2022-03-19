import Image from "next/image";
import React, { FC } from "react";
import { Heart, MessageCircle } from "react-feather";
import { BlogRes } from "../../../@types/res";
import { Content } from "../Card";
import { IconLabel } from "../IconLabel";
export const BlogCard: FC<BlogRes> = ({
  title,
  description,
  cover_image,
  url,
  positive_reactions_count,
  published_timestamp,
  tag_list,
  comments_count,
  reading_time_minutes,
}) => {
  return (
    <a
      className="border rounded p-4"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="mb-1 overflow-hidden -m-4">
        <Image
          src={cover_image}
          alt={title}
          width={1000}
          objectFit="contain"
          height={425}
          className="rounded-t"
        />
      </div>
      <h3 className="text-2xl mb-2 font-medium"> {title} </h3>
      <div className="flex flex-wrap gap-2 text-xs my-2">
        {tag_list.map((tag) => (
          <span className="bg-gray-200" key={tag}>
            #{tag}{" "}
          </span>
        ))}
      </div>
      <div className="my-1 text-gray-600 text-xs  flex gap-2">
        <p>{reading_time_minutes} min read</p> &bull;
        <p>{new Date(published_timestamp).toLocaleDateString()}</p>
      </div>
      <Content contentLine={4}>{description}</Content>
      <div className="flex mt-3 items-center text-xs gap-3 text-gray-400">
        <IconLabel>
          <MessageCircle size={17} /> {comments_count}
        </IconLabel>
        <IconLabel>
          <Heart size={18} className="" /> {positive_reactions_count}
        </IconLabel>
      </div>
    </a>
  );
};
