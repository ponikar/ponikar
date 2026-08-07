import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const metrics = [
  { value: "100K+", label: "downloads across iOS and Android" },
  { value: "3", label: "engineers on the Huddle01 Meet mobile team" },
  { value: "1M+", label: "blockchain events processed daily" },
  { value: "500–600", label: "events per second at production peak" },
];

const writing = [
  {
    title: "Building an AI Agent That Commits and Raises PRs from Your Phone",
    topic: "Applied AI",
    href: "https://dev.to/ponikar/building-an-ai-agent-that-commits-and-raises-prs-from-your-phone-1n78",
  },
  {
    title: "0 to 1: Working in a Startup as a Software Engineer",
    topic: "Startups",
    href: "https://dev.to/ponikar/0-to-1-working-in-a-startup-as-software-engineer-4jlp",
  },
  {
    title: "React Native Is Multi-Threaded",
    topic: "Mobile",
    href: "https://dev.to/ponikar/react-native-is-multi-threaded-44aj",
  },
];

const journey = [
  {
    company: "GeekyAnts",
    period: "2021 — 2023",
    role: "Software Engineer I",
    summary: "Shipped React Native, React, and TypeScript applications for fintech and consumer clients.",
  },
  {
    company: "Nintee",
    period: "2023 — 2024",
    role: "Senior Software Engineer I",
    summary: "Built the React Native/Expo/TypeScript flagship app from initial codebase through Android and iOS launch, plus Next.js and RAG/tool-calling prototypes.",
  },
  {
    company: "Huddle01",
    period: "2024 — 2026",
    role: "Founding Engineer",
    summary: "Led a three-engineer React Native team, shipped Kotlin/Swift native modules and Apple/Stripe payments, then built TypeScript/Bun and Go services with a Next.js realtime UI.",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Darshan Ponikar — Founding, Full-Stack &amp; Applied AI Engineer</title>
        <meta
          name="description"
          content="Founding and full-stack engineer who led a three-person React Native team behind 100K+ downloads and built TypeScript/Bun and Go services processing 1M+ events daily."
        />
        <meta
          name="keywords"
          content="Darshan Ponikar, founding engineer, full-stack engineer, applied AI engineer, product engineer, realtime systems"
        />
        <meta property="og:title" content="Darshan Ponikar — From founder conversation to production" />
        <meta
          property="og:description"
          content="React Native leadership, TypeScript/Bun and Go microservices, Next.js realtime products, and deterministic agent workflows."
        />
        <meta property="og:site_name" content="Darshan Ponikar" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ponikar.com" />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href="https://ponikar.com" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <header className={styles.siteHeader}>
        <a className={styles.logo} href="#top" aria-label="Darshan Ponikar, back to top">
          DP<span aria-hidden="true">↗</span>
        </a>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#ai">Applied AI</a>
          <a href="#about">About</a>
          <a href="#writing">Writing</a>
        </nav>
        <a className={styles.headerCta} href="mailto:itsponikar@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main">
        <section id="top" className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroTopline}>
            <p>Founding · Full-stack · Applied AI</p>
          </div>

          <div className={styles.heroGrid}>
            <h1 id="hero-title" className={styles.heroTitle}>
              <span>From founder</span>
              <span>conversation</span>
              <span className={styles.heroAccent}>to production.</span>
            </h1>

            <div className={styles.heroAside}>
              <p className={styles.heroCopy}>
                Founding Engineer. Led a 3-person React Native team behind 100K+ downloads; built TypeScript/Bun and Go microservices processing 1M+ events/day; added deterministic replay and cross-review across Codex, OpenCode, and Claude Code.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#work">See selected work <span aria-hidden="true">↓</span></a>
                <a className={styles.textAction} href="https://www.linkedin.com/in/ponikar" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              </div>
              <ol className={styles.operatingLoop} aria-label="How Darshan operates">
                <li><span>01</span> Understand</li>
                <li><span>02</span> Build</li>
                <li><span>03</span> Ship</li>
                <li><span>04</span> Operate</li>
              </ol>
            </div>
          </div>

          <div className={styles.heroFoot} aria-hidden="true">
            <span>Scroll for the evidence</span>
            <span className={styles.scrollLine} />
          </div>
        </section>

        <section className={styles.metrics} aria-label="Selected outcomes">
          {metrics.map((metric) => (
            <div className={styles.metric} key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section id="work" className={styles.work} aria-labelledby="work-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>01 / Selected work</p>
            <h2 id="work-title">React Native apps, Next.js products, and realtime microservices.</h2>
            <p>Each case names my role, architecture, production scale, and verified outcome.</p>
          </div>

          <article className={styles.project}>
            <div className={styles.projectCopy}>
              <p className={styles.projectMeta}>Huddle01 Meet · Founding Engineer · 2024—2026</p>
              <h3>Led React Native delivery across Android and iOS.</h3>
              <p className={styles.projectLead}>Worked directly with a founder and led three engineers across React Native New Architecture, Kotlin/Swift native modules, Apple and Stripe payments, store releases, and production incidents.</p>
              <dl className={styles.projectFacts}>
                <div><dt>Reach</dt><dd>100,000+ combined Android and iOS downloads</dd></div>
                <div><dt>Leadership</dt><dd>Task breakdown, PR review, mentoring, App Store/Play Store releases, and incident response</dd></div>
                <div><dt>Architecture</dt><dd>React Native New Architecture; Kotlin/Swift modules; Apple IAP + Stripe; receipt validation and idempotent webhooks</dd></div>
              </dl>
            </div>
            <div className={`${styles.projectVisual} ${styles.meetVisual}`} aria-label="Abstract Huddle01 Meet interface">
              <div className={styles.visualLabel}><span>H01 / MEET</span><span>Release 100K+</span></div>
              <div className={styles.meetingFrame}>
                <div className={styles.meetingTop}><span /><span>Weekly product room</span><span>•••</span></div>
                <div className={styles.participantGrid}>
                  {["DP", "AK", "RM", "NS", "SJ", "+94"].map((name, index) => (
                    <div key={name} className={index === 0 ? styles.participantActive : undefined}>
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.meetingControls}><span>●</span><span>⌁</span><span>↗</span><span className={styles.endCall}>×</span></div>
              </div>
              <div className={styles.visualNote}>React Native New Architecture across Android and iOS.</div>
            </div>
          </article>

          <article className={`${styles.project} ${styles.projectReverse}`}>
            <div className={styles.projectCopy}>
              <p className={styles.projectMeta}>Terminal · TypeScript/Go microservices · Next.js</p>
              <h3>Rebuilt the path from blockchain event to browser.</h3>
              <p className={styles.projectLead}>Owned the TypeScript/Bun indexer path and split parsing, persistence, token ranking, and WebSocket broadcasting into independently scalable microservices and workers.</p>
              <dl className={styles.projectFacts}>
                <div><dt>Throughput</dt><dd>1M+ events daily; 500–600 events/second at peak</dd></div>
                <div><dt>Product speed</dt><dd>Critical data readiness improved from ~15s to ~200ms</dd></div>
                <div><dt>Reliability</dt><dd>Helped maintain ~99% availability with heartbeats, Axiom logs, Slack/phone alerts, replay, and backfill</dd></div>
                <div><dt>Architecture</dt><dd>TypeScript, Bun workers, Go services, Next.js, PostgreSQL, ClickHouse, Redis, and WebSockets</dd></div>
              </dl>
            </div>
            <div className={`${styles.projectVisual} ${styles.terminalVisual}`} aria-label="Terminal event-processing system diagram">
              <div className={styles.visualLabel}><span>TERMINAL / LIVE</span><span className={styles.liveSignal}>Pipeline healthy</span></div>
              <div className={styles.pipeline}>
                <div className={styles.pipelineSource}><span className={styles.pipelineStageTitle}><span className={styles.pulseDot} />Solana events</span></div>
                <span className={styles.pipelineArrow}>→</span>
                <div><span className={styles.pipelineStageTitle}>Parse</span><small>Bun workers</small></div>
                <span className={styles.pipelineArrow}>→</span>
                <div><span className={styles.pipelineStageTitle}>Store</span><small>PG / ClickHouse</small></div>
                <span className={styles.pipelineArrow}>→</span>
                <div><span className={styles.pipelineStageTitle}>Broadcast</span><small>WebSockets</small></div>
              </div>
              <div className={styles.terminalStats}>
                <div><span>EVENTS / DAY</span><strong>1,000,000+</strong></div>
                <div><span>PEAK / SEC</span><strong>500—600</strong></div>
                <div><span>CRITICAL DATA</span><strong>~200 ms</strong></div>
              </div>
              <div className={styles.eventStream} aria-hidden="true">
                {["TX 8fA2 · parsed", "TX 2c19 · stored", "TX 11b7 · broadcast", "TX 90d4 · ranked"].map((event) => <span key={event}>{event}</span>)}
              </div>
            </div>
          </article>

          <article className={styles.project}>
            <div className={styles.projectCopy}>
              <p className={styles.projectMeta}>Nintee · React Native/Expo + Next.js · 2023—2024</p>
              <h3>Shipped a React Native/Expo app from initial repo to both app stores.</h3>
              <p className={styles.projectLead}>Worked directly with a founder, established the React Native/Expo/TypeScript codebase and reusable UI primitives, and shipped the flagship app through Android and iOS release.</p>
              <dl className={styles.projectFacts}>
                <div><dt>Mobile</dt><dd>React Native, Expo, TypeScript, reusable component primitives, Android, and iOS</dd></div>
                <div><dt>Web</dt><dd>Next.js prototypes used for rapid product-direction validation</dd></div>
                <div><dt>Applied AI</dt><dd>LangChain/LangGraph concepts, vector retrieval, RAG context construction, and tool-calling prototypes</dd></div>
              </dl>
            </div>
            <div className={`${styles.projectVisual} ${styles.ninteeVisual}`} aria-label="Nintee zero-to-one product layers">
              <div className={styles.visualLabel}><span>NINTEE / 0→1</span><span>Android + iOS</span></div>
              <div className={styles.buildStack}>
                <div><span>04</span><strong>Ship</strong><small>Android + iOS</small></div>
                <div><span>03</span><strong>React Native</strong><small>Expo + TypeScript</small></div>
                <div><span>02</span><strong>UI primitives</strong><small>Reusable components</small></div>
                <div><span>01</span><strong>Foundation</strong><small>Initial codebase</small></div>
              </div>
              <div className={styles.prototypeFlag}>AI work shown as product-direction prototypes</div>
            </div>
          </article>
        </section>

        <section id="ai" className={styles.aiSection} aria-labelledby="ai-title">
          <div className={styles.aiIntro}>
            <p className={styles.eyebrow}>02 / Applied AI</p>
            <h2 id="ai-title">Agent workflows with explicit validation.</h2>
            <p>Repository skills, persistent task records, deterministic replay, and cross-agent review across Codex, OpenCode, and Claude Code.</p>
          </div>

          <div className={styles.aiIndex}>
            <div className={styles.aiItem}>
              <span className={styles.aiNumber}>01</span>
              <div><h3>Indexer engineering workflow</h3><p>Packaged Terminal architecture, service boundaries, debugging procedures, and validation rules into repository-level skills shared across Codex, OpenCode, and Claude Code.</p></div>
              <span className={styles.aiTag}>Two-engineer backend</span>
            </div>
            <a className={styles.aiItem} href="https://github.com/ponikar/elm-eval" target="_blank" rel="noreferrer">
              <span className={styles.aiNumber}>02</span>
              <div><h3>Audit Reliability Lab</h3><p>Human-verified cases with deterministic recall, precision, citation metrics, traces, regressions, and quality gates.</p></div>
              <span className={styles.aiTag}>Evaluation ↗</span>
            </a>
            <a className={styles.aiItem} href="https://github.com/ponikar/phone-for-ai-agent" target="_blank" rel="noreferrer">
              <span className={styles.aiNumber}>03</span>
              <div><h3>Phone for AI Agent</h3><p>A constrained WebSocket protocol that lets an agent inspect and operate a real Android device through AccessibilityService.</p></div>
              <span className={styles.aiTag}>Tool use ↗</span>
            </a>
          </div>

          <div className={styles.labLinks}>
            <span>More from the lab</span>
            <a href="https://github.com/ponikar/react-native-cactus-poc" target="_blank" rel="noreferrer">On-device RAG ↗</a>
            <a href="https://github.com/ponikar/gitfix" target="_blank" rel="noreferrer">GitFix ↗</a>
            <a href="https://github.com/ponikar" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>

        <section id="about" className={styles.about} aria-labelledby="about-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>03 / About</p>
            <h2 id="about-title">From React Native apps to TypeScript/Go microservices.</h2>
            <p>Five years across TypeScript, React Native, Next.js, Bun, Go, PostgreSQL, ClickHouse, Redis, WebSockets, and agent workflows.</p>
          </div>

          <div className={styles.timeline}>
            {journey.map((item, index) => (
              <article className={styles.timelineItem} key={item.company}>
                <span className={styles.timelineNumber}>0{index + 1}</span>
                <div className={styles.timelineCompany}><h3>{item.company}</h3><span>{item.period}</span></div>
                <div className={styles.timelineStory}><strong>{item.role}</strong><p>{item.summary}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="writing" className={styles.writing} aria-labelledby="writing-title">
          <div className={styles.writingIntro}>
            <p className={styles.eyebrow}>04 / Field notes</p>
            <h2 id="writing-title">I write after I build.</h2>
          </div>
          <div className={styles.writingList}>
            {writing.map((post, index) => (
              <a key={post.href} href={post.href} target="_blank" rel="noreferrer">
                <span className={styles.writingNumber}>0{index + 1}</span>
                <h3>{post.title}</h3>
                <span className={styles.writingTopic}>{post.topic}</span>
                <span className={styles.writingArrow} aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.contact} aria-labelledby="contact-title">
          <p className={styles.eyebrow}>05 / Next</p>
          <h2 id="contact-title">Building a full-stack or applied AI product?</h2>
          <p>I&apos;m interested in small teams that need one engineer across Next.js/React Native interfaces, TypeScript/Go services, PostgreSQL/Redis, releases, and production incidents.</p>
          <a href="mailto:itsponikar@gmail.com">Tell me what you&apos;re building <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Darshan Ponikar</p>
        <div><a href="https://github.com/ponikar" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/ponikar" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:itsponikar@gmail.com">Email</a></div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
};

export default Home;
