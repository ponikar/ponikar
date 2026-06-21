import { FC } from "react";
import styles from "./Hero.module.css";

export const Hero: FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Open to new opportunities
        </div>
        <h1 className={styles.headline}>
          I build products<br />
          <span className={styles.dim}>from scratch.</span><br />
          Whatever it takes.
        </h1>
        <p className={styles.sub}>
          Mobile, backend, AI. I pick up what the problem needs and figure it out.
          Currently leading mobile at Huddle01 and shipping my own ideas on the side.
          Based in Surat, India.
        </p>
        <div className={styles.ctaRow}>
          <a href="#work"><button className={`${styles.btn} ${styles.btnPrimary}`}>See what I&rsquo;ve built</button></a>
        </div>
      </div>
    </section>
  );
};
