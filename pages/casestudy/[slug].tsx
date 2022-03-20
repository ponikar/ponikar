import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getCaseStudyPaths, readMarkdownFile } from "../../src/utils/markdown";
import { Header } from "../../src/components/Header";

const components = { Heading: () => <h2>Hello world!</h2> };

const Post: NextPage<{ source: any }> = ({ source }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="lg:w-6/12 border w-11/12 mx-auto mt-20">
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getCaseStudyPaths();

  console.log("paths", paths);
  return {
    paths: paths.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: true, // false   or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<any, { slug: string }> = async (
  props
) => {
  // MDX text - can be from a local file, database, anywhere
  const source = readMarkdownFile(props.params.slug || "");
  const mdxSource = await serialize(source);

  return { props: { source: mdxSource } };
};
