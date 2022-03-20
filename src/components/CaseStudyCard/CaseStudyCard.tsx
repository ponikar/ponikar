import Image from "next/image";
import React from "react";
import { Content } from "../Card";

export const CaseStudyCard = () => {
  return (
    <div className="bg-white default_shadow p-4">
      <div className="mb-1 overflow-hidden -m-4">
        <Image
          src="/assets/imgs/shopty.jpeg"
          alt="Shopty.in"
          width={1000}
          objectFit="cover"
          height={425}
        />
      </div>
      <h3 className="text-2xl mb-2 font-medium"> Shopty.in </h3>

      <div className="my-1 text-gray-600 text-xs  flex gap-2">
        <p>2 min read</p> &bull;
        <p>today</p>
      </div>
      <Content contentLine={4}>
        This is description. You will likely to see this in every element.
      </Content>
    </div>
  );
};
