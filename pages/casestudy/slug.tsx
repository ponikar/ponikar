import Image from "next/image";
// import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { NextPage } from "next";
// import { getCaseStudyPaths, readMarkdownFile } from "../../src/utils/markdown";
import { Header } from "../../src/components/Header";
import { Alert } from "../../src/components/Alert";
const components = { Heading: () => <h2>Hello world!</h2> };

const CaseStudy: NextPage<{ source: any }> = ({ source }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="w-full mt-19">
        <Image
          src="/assets/imgs/shopty.jpeg"
          objectFit="cover"
          width={2000}
          height={800}
          alt=""
        />
      </div>
      <div className="lg:w-6/12 w-11/12 mx-auto mt-20">
        <Alert>
          Hello 👋🏻! Welcome to the series of CaseStudy! In this series, I share
          my experience of my past projects. This series is not about side
          projects. It&apos;s about the commercial projects which I deployed to
          the real world. If you are having any questions or doubts feel free to
          ping me. 😁
        </Alert>
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
};

export default CaseStudy;

// export const getStaticPaths: GetStaticPaths = () => {
//   const paths = getCaseStudyPaths();

//   return {
//     paths: paths.map((slug) => ({
//       params: {
//         slug,
//       },
//     })),
//     fallback: true, // false   or 'blocking'
//   };
// };

// export const getStaticProps: GetStaticProps<any, { slug: string }> = async (
//   props
// ) => {
//   const source = props.params?.slug ? readMarkdownFile(props.params.slug) : "";
//   const mdxSource = await serialize(source);

//   return { props: { source: mdxSource } };
// };
