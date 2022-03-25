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
import Head from "next/head";
// import { CaseStudy } from "../src/components/CaseStudy/CaseStudy";
// import { getCaseStudyData } from "../src/data/casestudy";

interface HomeProps {
  projects: ProjectRes[];
  blogs: BlogRes[];
  casestudies: CaseStudyType[];
}

const Home: NextPage<HomeProps> = ({ projects, blogs }) => {
  return (
    <>
      <Head>
        <title>Darshan Ponikar | The Journey of Full Stack Developer. 👨🏻‍💻</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Hi 👋. I am Darshan Ponikar. Working as Full Stack Developer at
          Geekyants. Currently working with React + JavaScript/TypeScript. I am
          Passionate about building Products. I explore new things on Weekends.
          DM me for a quick chat."
        />
        <meta
          name="keywords"
          content="web dev, javascripts, css3, typescript, react, nextjs, frontend, backend, developer, learn"
        />

        <meta
          property="og:title"
          content=" Darshan Ponikar | The Journey of Full Stack Developer. 👨🏻‍💻"
        />
        <meta property="og:url" content="http://bonfireapp.in" />
        <meta
          property="og:image"
          content="https://www.itsponikar.tech/assets/imgs/cover_image.png"
        />
        <meta property="og:site_name" content="Darshan Ponikar" />

        <meta
          name="twitter:title"
          content="Darshan Ponikar | The Journey of Full Stack Developer. 👨🏻‍💻"
        />
        <meta
          name="twitter:description"
          content="Hi 👋. I am Darshan Ponikar. Working as Full Stack Developer at
          Geekyants. Currently working with React + JavaScript/TypeScript. I am
          Passionate about building Products. I explore new things on Weekends.
          DM me for a quick chat."
        />

        <meta
          name="twitter:image"
          content="https://www.itsponikar.tech/assets/imgs/cover_image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Darshan's Portfolio Preview" />
      </Head>
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
    </>
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
