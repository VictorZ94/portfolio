# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then production build (`vite build`) |
| `npm run lint` | ESLint over all `.ts`/`.tsx` files |
| `npm run preview` | Serve the production build locally |

No test framework is configured. There is no CI/CD or pre-commit hooks — run `npm run lint` and `npm run build` to verify changes.

## Architecture

A single-page personal portfolio. React 19 + TypeScript, bundled by Vite 8.

- **Entry:** `src/main.tsx` mounts `<App>` into `#root` under `<StrictMode>`.
- **`App.tsx`** renders only `ResponsiveDrawer` (`src/Sidebar.tsx`), which is the top-level layout shell — a fixed `AppBar`, a responsive `Drawer` (MUI `temporary` variant on mobile, `permanent` on desktop), and a `main` content `Box`. `drawerWidth = 240` drives the responsive width/margin math throughout.
- **`Intro.tsx`** is the content section rendered inside the drawer's main area. New page sections follow this pattern: a component in `src/`, imported into the main `Box` in `Sidebar.tsx`.

The Sidebar/drawer is currently MUI demo scaffolding (placeholder list items like "Inbox"/"Drafts", Lorem ipsum). Expect to replace this with real portfolio content.

## Key conventions

- **Styling is MUI `sx` prop only** — no styled-components, no CSS modules. Global resets live in `index.css`; `App.css` is minimal. Use MUI breakpoint objects (`{ xs: 'block', sm: 'none' }`) and the spacing scale (`p: 3`, `mt: 2`).
- **React Compiler is enabled** via `babel-plugin-react-compiler` (configured in `vite.config.ts` through `@rolldown/plugin-babel`). Do not hand-add `useMemo`/`useCallback` for optimization — the compiler handles memoization. This affects dev/build performance.
- **Strict TypeScript:** `verbatimModuleSyntax`, `noUnusedLocals`/`noUnusedParameters`, and `erasableSyntaxOnly` (no enums, namespaces, or parameter properties) are on. Use `import type` for type-only imports.
- Functional components only; no path aliases (use relative imports).

`AGENTS.md` contains an exhaustive code-style guide (naming, formatting, MUI patterns). Consult it for detailed style questions.
