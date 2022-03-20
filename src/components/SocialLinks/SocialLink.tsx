import React, { FC } from "react";
import { SocialIcon } from "../SocialIcon";

export const SocialLink: FC = () => {
  return (
    <div className="flex items-center gap-4">
      <SocialIcon
        href="https://github.com/ponikar"
        src="gh.svg"
        alt="Github Logo"
      />
      <SocialIcon
        href="https://twitter.com/iponikar"
        src="tw.svg"
        alt="Twitter Logo"
      />
      <SocialIcon
        href="https://www.linkedin.com/in/ponikar/"
        src="ld.svg"
        alt="Linkedin Logo"
      />
      <SocialIcon
        href="https://dev.to/ponikar"
        src="dev.svg"
        alt="Dev Community Logo"
      />
      <SocialIcon
        href="https://discord.com/users/iponikar#1976"
        src="discord.svg"
        alt="Discord Logo"
      />
    </div>
  );
};
