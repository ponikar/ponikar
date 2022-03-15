import React from "react";
import { Section } from "../Section";
import { TalkCard } from "../TalkCard";

export const Talks = () => {
  return (
    <Section title="Talks" contentClassName="grid grid-cols-2 gap-5">
      <TalkCard />
      <TalkCard />
    </Section>
  );
};
