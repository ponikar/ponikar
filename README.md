# Darshan Ponikar

I started out building products, became a founding engineer, and now work as a forward deployed engineer. I work close to the people who have the problem, figure out what they need, and build the backend, product and agents to solve it.

Five years, mostly at venture-backed startups, across mobile, web and backend.

[Portfolio](https://www.ponikar.com) · [LinkedIn](https://www.linkedin.com/in/ponikar) · [Writing](https://dev.to/ponikar) · [Email](mailto:itsponikar@gmail.com)

## What I've been building lately

Side projects from the last few months, mostly backend and agents:

- **[Picknick](https://github.com/ponikar/picknick.ios)** (Nov 2026) · On-device photo search for iOS. It indexes your library with MobileCLIP embeddings, Vision labels and offline place names in one SQLite file, and searches by meaning, like "dog on a beach". Nothing leaves the phone. *Swift, Core ML, MobileCLIP, SQLite*
- **[Video generation pipeline](https://github.com/ponikar/vide-gen-pipeline)** (Jun to Aug 2026) · An AI agent hands over a JSON file and gets a finished short-form video back: Kokoro voices (cloned or blended), captions or chat bubbles over footage, one FFmpeg pass. A queue-backed server stores it, and an API posts reels to Instagram. *TypeScript, Kokoro TTS, FFmpeg, Supabase, Postgres*
- **[AI Buyer Watchdog](https://github.com/ponikar/hack)** (Sep to Oct 2026) · Uptime monitoring, but for AI shoppers. Give it a store URL and it replays the journeys AI buyers attempt in a headless browser, then shows the exact step where each one fails. *TypeScript, Node, Playwright, Postgres, pg-boss*
- **[Audit Reliability Lab](https://github.com/ponikar/elm-eval)** (Jul 2026) · Can an AI agent be trusted to audit supplier compliance? It grades every finding against human-verified cases with a deterministic matcher, no LLM judge, and blocks agent versions that regress. *TypeScript, Gemini*
- **[Phone for AI Agent](https://github.com/ponikar/phone-for-ai-agent)** (Jun 2026) · Gives an AI agent a real Android phone. An Android app performs taps and swipes through the Accessibility Service, and a Node.js server relays commands over WebSocket. *Kotlin, Node.js, WebSocket*
- **[Tool-calling agent over RAG](https://github.com/ponikar/rag-pipeline-poc)** (Nov 2025) · A small agent that shortlists candidates. It writes its own search query, calls a search tool over PDFs embedded in a vector store, and answers only from what the tool returns. *Bun, Vercel AI SDK, Gemini, Supabase*

Earlier experiments: [React Native Cactus POC](https://github.com/ponikar/react-native-cactus-poc) (on-device inference, local retrieval, tool calls) and [GitFix](https://github.com/ponikar/gitfix) (a mobile GitHub workflow that generates reviewed multi-file changes and raises pull requests).

## Work

### Corgi · Member of Technical Staff · Sep to Oct 2026 · London

Part of the core Atlas engineering team, working with sales. Corgi sells insurance to startups, and its sales teams each ran their own CRM. Several teams would work the same broker, every one claimed the deal at close, and credit and commission got settled by argument. I sat next to the sales reps in the London office and worked out with them and the engineers how ownership should be decided.

- Led the build of one shared, AI-enabled CRM that records every call, email and meeting from every team, so ownership is visible while the deal is still open. **20+ sales teams, 200+ people** use it.
- AI agents on Claude and OpenAI read each interaction, match it to the right broker, client and deal, and work out attribution. **2,000+ emails a day**, tuned for cost and latency with batching, caching and cheaper-model routing.
- Merged four HubSpot portals into one workspace and removed **12,000+ duplicate records**.
- Built an OAuth-secured MCP server on Atlas so AI hosts such as Claude can quote, read and bind insurance through the same pricing engine and audit trail as the portal.

### Huddle01 · Founding Engineer · Jun 2024 to Jul 2026

**Terminal, backend and infrastructure.** A realtime Solana trading and token-discovery product. New tokens appear faster than anyone can read them, so the job was to surface the ones with live momentum and show trades with almost no delay. I owned the infrastructure and the indexer behind it. We were two backend engineers and built it in under three months by leaning hard on AI agents.

```text
pump.fun / PumpSwap events
            ↓
ingestion and Bun parsing workers
            ↓
trade normalization and derived market data
            ↓
PostgreSQL + ClickHouse ← Redis and in-memory caches
            ↓
token ranking and realtime broadcasts
            ↓
WebSockets → Next.js charts, trades, and discovery UI
```

- **1M+ events a day**, with peaks around **500 to 600 events a second**.
- Replaced a monolithic event server that couldn't keep up with independent services and Bun workers, so database writes, broadcasts and ranking stopped blocking ingestion.
- Synchronous parsing and enrichment stay under **7 ms at p95**. Token ranking finishes under about **400 ms at p95** and refreshes roughly every 500 ms.
- Cut the time for critical trading data to appear in the Next.js app from about **15 seconds to about 200 ms**: missing indexes, query fixes, no sequential fetch waterfalls, caching, and a split between eager and deferred data.
- Idempotent processing, duplicate protection, replay and backfill, heartbeats and alerts. About **99% uptime**, and incidents recovered in roughly 30 to 45 minutes.
- Packaged the architecture, debugging playbooks and replay scripts as repo-level skills, so Codex, OpenCode and Claude Code could pick up each other's work and cross-check changes.

**Huddle01 Meet, mobile and payments.** A WebRTC video conferencing app for the web3 community. I started on the mobile app and ended up leading three engineers, while staying hands-on across web, backend and payments.

- Meet reached **100,000+ downloads** across Android and iOS.
- Took crash-free sessions from roughly 60 to 70% up to about 99.99%, and cut Android app boot time from about 30 seconds to about 200 ms.
- Built payments end to end: Apple in-app purchases on iOS and Stripe on Android, with webhooks, receipt validation, idempotency and retry handling.
- Migrated the app to React Native's New Architecture, wrote native modules in Kotlin and Swift for audio, and maintained the React RTC SDK.

### Nintee · Senior Software Engineer I · Sep 2023 to Apr 2024

One of the first three engineers at an AI app for building better habits and wellbeing. I led mobile and worked directly with a founder, from the first codebase to the Android and iOS launch. Built the React Native and Expo app and its design system, shipped chat and feeds on Stream, and prototyped early agent features: RAG, tool calling and generative UI. These were product-direction prototypes, not production-scale inference.

### GeekyAnts · Software Engineer I · 2021 to Sep 2023

React Native, React and TypeScript apps for fintech and consumer clients, working directly with each client on what they needed.

## Writing

- [Building an AI Agent That Commits and Raises PRs from Your Phone](https://dev.to/ponikar/building-an-ai-agent-that-commits-and-raises-prs-from-your-phone-1n78)
- [OTA Updates in React Native](https://dev.to/ponikar/ota-updates-in-react-native-1pbo)
- [React Native is Multi-Threaded](https://dev.to/ponikar/react-native-is-multi-threaded-44aj)
