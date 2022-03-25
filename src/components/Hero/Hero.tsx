/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SocialLink } from "../SocialLinks/SocialLink";
import styles from "./hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <img
        src="/assets/imgs/mesh_1.svg"
        alt=""
        className={`${styles.mesh_effect_1} ${styles.mesh_effect}`}
      />
      <img
        src="/assets/imgs/mesh_2.svg"
        alt=""
        className={`${styles.mesh_effect_2} ${styles.mesh_effect}`}
      />
      <div className={styles.overlay}></div>
      <div>
        <h2 className="sf lg:text-5xl text-4xl font-medium w-full mx-auto">
          The Journey of Full Stack Developer.
        </h2>
        <p className="mt-3 md:text-base text-sm mx-auto lg:w-6/12 md:w-9/12 w-11/12">
          Hi 👋. I am Darshan Ponikar. Working as Full Stack Developer at
          Geekyants. Currently working with React + JavaScript/TypeScript. I am
          Passionate about building Products. I explore new things on Weekends.
          DM me for a quick chat.
        </p>
      </div>

      <div className="mt-10">
        <SocialLink />
      </div>
    </section>
  );
};
