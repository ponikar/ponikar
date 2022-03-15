import React, { FC } from "react";

interface TalkCardProps {
  src: string;
  title?: string;
}
export const TalkCard: FC<TalkCardProps> = ({ src, title }) => {
  return (
    <iframe
      className="w-full"
      height="315"
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
