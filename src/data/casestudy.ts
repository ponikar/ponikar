import { CaseStudyType } from "../../@types/res";

export const CaseStudies: Record<CaseStudyType["slug"], CaseStudyType> = {
  shopty: {
    title: "Shopty.in",
    slug: "shopty-case-study",
    description: "",
    cover_image: "",
    reading_time: "",
    created_at: "",
    icon: "",
  },
};

export const getCaseStudyData = (): CaseStudyType[] => {
  return Object.values(CaseStudies);
};
