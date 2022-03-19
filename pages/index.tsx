import type { GetStaticProps, NextPage } from "next";
import { Blogs } from "../src/components/Blogs";
import { Contact } from "../src/components/Contact";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { Projects } from "../src/components/Projects";
import { Talks } from "../src/components/Talks";
import { BlogRes, ProjectRes } from "../@types/res";
import { getRequest } from "../src/utils/api";

interface HomeProps {
  projects: ProjectRes[];
  blogs: BlogRes[];
}

const Home: NextPage<HomeProps> = ({ projects, blogs }) => {
  return (
    <div className="h-full">
      <Header />
      <Hero />
      <Projects projects={projects} />
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

  return {
    props: { projects: projects.data, blogs: blogs.data },
  };
};

export default Home;
