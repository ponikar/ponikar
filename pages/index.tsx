import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../src/components/Navbar/Navbar";
import { Hero } from "../src/components/Hero/Hero";
import { Work } from "../src/components/Work/Work";
import { Writing } from "../src/components/Writing/Writing";
import { AIWorkflow } from "../src/components/AIWorkflow/AIWorkflow";
import { About } from "../src/components/About/About";
import { HowIWork } from "../src/components/HowIWork/HowIWork";
import { Books } from "../src/components/Books/Books";
import { Contact } from "../src/components/Contact/Contact";
import { Footer } from "../src/components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Darshan Ponikar</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Mobile, backend, AI. I build products from scratch. Whatever it takes."
        />
        <meta
          name="keywords"
          content="darshan ponikar, software engineer, react native, mobile developer, full stack"
        />
        <meta property="og:title" content="Darshan Ponikar" />
        <meta property="og:description" content="Mobile, backend, AI. I build products from scratch. Whatever it takes." />
        <meta property="og:site_name" content="Darshan Ponikar" />
        <meta name="twitter:title" content="Darshan Ponikar" />
        <meta name="twitter:description" content="Mobile, backend, AI. I build products from scratch. Whatever it takes." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <Hero />
      <Work />
      <Writing />
      <AIWorkflow />
      <About />
      <HowIWork />
      <Books />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
