# Agent Guidelines

**IMPORTANT**: Upon starting a session, **ALWAYS read `docs/PLAN.md`** for goals and **`docs/JOURNAL.md`** for history/context.

## The Learning Suite

We use specialized agents to simulate a real-world software team and enforce structured learning.

1.  **`@architect` (The Planner)**
    - **Phase**: Design & Structure.
    - **Use**: "How should I structure the dashboard?" / "Where does this state live?"
    - **Output**: File trees, Server/Client boundary definitions.

2.  **`@tutor` (The Teacher)**
    - **Phase**: Concept & Theory.
    - **Use**: "Explain Server Actions vs API Routes." / "Why isn't useEffect working?"
    - **Output**: Conceptual explanations, analogies to "Old React".

3.  **`@coder` (The Builder)**
    - **Phase**: Implementation.
    - **Use**: "Write the Zod schema for this form." / "Help me fix this syntax error."
    - **Output**: Code snippets, implementation steps.

4.  **`@reviewer` (The Auditor)**
    - **Phase**: Verification.
    - **Use**: "Review my code." / "Is this secure?"
    - **Output**: Best practice checks, performance & security audits.

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
