import { FC, useEffect, useRef } from "react";
import styles from "./About.module.css";

const paragraphs = [
  "I'm Darshan. I've been building software since before I knew what a career was. Most of my time goes into experimenting with AI agents and LLMs, but I don't limit myself to one layer of the stack.",
  "I started at Nintee building AI agents when most people hadn't heard of LangChain. Then joined Huddle01 early, built the entire mobile app by myself, and watched it grow to tens of thousands of users. These days I lead the mobile team there and quietly ship my own things on the side.",
  "I'm drawn to problems that feel slightly too hard. Not for the difficulty itself, but because that's where the interesting work is. Where you have to actually think, not just execute.",
  "Outside of work I journal, I have a rooftop cafe I disappear to when I need to think, and I read more than I probably talk about.",
];

export const About: FC = () => {
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return;
      const isLast = i === paragraphs.length - 1;
      el.style.opacity = "0.15";
      if (isLast) el.style.color = "var(--text3)";
      const observer = new IntersectionObserver(
        ([entry]) => {
          const ratio = Math.min(entry.intersectionRatio * 1.5, 1);
          el.style.opacity = String(ratio);
          if (isLast) {
            el.style.color = ratio > 0.8 ? "var(--text2)" : "var(--text3)";
          }
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="who" className={styles.section}>
      <p className={styles.label}><span>04</span>Who I am</p>
      <div className={styles.inner}>
        {paragraphs.map((text, i) => (
          <p
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            className={styles.p}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};
