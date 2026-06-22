import { FC } from "react";
import styles from "./Writing.module.css";

const posts = [
  { title: "0 to 1: Working in a Startup as Software Engineer", link: "https://dev.to/ponikar/0-to-1-working-in-a-startup-as-software-engineer-4jlp" },
  { title: "OTA Updates in React Native", link: "https://dev.to/ponikar/ota-updates-in-react-native-1pbo" },
  { title: "React Native is Multi-Threaded", link: "https://dev.to/ponikar/react-native-is-multi-threaded-44aj" },
  { title: "Building an AI Agent That Commits and Raises PRs from Your Phone", link: "https://dev.to/ponikar/building-an-ai-agent-that-commits-and-raises-prs-from-your-phone-1n78" },
];

export const Writing: FC = () => {
  return (
    <section id="writing" className={styles.section}>
      <p className={styles.label}><span>02</span>Blog</p>
      <p className={styles.intro}>I write about what I build. Occasionally about why.</p>
      <div className={styles.list}>
        {posts.map((post, i) => (
          <a key={i} href={post.link} target="_blank" rel="noreferrer" className={styles.row}>
            <p className={styles.title}>{post.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
