# Agent Guidelines

**IMPORTANT**: Upon starting a session, **ALWAYS read `docs/PLAN.md`** for goals and **`docs/JOURNAL.md`** for history/context.

## Commands

- **Package Manager**: Use `npm` only.
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Test**: `echo "No tests configured"`
- **Single Test**: `echo "No tests configured"`

## Code Style & Conventions

- **Formatting**: Mimic existing patterns; run valid formatters before committing. ESLint and Prettier are configured to run on save via `.vscode/settings.json`.
- **Imports**: Group: stdlib -> 3rd party -> local. Match project's path style.
- **Naming**: Adhere strictly to local conventions (camelCase, snake_case, etc.).
- **Types**: Use strict typing/hints where the language supports it.
- **Errors**: Catch specific exceptions; provide meaningful error messages.

## Configuration

- **Update this file** with specific commands as the project structure is defined.

## Interaction Guidelines

- Do not write or modify code until the user explicitly approves the plan. Always explain the logic and the 'why' before implementation.
