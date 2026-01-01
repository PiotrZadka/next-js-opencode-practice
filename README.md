# Next.js Learning Sandbox

This project is a sandbox for mastering **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS 4**.

## Project Structure

This is a structured learning project with AI-assisted workflows. See:

- `docs/PLAN.md` - Learning goals and context
- `docs/TASKS.md` - Progress checklist and roadmap
- `docs/JOURNAL.md` - Session history and decisions
- `AGENTS.md` - AI agent guidelines

## Getting Started

First, install the dependencies:

```bash
npm install
```

### Database Setup (Prisma + SQLite)

This project uses SQLite with Prisma for local data persistence. After installing dependencies:

```bash
# Generate the Prisma client (required after cloning or schema changes)
npx prisma generate

# Apply database migrations (creates dev.db if it doesn't exist)
npx prisma migrate dev

# Optional: View/edit data with Prisma Studio
npx prisma studio
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Environment

This project is optimized for **VSCode** with the following setup:

- **Prettier**: Handles code formatting automatically.
- **ESLint**: Ensures code quality and Next.js best practices.
- **Format on Save**: Enabled via `.vscode/settings.json` for consistent styling.

To ensure the environment works as intended, make sure you have the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions installed in VSCode.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [React 19 Documentation](https://react.dev/blog/2024/12/05/react-19) - Discover what's new in React 19.
- [Tailwind CSS 4.0](https://tailwindcss.com/blog/tailwindcss-v4-alpha) - Explore the latest version of Tailwind.
