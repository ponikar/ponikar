import React, { FC } from "react";
import { SocialIcon } from "../SocialIcon";

export const SocialLink: FC = () => {
  return (
    <div className="flex items-center gap-4">
      <SocialIcon src="gh.svg" alt="Github Logo" />
      <SocialIcon src="tw.svg" alt="Twitter Logo" />
      <SocialIcon src="ld.svg" alt="Linkedin Logo" />
      <SocialIcon src="dev.svg" alt="Dev Community Logo" />
      <SocialIcon src="discord.svg" alt="Discord Logo" />
    </div>
  );
};