import type { GetStaticProps, NextPage } from "next";
import { Blogs } from "../src/components/Blogs";
import { Contact } from "../src/components/Contact";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { Projects } from "../src/components/Projects";
import { Talks } from "../src/components/Talks";
import { BlogRes, CaseStudyType, ProjectRes } from "../@types/res";
import { getRequest } from "../src/utils/api";
// import { CaseStudy } from "../src/components/CaseStudy/CaseStudy";
// import { getCaseStudyData } from "../src/data/casestudy";

interface HomeProps {
  projects: ProjectRes[];
  blogs: BlogRes[];
  casestudies: CaseStudyType[];
}

const Home: NextPage<HomeProps> = ({ projects, blogs, casestudies }) => {
  return (
    <div className="h-full">
      <Header />
      <Hero />
      <Projects projects={projects} />
      {/* <CaseStudy casestudies={casestudies} /> */}
      <Blogs blogs={blogs} />
      <Talks />
      <Contact />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getRequest<ProjectRes[]>(
    "https://gh-pinned-repos.egoist.sh/?username=ponikar"
  );

  const blogs = await getRequest<BlogRes[]>(
    "https://dev.to/api/articles?username=ponikar"
  );

  // const casestudies = await getCaseStudyData();

  return {
    props: { projects: projects.data, blogs: blogs.data },
  };
};

export default Home;
