# Agent Guidelines

## The Session Start

**IMPORTANT**: Upon starting a session, **ALWAYS read `docs/PLAN.md`** for goals and **`docs/JOURNAL.md`** for history/context.

## The Session End

**IMPORTANT**: At any point if user states end of session **ALWAYS read `docs/SESSION_END.md`** for a session wrap up procedure.

## The Learning Suite

We use specialized agents to simulate a real-world software team and enforce structured learning.
**IMPORTANT** Only update **NOTES.md** when explicitly asked by the user. Feel free to suggest updates to **NOTES.md** but do not update it on your own.

### Agent Types (Primary vs Subagent)

- **Primary agents**: Invoke directly via `Tab` key cycling. Can access all tools.
- **Subagents**: Invoke via `@mention` (e.g., `@reviewer`). More restricted, specialized tasks.

### When to Use Each Agent

| Situation                  | Agent        | Example Prompt                                    |
| -------------------------- | ------------ | ------------------------------------------------- |
| Planning a new feature     | `@architect` | "How should I structure a user profile page?"     |
| Don't understand a concept | `@tutor`     | "Explain useOptimistic vs useState for mutations" |
| Need code written          | `@coder`     | "Implement the Zod schema for this form"          |
| Code complete, need review | `@reviewer`  | "Review my Server Action for security issues"     |
| Runtime error or bug       | `@debugger`  | "Why am I getting this hydration error?"          |

### Agent Descriptions

1.  **`@architect` (Primary - The Planner)**
    - **Phase**: Design & Structure.
    - **Use**: "How should I structure the dashboard?" / "Where does this state live?"
    - **Output**: File trees, Server/Client boundary definitions.
    - **Tools**: Read-only (no code changes).

2.  **`@tutor` (Primary - The Teacher)**
    - **Phase**: Concept & Theory.
    - **Use**: "Explain Server Actions vs API Routes." / "Why isn't useEffect working?"
    - **Output**: Conceptual explanations, analogies to "Old React".
    - **Tools**: Read-only (no code changes).

3.  **`@coder` (Primary - The Builder)**
    - **Phase**: Implementation.
    - **Use**: "Write the Zod schema for this form." / "Help me fix this syntax error."
    - **Output**: Code snippets, implementation steps.
    - **Tools**: Full access (read, write, edit, bash).

4.  **`@reviewer` (Subagent - The Auditor)**
    - **Phase**: Verification.
    - **Use**: "Review my code." / "Is this secure?"
    - **Output**: Best practice checks, performance & security audits.
    - **Tools**: Read-only (no code changes).

5.  **`@debugger` (Primary - The Investigator)**
    - **Phase**: Troubleshooting.
    - **Use**: "Why is revalidatePath not updating?" / "Investigate this hydration mismatch."
    - **Output**: Root cause analysis, stack trace explanations, reproduction steps.
    - **Tools**: Read + Bash (can run diagnostics, but no edits).

## Commands

- **Package Manager**: Use `npm` only.
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Test**: `echo "No tests configured"`

## Code Style & Conventions

- **Formatting**: Mimic existing patterns; run valid formatters before committing.
- **Imports**: Group: stdlib -> 3rd party -> local. Match project's path style.
- **Naming**: Adhere strictly to local conventions (camelCase, snake_case, etc.).
- **Types**: Use strict typing/hints where the language supports it.
- **Errors**: Catch specific exceptions; provide meaningful error messages.
