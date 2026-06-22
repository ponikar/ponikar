import { FC } from "react";
import styles from "./Contact.module.css";

const links = [
  { name: "Email", handle: "itsponikar@gmail.com", href: "mailto:itsponikar@gmail.com" },
  { name: "Twitter / X", handle: "@ponikar", href: "https://twitter.com/ponikar" },
  { name: "GitHub", handle: "github.com/ponikar", href: "https://github.com/ponikar" },
  { name: "LinkedIn", handle: "linkedin.com/in/ponikar", href: "https://linkedin.com/in/ponikar" },
  { name: "Website", handle: "ponikar.com", href: "https://ponikar.com" },
];

export const Contact: FC = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}><span>07</span>Contact</p>
          <h2 className={styles.heading}>
            Let&rsquo;s talk.<br />
            <span className={styles.dim}>I don&rsquo;t bite.</span>
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.sub}>
            If you&rsquo;re building something interesting and need someone who can own things end to end, I&rsquo;d love to hear about it. Happy to talk shop about real-time systems, AI, or whatever you&rsquo;re working through.
          </p>
          <div className={styles.linkList}>
            {links.map((link, i) => (
              <a key={i} href={link.href} target={link.href.startsWith("mailto") ? undefined : "_blank"} className={styles.linkRow} rel="noreferrer">
                <span className={styles.linkName}>{link.name}</span>
                <span className={styles.linkHandle}>{link.handle} <span className={styles.arrow}>↗</span></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
