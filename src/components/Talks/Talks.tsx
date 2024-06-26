import React from "react";
import { Section } from "../Section";
import { TalkCard } from "../TalkCard";

export const Talks = () => {
  return (
    <Section
      title="Talks"
      contentClassName="grid lg:grid-cols-2 grid-cols-1 gap-5"
    >
      <TalkCard src="https://www.youtube.com/embed/BUZDNRiHC94" />
      <TalkCard src="https://www.youtube.com/embed/BzI7sCyzO1k" />
      <TalkCard src="https://www.youtube.com/embed/yozrVdlPXN4" />
      <TalkCard src="https://www.youtube.com/embed/XJPQ4al7dZ4" />
      <TalkCard src="https://www.youtube.com/embed/ICMduvDJLek" />
    </Section>
  );
};
