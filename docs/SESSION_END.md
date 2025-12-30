# Session End Protocol

This document serves as a checklist for any agent when a user wants to end a session. Follow these steps to ensure a clean handoff and maintain project integrity.

## Checklist

- [ ] **Update `docs/JOURNAL.md`**: Add a summary of the session's achievements, decisions, and any technical hurdles encountered.
- [ ] **Sync `docs/TASKS.md`**: Ensure completed items are marked with `[x]` and new tasks discovered during the session are added.
- [ ] **Update `docs/NOTES.md`**: Record any new concepts, patterns, or architecture decisions learned or established.
- [ ] **Review `AGENTS.md`**: Update agent instructions if new preferences or project-specific commands were established.
- [ ] **Quality Assurance**:
  - [ ] Run `npm run lint` to ensure code style compliance.
  - [ ] Run `npm run build` to verify the project compiles successfully.
- [ ] **Final Summary**: Provide a brief wrap-up of what was accomplished and what the next session should focus on.
- [ ] **Version Control**:
  - [ ] Stage all changes: `git add .`
  - [ ] Commit changes: `git commit -m "type: session summary"` (Derive the message from the session's achievements).
  - [ ] Push to remote: `git push`
