import React from "react";
import { CaseStudyCard } from "../CaseStudyCard";
import { Section } from "../Section";

export const CaseStudy = () => {
  return (
    <Section title="Project CaseStudy" contentClassName="grid grid-cols-3">
      <CaseStudyCard />
    </Section>
  );
};
