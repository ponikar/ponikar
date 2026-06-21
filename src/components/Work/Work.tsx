import { FC } from "react";
import styles from "./Work.module.css";

type Project = {
  tag: string;
  name: string;
  desc: string;
  pills: string[];
  link: string;
  linkLabel: string;
};

type Company = {
  name: string;
  tagline: string;
  projects: Project[];
};

const companies: Company[] = [
  {
    name: "Huddle01",
    tagline: "Decentralized real-time communication",
    projects: [
      {
        tag: "Infrastructure · Real-time",
        name: "The Terminal",
        desc: "A trading platform that works across every market. Crypto, commodities, equities, memecoins. On-chain, self-custodied, 24/7. I built the indexer that makes that possible. It parses Solana transactions as they happen, tracks every token from its first liquidity event, and ranks everything without ever touching OHLCV data. The hot path never hits a database. Background workers recalculate as new data arrives. Thousands of events per second, single node, zero loss.",
        pills: ["Redis", "ClickHouse", "PostgreSQL", "Bun"],
        link: "https://x.theterminal.trade",
        linkLabel: "x.theterminal.trade →",
      },
      {
        tag: "Mobile · WebRTC",
        name: "Huddle01 Meet",
        desc: "When I joined, there was no mobile team. No codebase, no roadmap. We needed a video conferencing app that could compete with Zoom, built on WebRTC technology that wasn't designed for this scale. I led the team and built the architecture. Extended React Native where it couldn't reach with custom native modules. Built Metal shaders for 120 FPS video rendering. Pushed the platform to 600+ participants in a single room. Took crash rates from 5% down to 0.01% on low-end Android. I rewrote the rendering pipeline twice to get there.",
        pills: ["React Native", "WebRTC", "Metal", "TypeScript"],
        link: "https://huddle01.com",
        linkLabel: "huddle01.com →",
      },
      {
        tag: "Mobile · Real-time Audio",
        name: "FarHouse / House",
        desc: "Farcaster had no native audio spaces. Anyone who wanted live conversations had to leave the ecosystem. I built FarHouse to fix that. It was the first audio spaces app for Farcaster, built from scratch for iOS and Android. The hardest part: iOS kills WebRTC connections the second an app goes to the background. I found a way to keep audio alive. 50K downloads in the first few months. The app later became House.",
        pills: ["React Native", "WebRTC", "iOS", "Android"],
        link: "",
        linkLabel: "",
      },
    ],
  },
  {
    name: "Nintee",
    tagline: "AI-native startup, rapid product experimentation",
    projects: [
      {
        tag: "Mobile · AI",
        name: "Nintee Community App",
        desc: "Nintee shipped 3 to 4 production-grade prototypes every 2 months. Speed was the whole strategy. I built the Community app for iOS and Android using React Native. Designed a reusable UI system that accelerated every experiment after it. Built AI agentic flows directly into the app. Text-to-action interactions where you didn't chat with an AI, you just did what you needed to do. Smooth, fast, production-ready across platforms.",
        pills: ["React Native", "TypeScript", "AI Agents", "iOS"],
        link: "",
        linkLabel: "",
      },
      {
        tag: "Mobile · Gaming",
        name: "WordRally",
        desc: "We needed real user data to validate hypotheses. So I built a word game. Shipped it to markets where user acquisition was cheap, watched the retention curves, iterated fast. D1 retention hit 25%. Average playtime climbed from 90 seconds to 8 minutes. The game was simple. The data loop was the real product.",
        pills: ["React Native", "Game Dev", "Mobile", "Analytics"],
        link: "",
        linkLabel: "",
      },
      {
        tag: "AI · Infrastructure",
        name: "RAG & AI Systems",
        desc: "Before AI agents were a term anyone used, I was building RAG systems. Personalized document ingestion, embedding, retrieval, generation. No frameworks, no libraries, no playbook. Just figuring it out as the field was being invented. The system could ingest a user's documents and answer questions against them with surprising accuracy.",
        pills: ["RAG", "LLMs", "Vector Search", "Python"],
        link: "",
        linkLabel: "",
      },
      {
        tag: "AI · Experimental",
        name: "Gen-UI Agent",
        desc: "Every AI interaction at the time was a wall of text. I built an experimental agent that could generate interactive UI from a prompt. Predefined UI blocks, rule-based rendering. Instead of describing a list, the AI rendered a component. Instead of typing, you tapped and swiped. The AI felt visual instead of verbal. Ahead of its time, but it worked.",
        pills: ["Gen-UI", "React Native", "LLMs", "Rules Engine"],
        link: "",
        linkLabel: "",
      },
    ],
  },
];

export const Work: FC = () => {
  return (
    <section id="work" className={styles.section}>
      <p className={styles.label}><span>01</span>Work &amp; Projects</p>
      {companies.map((company) => (
        <div key={company.name} className={styles.companyGroup}>
          <div className={styles.companyHeader}>
            <p className={styles.companyName}>{company.name}</p>
            <p className={styles.companyTagline}>{company.tagline}</p>
          </div>
          <div className={styles.grid}>
            {company.projects.map((p, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.cardTag}>{p.tag}</p>
                <p className={styles.cardName}>{p.name}</p>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.cardMeta}>
                  {p.pills.map((pill) => (
                    <span key={pill} className={styles.pill}>{pill}</span>
                  ))}
                </div>
                {p.link && <a href={p.link} className={styles.cardLink}>{p.linkLabel}</a>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
