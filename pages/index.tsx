import type { NextPage } from "next";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";

const Home: NextPage = () => {
  return (
    <div className="h-full">
      <Header />
      <Hero />
      <div className="h-full bg-white"></div>
    </div>
  );
};

export default Home;
