import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CaseStudyType } from "../../../@types/res";
import { Content } from "../Card";

export const CaseStudyCard: FC<CaseStudyType> = (props) => {
  return (
    <Link passHref href={`casestudy/${props.slug}`}>
      <div className="bg-white cursor-pointer default_shadow p-4">
        <div className="mb-1 overflow-hidden -m-4">
          <Image
            src="/assets/imgs/shopty.jpeg"
            alt="Shopty.in"
            width={1000}
            objectFit="cover"
            height={425}
          />
        </div>
        <h3 className="text-2xl mb-2 font-medium"> {props.title} </h3>

        <div className="my-1 text-gray-600 text-xs  flex gap-2">
          <p>{props.reading_time} min read</p> &bull;
          <p>{props.created_at}</p>
        </div>
        <Content contentLine={4}>{props.description}</Content>
      </div>
    </Link>
  );
};
