import React from "react";
import { BlockButton, Input } from "../Input";
import { TextArea } from "../Input/Input";
import { Section } from "../Section";
import { SocialLink } from "../SocialLinks/SocialLink";

export const Contact = () => {
  return (
    <Section title="">
      <div className="lg:w-5/12 md:w-10/12 w-full mx-auto p-4 border bg-white border-black">
        <h3 className="text-center text-4xl mb-3 sf">Say Hi!</h3>
        <div className="flex flex-col gap-8">
          <Input label="Email" placeholder="jake@b99.com" />
          <Input label="Name" placeholder="Amy Santiago" />
          <TextArea
            placeholder="Anything related to Full Stack Development, Public Speaking, Sitcoms."
            label="Message"
          />
          <BlockButton isLoading={false}>SEND</BlockButton>
        </div>

        <div className="flex gap-2  items-center mt-5">
          <hr className="flex-1" />
          <span className="text-xs text-gray-500">OR</span>
          <hr className="flex-1" />
        </div>
        <div className="flex mt-5 justify-center">
          <SocialLink />
        </div>
      </div>
    </Section>
  );
};
