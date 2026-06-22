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
          I experiment with AI agents to get more done with less effort.
          Founding engineer at VC-backed startups, led teams across mobile and infrastructure.
          Currently leading full stack at Huddle01.
        </p>
        <div className={styles.ctaRow}>
          <a href="#work"><button className={`${styles.btn} ${styles.btnPrimary}`}>See what I&rsquo;ve built</button></a>
        </div>
      </div>
    </section>
  );
};
