import { FC } from "react";
import styles from "./AIWorkflow.module.css";

const sections = [
  {
    title: "The stack",
    body: "OpenCode runs everything. Codex sits on the side and tries to break whatever I build — like that friend who points out every flaw in your idea before you start. I've started keeping a CLAUDE.md per project. Not a long one. Just the rules I'd otherwise repeat: stack choices, file conventions, which folders not to touch. The agent reads it before every task. Saves me from saying the same thing ten times.",
  },
  {
    title: "Context juggling",
    body: "Multiple agents on one project used to break constantly. They'd overwrite each other's work, lose the thread, make conflicting changes. Git worktrees fixed it. Each agent gets its own branch with its own working directory. They share the same CLAUDE.md for ground rules, but never touch the same files at once. Prompts are short. Goal, constraints, output format. If more context is needed, I let the agent ask instead of guessing what it might need.",
  },
  {
    title: "Shipping loops",
    body: "Pre-built skills are the biggest time saver. QA run, code review, deploy check, internet research through the browser daemon. Each one is a workflow I used to describe from scratch every time. Now I just call it. A feature that took a full day — code, test, fix, deploy, verify — now fits in one focused session. The agent runs the loops. I decide what ships.",
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
