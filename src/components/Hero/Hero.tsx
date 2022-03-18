/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "../SocialIcon";
import { SocialLink } from "../SocialLinks/SocialLink";
import styles from "./hero.module.css";
export const Hero = () => {
  const [acl, setAcl] = useState("Shake your phone");
  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions.query({
        name: "accelerometer" as any,
      });
      let acl = new Accelerometer({ frequency: 60 });
      acl.addEventListener("reading", () => {
        setAcl(`${acl.x}:${acl.y}`);
      });

      acl.start();
    }
  }, []);
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
        <h2 className="sf text-5xl ">The Journey of Full Stack Developer.</h2>
        <p className="mt-3 text-sm mx-auto w-8/12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          eveniet, ratione eaque, praesentium mollitia dicta nihil quis incidunt
          nesciunt repellat obcaecati.
        </p>
        {acl}
      </div>

      <div className="mt-10">
        <SocialLink />
      </div>
    </section>
  );
};
