import type { NextPage } from "next";
import { Blogs } from "../src/components/Blogs";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { Projects } from "../src/components/Projects";
import { Talks } from "../src/components/Talks";

const Home: NextPage = () => {
  return (
    <div className="h-full">
      <Header />
      <Hero />
      <Projects />
      <Blogs />
      <Talks />
    </div>
  );
};

export default Home;
