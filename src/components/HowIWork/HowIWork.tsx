import { FC } from "react";
import styles from "./HowIWork.module.css";

const items = [
  {
    title: "Ship first, refine after",
    body: "I've built entire products by myself under real time pressure. That teaches you to make calls quickly, cut what doesn't matter, and keep moving. I'd rather have something real in front of users than something perfect in a doc.",
  },
  {
    title: "Learn by building",
    body: "Solana, ClickHouse, AI agents. None of these were things I knew deeply when I started. I read enough to get going, then build until I actually understand it. That's just how I work.",
  },
  {
    title: "Small teams, real ownership",
    body: "I've led small mobile teams and worked alone. I prefer environments where people take real ownership. Where you're not waiting on a ticket, you're deciding what to build next.",
  },
  {
    title: "Full stack, genuinely",
    body: "Mobile, web, backend, AI pipelines. I've worked across all of it. Not because I'm trying to be a generalist, but because the problems I find interesting don't stay in one layer.",
  },
];

export const HowIWork: FC = () => {
  return (
    <section id="how" className={styles.section}>
      <p className={styles.label}><span>05</span>How I work</p>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.cardTitle}>{item.title}</p>
            <p className={styles.cardBody}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
