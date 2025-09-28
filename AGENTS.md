# Repository Guidelines

## Project Structure & Module Organization
Source code lives in `app/` (App Router pages and global styles) and `components/` (reusable sections plus `components/ui` for shadcn/ui building blocks). Shared helpers sit in `lib/`, while static assets belong in `public/`. Keep new marketing content modular: create a component under `components/`, wire it into `app/page.tsx`, and update navigation assets as needed.

## Build, Test, and Development Commands
- `pnpm dev` (or `npm run dev`): start the local Next.js server with Turbopack for rapid feedback.
- `pnpm build`: produce an optimized production bundle; run before opening a PR to surface type or build regressions.
- `pnpm start`: serve the production build locally to validate deploy behavior.
- `pnpm lint`: execute the Next.js core-web-vitals ESLint preset; resolve all warnings before review.

## Coding Style & Naming Conventions
Use TypeScript with React functional components. Favor descriptive PascalCase filenames for components (`hero-section.tsx` when exporting a section). Tailwind CSS powers styling—group utility classes logically and avoid unused styles in `globals.css`. Follow ESLint feedback, keep imports sorted by feature grouping, and write small, pure helpers in `lib/utils.ts` when logic is shared.

## Testing Guidelines
Automated tests are not yet established; validate changes through `pnpm build` plus targeted manual QA in the browser. Snapshot proposed UX tweaks with before/after screenshots in the PR. When adding tests, co-locate them near the code and name files `*.test.ts(x)` for discovery.

## Commit & Pull Request Guidelines
Commits in history use concise, present-tense summaries (e.g., `Implements first version of the landing page`). Prefer scoped branches (`feature/new-hero`) and group related edits. PRs should include: purpose overview, key screenshots for visual updates, notes on manual QA, and references to Jira/GitHub issues. Ensure lint/build pass before requesting review.
