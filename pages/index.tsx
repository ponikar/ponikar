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
          content="Hi 👋. I am Darshan Ponikar, a Senior Software Engineer. I specialize
          in building Web/Mobile Applications using technologies like
          React/React Native. I am Passionate about building Products. I explore
          new things on weekends. DM me for a quick chat."
        />
        <meta
          name="keywords"
          content="web dev, javascripts, css3, typescript, react, nextjs, frontend, backend, developer, learn"
        />

        <meta
          property="og:title"
          content=" Darshan Ponikar | The Journey of Full Stack Developer. 👨🏻‍💻"
        />
        <meta property="og:image" content="/assets/imgs/cover_image.png" />
        <meta property="og:site_name" content="Darshan Ponikar" />

        <meta
          name="twitter:title"
          content="Darshan Ponikar | The Journey of Full Stack Developer. 👨🏻‍💻"
        />
        <meta
          name="twitter:description"
          content=" Hi 👋. I am Darshan Ponikar, a Senior Software Engineer. I specialize
          in building Web/Mobile Applications using technologies like
          React/React Native. I am Passionate about building Products. I explore
          new things on weekends. DM me for a quick chat."
        />

        <meta name="twitter:image" content="/assets/imgs/cover_image.png" />
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
  // const projects = await getRequest<ProjectRes[]>(
  //   "https://gh-pinned-repos.egoist.sh/?username=ponikar"
  // );

  const blogs = await getRequest<BlogRes[]>(
    "https://dev.to/api/articles?username=ponikar"
  );

  return {
    props: {
      projects: [
        {
          owner: "ponikar",
          repo: "p2p",
          link: "https://github.com/ponikar/p2p",
          description: "P2P meeting web application building in React",
          image: "https://opengraph.githubassets.com/1/ponikar/p2p",
          language: "TypeScript",
          languageColor: "#2b7489",
          stars: "2",
          forks: 0,
        },
        {
          owner: "ponikar",
          repo: "mememe",
          link: "https://github.com/ponikar/mememe",
          description: "Web base application let you build message memes.",
          image: "https://opengraph.githubassets.com/1/ponikar/mememe",
          language: "TypeScript",
          languageColor: "#2b7489",
          stars: "1",
          forks: 0,
        },
        {
          owner: "ponikar",
          repo: "basic-express-js",
          link: "https://github.com/ponikar/basic-express-js",
          description: "Working with Basic Concept of express js with Mongo DB",
          image:
            "https://opengraph.githubassets.com/1/ponikar/basic-express-js",
          language: "JavaScript",
          languageColor: "#f1e05a",
          stars: 0,
          forks: 0,
        },
        {
          owner: "ponikar",
          repo: "p2p-server",
          link: "https://github.com/ponikar/p2p-server",
          description:
            "Signaling Server for P2P Client with TypeScript Rocks and MongoDB",
          image: "https://opengraph.githubassets.com/1/ponikar/p2p-server",
          language: "TypeScript",
          languageColor: "#2b7489",
          stars: 0,
          forks: 0,
        },
        {
          owner: "ponikar",
          repo: "ponikar-archive",
          link: "https://github.com/ponikar/ponikar-archive",
          image: "https://opengraph.githubassets.com/1/ponikar/ponikar-archive",
          language: "TypeScript",
          languageColor: "#2b7489",
          stars: 0,
          forks: 0,
        },
      ],
      blogs: blogs.data,
    },
  };
};

export default Home;
