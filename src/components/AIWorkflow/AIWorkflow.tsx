import { FC } from "react";
import styles from "./AIWorkflow.module.css";

const sections = [
  {
    title: "Interface, not assistant",
    body: "I don't treat AI agents as assistants. They're part of my operating system. OpenCode is the interface between an idea and shipping code. Codex is the adversarial reviewer — a second pair of eyes that tries to break what I build. Agent.md files hold the ground rules per project: conventions, constraints, non-negotiables. The agents read them before they start. I don't repeat myself.",
  },
  {
    title: "Context at scale",
    body: "Context is the bottleneck. I solve it with git worktrees — parallel agents on independent branches, each with their own focus, all synchronized through a shared CLAUDE.md. Prompts are written like code: specific, structured, with examples. Goal first, then constraints, then the format I expect back. No ambiguity, no room for the agent to guess.",
  },
  {
    title: "Playbooks, not prompts",
    body: "I don't prompt for the same thing twice. Custom and pre-defined skills handle repeatable workflows — code review, QA, deployment, internet research. The browser daemon reads, the agents decide, I review. The loop used to take days. Now it takes one focused session.",
  },
];

export const AIWorkflow: FC = () => {
  return (
    <section id="ai-workflow" className={styles.section}>
      <p className={styles.label}><span>03</span>AI Workflow</p>
      <div className={styles.inner}>
        {sections.map((s, i) => (
          <div key={i} className={styles.block}>
            <p className={styles.blockTitle}>{s.title}</p>
            <p className={styles.blockBody}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
