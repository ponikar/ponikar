import { FC } from "react";
import styles from "./Writing.module.css";

const posts = [
  { title: "OTA Updates in React Native: The Complete Guide", tag: "Mobile", date: "20K+ views" },
  { title: "How I Got WebRTC to 120 FPS on Mobile", tag: "Performance", date: "2024" },
  { title: "Building a Real-time Token Ranking System with Redis", tag: "Infrastructure", date: "2025" },
  { title: "Solana Transaction Parsing at Scale: What I Learned", tag: "Blockchain", date: "2025" },
  { title: "Why I Turned Down the Bangalore Offer", tag: "Career", date: "2025" },
];

export const Writing: FC = () => {
  return (
    <section id="writing" className={styles.section}>
      <p className={styles.label}><span>02</span>Writing</p>
      <p className={styles.intro}>I write about what I build. Occasionally about why.</p>
      <div className={styles.list}>
        {posts.map((post, i) => (
          <div key={i} className={styles.row}>
            <p className={styles.title}>{post.title}</p>
            <div className={styles.meta}>
              <span className={styles.tag}>{post.tag}</span>
              <span className={styles.date}>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
