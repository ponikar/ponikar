# Darshan Ponikar

**Senior Full-Stack & Applied AI Engineer** with 5+ years of experience designing, shipping, and operating products across backend infrastructure, web, mobile, and agentic systems.

My deepest work is in backend and realtime architecture: event pipelines, service boundaries, databases, caching, WebSockets, reliability, and the product surfaces built on top of them. I have also built agentic applications and engineering systems where retrieval, tool use, evaluation, context, and validation matter more than attaching a chatbot to a product.

[Portfolio](https://www.ponikar.com) · [LinkedIn](https://www.linkedin.com/in/ponikar) · [Writing](https://dev.to/ponikar) · [Email](mailto:itsponikar@gmail.com)

## Engineering ownership

I take responsibility beyond implementation: translating product problems into technical plans, defining system boundaries, breaking work into deliverable tasks, coordinating engineers, reviewing pull requests, mentoring teammates, handling production incidents, and working directly with product, design, backend teams, and users. At Huddle01, I led a three-engineer mobile team while remaining hands-on across backend, web, payments, infrastructure, and releases.

## Full-stack systems — Terminal

At Huddle01, I worked across the backend and frontend of **Terminal**, a realtime Solana trading and token-discovery product. I directly owned the indexer path that captured blockchain events, parsed transactions, calculated derived market values, persisted operational and analytical data, and delivered final updates over WebSockets. Broader product and infrastructure decisions were co-led with the team.

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

### Backend architecture and reliability

- Processed **more than one million events per day**, including peaks of approximately **500–600 events per second**.
- Replaced a failure-prone monolithic event server with independently scalable services and workers, separating parsing, persistence, broadcasting, and ranking so expensive workloads could not block the ingestion path.
- Used PostgreSQL indexes and partitioning for high-write operational data, ClickHouse for analytical workloads, and Redis/in-memory caching to avoid repeated cold reads and recomputation.
- Built duplicate-event protection, idempotent processing, backfill and replay workflows, service heartbeats, structured logging, Axiom monitoring, Slack alerts, and escalation paths for production incidents.
- Kept token-ranking computation under approximately **400 ms p95** with ranked results refreshed roughly every **500 ms**, helping the product react to live market activity rather than stale snapshots.
- Stabilized the platform around approximately **99% uptime** and handled incident recovery, generally within approximately **30–45 minutes** depending on the failure.

### Frontend and product delivery

The system work continued into the Next.js product. I removed sequential data-fetching waterfalls, optimized expensive queries, added missing indexes and caching, separated eager from deferred data, and chose SSR or CSR based on freshness and interaction requirements. The resulting interface streamed live trades, token updates, market statistics, charts, and ranking changes over WebSockets.

I also implemented full-stack mobile payments for Huddle01 Meet: Apple in-app purchases, Stripe payments on Android, backend webhooks, receipt validation, idempotency, purchase confirmation, retry handling, and duplicate-event protection.

## Applied AI and agentic systems

### Agentic product prototypes at Nintee

At Nintee, I personally built core foundations for early **RAG, tool-calling, generative UI, and text-to-action prototypes**. The work covered source ingestion, vector retrieval, context construction, prompting, response generation, and agents that could invoke actions instead of returning only text. Generative UI experiments converted model output into predefined interactive interface blocks. These were product-direction prototypes—not claims of model training, AI research, or production-scale inference.

### Engineering with coding agents

For Terminal’s two-engineer backend effort, I turned ad hoc AI usage into a repeatable engineering system. I created repository-level skills containing architecture, service ownership, conventions, debugging procedures, validation rules, and known failure scenarios. The same context worked across Codex, OpenCode, Claude Code, and compatible CLI agents.

Persistent task and change records captured what changed, why it changed, remaining work, validation results, and architectural decisions. Deterministic transaction-replay scripts let agents reproduce failures, compare expected and actual output, validate fixes, and cross-review another agent’s implementation without rebuilding the system context every time.

### Selected agentic projects

- **[Audit Reliability Lab](https://github.com/ponikar/elm-eval)** — Evaluates supplier-audit agents with human-verified cases, deterministic recall/precision/citation metrics, failure traces, regression tests, and quality gates without relying on an LLM judge.
- **[Phone for AI Agent](https://github.com/ponikar/phone-for-ai-agent)** — Gives an agent a real Android device through AccessibilityService and a constrained WebSocket protocol for reading the UI tree, tapping, swiping, typing, and navigation.
- **[React Native Cactus POC](https://github.com/ponikar/react-native-cactus-poc)** — Explores on-device inference, PDF ingestion, embeddings, local retrieval, memory, and tool calls.
- **[GitFix](https://github.com/ponikar/gitfix)** — Mobile GitHub workflow for inspecting repositories, generating reviewed multi-file changes, and raising pull requests.

## Advanced mobile engineering

Led delivery of Huddle01 Meet across Android and iOS, reaching **100,000+ combined downloads**. Migrated the production application to React Native New Architecture; built Kotlin and Swift native modules, native audio integrations, Picture-in-Picture, and Objective-C/Metal video-processing work; and owned CodePush plus GitHub Actions/Fastlane release automation. I also investigated production crashes and startup bottlenecks without reducing that work to unsupported performance claims.

## Experience

- **Huddle01 — Founding Engineer** · Jun 2024–Jul 2026 — Full-stack product ownership, realtime infrastructure, mobile leadership, payments, releases, and production reliability.
- **Nintee — Senior Software Engineer I** · Sep 2023–Apr 2024 — Shipped an initial React Native/Expo product, built Next.js prototypes, reusable UI foundations, and early agentic product systems.
- **GeekyAnts — Software Engineer I** · 2021–Sep 2023 — Delivered production React Native, React, and TypeScript applications for fintech and consumer clients.

## Writing

- [Building an AI Agent That Commits and Raises PRs from Your Phone](https://dev.to/ponikar/building-an-ai-agent-that-commits-and-raises-prs-from-your-phone-1n78)
- [OTA Updates in React Native](https://dev.to/ponikar/ota-updates-in-react-native-1pbo)
- [React Native is Multi-Threaded](https://dev.to/ponikar/react-native-is-multi-threaded-44aj)
