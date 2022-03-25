import React, { FC } from "react";
import { CaseStudyType } from "../../../@types/res";
import { CaseStudyCard } from "../CaseStudyCard";
import { Section } from "../Section";

interface CaseStudyProps {
  casestudies: CaseStudyType[];
}
export const CaseStudy: FC<CaseStudyProps> = ({ casestudies }) => {
  return (
    <Section title="Project CaseStudy" contentClassName="grid grid-cols-3">
      {casestudies.map((casestudy, index) => (
        <CaseStudyCard key={index} {...casestudy} />
      ))}
    </Section>
  );
};
