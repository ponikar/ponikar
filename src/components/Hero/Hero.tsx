import Image from "next/image";
import React from "react";
import { SocialIcon } from "../SocialIcon";
import { SocialLink } from "../SocialLinks/SocialLink";
import styles from "./hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={`${styles.mesh_effect_1} ${styles.mesh_effect}`} />
      <div className={`${styles.mesh_effect_2} ${styles.mesh_effect}`} />
      <div className={`${styles.mesh_effect_3} ${styles.mesh_effect}`} />

      <div className={styles.overlay}></div>
      <div>
        <h2 className="sf text-5xl ">The Journey of Full Stack Developer.</h2>
        <p className="mt-3 text-sm mx-auto w-8/12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          eveniet, ratione eaque, praesentium mollitia dicta nihil quis incidunt
          nesciunt repellat obcaecati.
        </p>
      </div>

      <div className="mt-10">
        <SocialLink />
      </div>
    </section>
  );
};
