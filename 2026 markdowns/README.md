# How to properly use CLAUDE.MD and minimal needed slash commands — notes

**Source:** [How to properly use CLAUDE.MD and minimal needed slash commands](https://youtu.be/X6JqqOZRhKI?si=auk8lSf5ZVacBvO1) (Duke / FryingPan, ~5:40, May 2026). Part 4 of the “Make Your First AI Content Agent With Claude Code” series.

## Brief summary

The video argues you only need a small slice of **Claude Code** to work well: treat **`CLAUDE.md`** as the workspace “brain” (who you are, what the repo is for, rules, preferences). The agent is meant to read it at session start so it does not have to re-scan the whole tree every time—like a cached summary you refresh when the project changes.

The creator recommends turning on **“dangerously skip permissions”** so the agent is not blocked on every file read or command (they frame it as fine for their use case; you should still judge risk for yours). They also explain **context**: long chats fill short-term context; **compaction** can shrink it (often automatically), and there is a pattern of using a **side thread** for small questions so you do not pollute the main session.

## “Skills” / practices the video emphasizes

| Practice | What to do |
|----------|------------|
| **Project brain file** | Keep a **`CLAUDE.md`** at the workspace root (or relevant folder). You can ask the AI to create or update it in natural language, e.g. *“Create a CLAUDE.md for this workspace…”* |
| **Refresh the brain** | After big changes, regenerate or update **`CLAUDE.md`** so the summary stays accurate (the video ties this to **`/init`**—see below). |
| **Fewer permission prompts** | Enable **dangerously skip permissions** in Claude Code settings when you accept the tradeoff. |
| **PR / change review** | Use the built-in **review** flow when you or a teammate need structured review of a PR or diff. |
| **Protect main context** | For one-off questions, use a separate conversation (the transcript mentions a **context**-style command for quick side questions without bloating the main thread). |
| **Long conversations** | Rely on **compaction** when threads get long; the video says Claude often does this automatically, so you rarely need to invoke it manually. |

## Slash commands worth knowing (minimal set from the video)

These are **Claude Code** slash commands, not Cursor-specific:

| Command | Role in the video |
|---------|-------------------|
| **`/init`** | Scans the directory and creates or updates **`CLAUDE.md`** as a summarized map of the workspace. Re-run when the project changes a lot. |
| **Review** (slash / built-in review) | Helps review your own or others’ PRs and changes with built-in prompts. |
| **`/compact`** | Manually compress context if a chat is huge; the speaker says automatic compaction usually covers you. |

The speaker explicitly de-emphasizes learning every other slash feature (export, scheduling, etc.)—suggesting you can often **ask in chat** for things like cron jobs instead of memorizing commands.

## Related ideas from the description (not all repeated in depth on camera)

- **`/compact`** — compress context to keep the agent sharp in long threads.  
- **Cross-session memory** — you can ask the agent to remember stable facts (e.g. social handles).  

---

*These notes reflect the linked video only; tool names and settings can change—check current Claude Code docs if something does not match your build.*
