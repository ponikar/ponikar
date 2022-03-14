import Image, { ImageProps } from "next/image";
import React from "react";

export const SocialIcon = (props: ImageProps) => {
  return (
    <Image
      height={25}
      width={25}
      alt=""
      {...props}
      src={`/assets/icons/${props.src}`}
    />
  );
};
