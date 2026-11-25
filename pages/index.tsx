import type { NextPage } from "next";
import Head from "next/head";
import type { ReactNode } from "react";

const EMAIL = "itsponikar@gmail.com";

type EntryProps = {
  logo: string;
  company: string;
  href: string;
  role: string;
  when: string;
  place?: string;
  children: ReactNode;
};

const Entry = ({ logo, company, href, role, when, place, children }: EntryProps) => (
  <article className="entry">
    <div className="meta">
      <span className="logo">
        <img src={logo} alt="" width={40} height={40} />
      </span>
      <div>
        <h3>
          <a href={href} target="_blank" rel="noreferrer">
            {company}
          </a>
        </h3>
        <p>{role}</p>
        <p>{when}</p>
        {place ? <p>{place}</p> : null}
      </div>
    </div>
    <div className="body">{children}</div>
  </article>
);

const projects = [
  {
    title: "Picknick",
    when: "Nov 2026",
    href: "https://github.com/ponikar/picknick.ios",
    text: "On-device photo search for iOS. It indexes your library with MobileCLIP embeddings, Vision labels and offline place names in one SQLite file, and searches by meaning, like \"dog on a beach\". Nothing leaves the phone.",
    stack: "Swift, Core ML, MobileCLIP, SQLite",
  },
  {
    title: "Video generation pipeline",
    when: "Jun to Aug 2026",
    href: "https://github.com/ponikar/vide-gen-pipeline",
    text: "An AI agent hands over a JSON file and gets a finished short-form video back: Kokoro voices (cloned or blended), captions or chat bubbles over footage, one FFmpeg pass. A queue-backed server stores it, and an API posts reels to Instagram.",
    stack: "TypeScript, Kokoro TTS, FFmpeg, Supabase, Postgres",
  },
  {
    title: "Audit Reliability Lab",
    when: "Jul 2026",
    href: "https://github.com/ponikar/elm-eval",
    text: "Can an AI agent be trusted to audit supplier compliance? It grades every finding against human-verified cases with a deterministic matcher, no LLM judge, and blocks agent versions that regress.",
    stack: "TypeScript, Gemini",
  },
  {
    title: "AI Buyer Watchdog",
    when: "Sep to Oct 2026",
    href: "https://github.com/ponikar/hack",
    text: "Uptime monitoring, but for AI shoppers. Give it a store URL and it replays the journeys AI buyers attempt in a headless browser, then shows the exact step where each one fails.",
    stack: "TypeScript, Node, Playwright, Postgres, pg-boss",
  },
  {
    title: "Phone for AI Agent",
    when: "Jun 2026",
    href: "https://github.com/ponikar/phone-for-ai-agent",
    text: "Gives an AI agent a real Android phone. An Android app performs taps and swipes through the Accessibility Service, and a Node.js server relays commands over WebSocket. 32 GitHub stars.",
    stack: "Kotlin, Node.js, WebSocket",
  },
  {
    title: "Tool-calling agent over RAG",
    when: "Nov 2025",
    href: "https://github.com/ponikar/rag-pipeline-poc",
    text: "A small agent that shortlists candidates. It writes its own search query, calls a search tool over PDFs embedded in a vector store, and answers only from what the tool returns.",
    stack: "Bun, Vercel AI SDK, Gemini, Supabase",
  },
];

const path = [
  {
    word: "Product",
    when: "2021 to Apr 2024",
    roles: [
      { title: "Software Engineer I", company: "GeekyAnts" },
      { title: "Senior Software Engineer I", company: "Nintee" },
    ],
    note: "Built apps for clients, then led mobile from the first codebase at Nintee. I learned to take a design all the way to a launch.",
  },
  {
    word: "Founding",
    when: "Jun 2024 to Jul 2026",
    roles: [{ title: "Founding Engineer", company: "Huddle01" }],
    note: "Worked directly with a founder. Led three engineers on Meet, then owned Terminal's infrastructure and indexer.",
  },
  {
    word: "Forward",
    when: "Sep to Oct 2026",
    roles: [{ title: "Member of Technical Staff", company: "Corgi" }],
    note: "Sat beside the London sales team and built the CRM they needed. This is the work I want to do full time.",
    next: true,
  },
];

const pipeline = [
  { step: "Chain events", detail: "pump.fun and PumpSwap" },
  { step: "Parse and enrich", detail: "Bun workers" },
  { step: "Store and cache", detail: "Postgres, ClickHouse, Redis" },
  { step: "Rank tokens", detail: "refreshed about every 500 ms" },
  { step: "Broadcast", detail: "WebSockets to the app" },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Darshan Ponikar, forward deployed engineer</title>
        <meta
          name="description"
          content="Forward deployed engineer. I work close to the people who have the problem and build the backend, product and agents to solve it."
        />
        <meta property="og:title" content="Darshan Ponikar, forward deployed engineer" />
        <meta
          property="og:description"
          content="Where I have worked, what I shipped there, and the backend and agent projects I build on my own."
        />
        <meta property="og:site_name" content="Darshan Ponikar" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ponikar.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ponikar.com" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preload" href="/fonts/schibsted-grotesk-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/newsreader-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>

      <main>
        <header className="hero">
          <h1>Darshan Ponikar</h1>
          <p className="lede">
            I started out building products, became a founding engineer, and now work as a forward deployed engineer. I
            work close to the people who have the problem, figure out what they need, and build the backend, product
            and agents to solve it.
          </p>
          <p className="sub">
            Five years, mostly at venture-backed startups, across mobile, web and backend.
          </p>
          <ul className="contact">
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <a href="https://github.com/ponikar" target="_blank" rel="noreferrer">
                github.com/ponikar
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ponikar" target="_blank" rel="noreferrer">
                linkedin.com/in/ponikar
              </a>
            </li>
          </ul>
        </header>

        <section id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <p className="section-intro">
            Newest first. The pattern repeats: find the person with the problem, build something they actually use.
          </p>

          <Entry
            logo="/logos/corgi.svg"
            company="Corgi"
            href="https://www.corgi.insure"
            role="Member of Technical Staff"
            when="Sep to Oct 2026"
            place="London, YC S24"
          >
            <h4>Two months as a forward deployed engineer, in the London office.</h4>
            <p className="story">
              Corgi sells insurance to startups, and its sales teams each ran their own CRM. Several teams would work
              the same broker, every one claimed the deal at close, and credit and commission got settled by argument. I
              sat next to the sales reps, talked to them every day, and worked out with them and the London engineers how
              ownership should be decided.
            </p>
            <ul className="points">
              <li>
                Led the build of one shared, AI-enabled CRM that records every call, email and meeting from every team,
                so ownership is visible while the deal is still open. <strong>20+ sales teams, 200+ people</strong> use it.
              </li>
              <li>
                AI agents on Claude and OpenAI read each interaction, match it to the right broker, client and deal, and
                work out attribution. <strong>2,000+ emails a day</strong>, tuned for cost and latency with batching,
                caching and cheaper-model routing.
              </li>
              <li>
                Merged <strong>four HubSpot portals</strong> into one workspace and removed{" "}
                <strong>12,000+ duplicate records</strong>.
              </li>
              <li>
                Access is enforced on the server, and ownership history can&apos;t be deleted because a database
                trigger blocks it.
              </li>
            </ul>
          </Entry>

          <Entry
            logo="/logos/huddle01.png"
            company="Huddle01"
            href="https://huddle01.com"
            role="Founding Engineer"
            when="Jun 2024 to Jul 2026"
            place="Worked directly with a founder"
          >
            <div className="part">
              <h4>Huddle01 Meet, full stack</h4>
              <p className="story">
                Huddle01 is a WebRTC video conferencing app for the web3 community. I started on the mobile app and
                ended up leading three engineers, while staying hands-on across web, backend and payments. I sat in user
                interviews and shipped what users asked for.
              </p>
              <ul className="points">
                <li>
                  Led a team of three: broke down the work, reviewed PRs, ran releases and handled incidents. Meet
                  reached <strong>100,000+ downloads</strong> across Android and iOS.
                </li>
                <li>
                  Cut Android app boot time from about <strong>30 seconds to about 200 ms</strong>, so people reach a
                  live meeting faster.
                </li>
                <li>
                  Fixed production crashes and took crash-free sessions from roughly <strong>60 to 70% up to about
                  99.99%</strong>.
                </li>
                <li>
                  Built payments end to end: Apple in-app purchases on iOS and Stripe on Android, with webhooks, receipt
                  validation, idempotency and retry handling.
                </li>
                <li>
                  Migrated the app to React Native&apos;s New Architecture, wrote native modules in Kotlin and Swift for
                  audio, and maintained the React RTC SDK.
                </li>
              </ul>
            </div>

            <div className="part">
              <h4>Terminal, backend and infrastructure</h4>
              <p className="story">
                Terminal is a realtime Solana trading and token-discovery product. New tokens appear faster than anyone
                can read them, so the job was to surface the ones with live momentum and show trades with almost no
                delay. I owned the infrastructure and the indexer behind it. We were two backend engineers and built it
                in under three months by leaning hard on AI agents.
              </p>
              <ol className="flow" aria-label="How a Terminal event moves through the system">
                {pipeline.map((item) => (
                  <li key={item.step}>
                    <b>{item.step}</b>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ol>
              <ul className="points">
                <li>
                  <strong>1M+ events a day</strong>, with peaks around <strong>500 to 600 events a second</strong>.
                </li>
                <li>
                  Replaced a monolithic event server that couldn&apos;t keep up and failed as one unit with independent
                  services and Bun workers, so database writes, broadcasts and ranking stopped blocking ingestion.
                </li>
                <li>
                  Parsing and enrichment stay under <strong>7 ms at p95</strong>. Token ranking finishes under about{" "}
                  <strong>400 ms at p95</strong>.
                </li>
                <li>
                  Idempotent processing, duplicate protection, replay and backfill, heartbeats and alerts. About{" "}
                  <strong>99% uptime</strong>, and incidents recovered in roughly 30 to 45 minutes.
                </li>
                <li>
                  Packaged the architecture, debugging playbooks and replay scripts as repo-level skills, so Codex,
                  OpenCode and Claude Code could pick up each other&apos;s work.
                </li>
              </ul>
            </div>
          </Entry>

          <Entry
            logo="/logos/nintee.png"
            company="Nintee"
            href="https://nintee.com"
            role="Senior Software Engineer I"
            when="Sep 2023 to Apr 2024"
            place="One of the first three engineers"
          >
            <p className="story">
              Nintee was an AI app for building better habits and wellbeing. I led mobile and worked directly with a
              founder, from the first codebase to the Android and iOS launch.
            </p>
            <ul className="points">
              <li>Built the React Native and Expo app, plus its design system, from Figma designs.</li>
              <li>Shipped chat and feeds on Stream, and prototyped early agent features: RAG, tool calling and generative UI.</li>
              <li>
                Delivered <strong>3 to 4 working prototypes in two months</strong> so the team could test directions
                before committing.
              </li>
            </ul>
          </Entry>

          <Entry
            logo="/logos/geekyants.png"
            company="GeekyAnts"
            href="https://www.geekyants.com"
            role="Software Engineer I"
            when="2021 to Sep 2023"
          >
            <p className="story">
              Where I learned to ship for someone else. I built React Native, React and TypeScript apps for fintech and
              consumer clients, working directly with each client on what they needed.
            </p>
          </Entry>
        </section>

        <section id="path" aria-labelledby="path-title">
          <h2 id="path-title">Product, founding, forward</h2>
          <p className="section-intro">
            Every step put me closer to the people who have the problem. Forward deployed is where that line leads.
          </p>
          <ol className="path">
            {path.map((step) => (
              <li key={step.word} className={step.next ? "path-next" : undefined}>
                <h3 className="path-word">{step.word}</h3>
                <p className="path-when">{step.when}</p>
                <ul className="path-roles">
                  {step.roles.map((role) => (
                    <li key={role.title}>
                      <b>{role.title}</b>, {role.company}
                    </li>
                  ))}
                </ul>
                <p className="path-note">{step.note}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <p className="section-intro">Built on my own, mostly backend and agents. All of them are on GitHub.</p>

          <ul className="projects">
            {projects.map((project) => (
              <li key={project.href}>
                <div className="project-head">
                  <h3>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <p>{project.when}</p>
                </div>
                <div>
                  <p className="project-text">{project.text}</p>
                  <p className="stack">{project.stack}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <span>© 2026 Darshan Ponikar</span>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </footer>
    </>
  );
};

export default Home;
