import Image, { ImageProps } from "next/image";
import React, { HTMLAttributes } from "react";

export const SocialIcon = ({
  href,
  ...props
}: ImageProps & { href: string }) => {
  return (
    <a href={href}>
      <Image
        height={25}
        width={25}
        alt=""
        {...props}
        src={`/assets/icons/${props.src}`}
      />
    </a>
  );
};
