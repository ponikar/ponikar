import fs from "fs";
import path from "path";

const targetDir = path
  .join
  // `${__dirname.split("portfolio")[0]}portfolio/`,
  // "/src/markdown/casestudy"
  ();
export const getCaseStudyPaths = () => {
  const files = fs.readdirSync(targetDir);

  return files.map((path) => path.split(".")[0]);
};

export const readMarkdownFile = (fileName: string) => {
  return fs.readFileSync(`${targetDir}/${fileName}.md`, "utf-8");
};
``;
