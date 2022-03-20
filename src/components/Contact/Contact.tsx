import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { supabase } from "../../utils/supabase";
import { BlockButton, Input } from "../Input";
import { TextArea } from "../Input/Input";
import { Section } from "../Section";
import { SocialLink } from "../SocialLinks/SocialLink";
import { Toast } from "../Toast";

const DEFAULT_STATE = {
  email: "",
  message: "",
  name: "",
};
export const Contact = () => {
  const [contacts, setContacts] = useState(DEFAULT_STATE);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit: FormEventHandler = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const { status } = await supabase.from("contacts").insert(contacts);

      if (status !== 201) throw new Error("Something went wrong!");

      setContacts(DEFAULT_STATE);
      setMessage("🚀 I will reach out to you soon!");
    } catch (e) {
      setMessage("💔 Something went wrong!");
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e
  ) => setContacts({ ...contacts, [e.target.name]: e.target.value });

  return (
    <Section title="" id="say_hi">
      <div className="lg:w-5/12 md:w-10/12 w-full mx-auto p-4 border bg-white default_shadow">
        <h3 className="text-center text-4xl mb-3 sf">Say Hi!</h3>
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
          <Input
            onChange={onChange}
            name="email"
            type="email"
            required
            value={contacts.email}
            label="Email*"
            placeholder="jake@b99.com"
          />
          <Input
            name="name"
            onChange={onChange}
            required
            label="Name*"
            value={contacts.name}
            placeholder="Amy Santiago"
          />
          <TextArea
            required
            name="message"
            onChange={onChange}
            placeholder="Anything related to Full Stack Development, Public Speaking, Sitcoms."
            label="Message*"
            value={contacts.message}
          />
          <BlockButton type="submit" isLoading={isLoading}>
            SEND
          </BlockButton>
        </form>

        <div className="flex gap-2  items-center mt-5">
          <hr className="flex-1" />
          <span className="text-xs text-gray-500">OR</span>
          <hr className="flex-1" />
        </div>
        <div className="flex mt-5 justify-center">
          <SocialLink />
        </div>
      </div>
      {message && <Toast text={message} />}
    </Section>
  );
};
