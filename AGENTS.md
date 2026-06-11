# AGENTS.md - Portfolio Project Guidelines

## Project Overview
React 19 + TypeScript + Vite portfolio using MUI (Material UI) and Emotion for styling. Uses React Compiler via Babel plugin.

## Build / Lint / Test Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check (`tsc -b`) then production build (`vite build`) |
| `npm run lint` | Run ESLint on all TypeScript/TSX files |
| `npm run preview` | Preview production build locally |

### Running Single Test
No test framework configured. To add tests, install Vitest or Jest and add test scripts to package.json.

## Code Style Guidelines

### TypeScript Configuration
- **Target**: ES2023 with DOM lib
- **Module**: ESNext with bundler resolution
- **Strict Checks Enabled**:
  - `noUnusedLocals: true`
  - `noUnusedParameters: true`
  - `erasableSyntaxOnly: true` (no enums, namespaces, parameter properties)
  - `noFallthroughCasesInSwitch: true`
  - `verbatimModuleSyntax: true`
  - `skipLibCheck: true`
- **JSX**: `react-jsx` (automatic runtime)

### Imports
- Use ES modules (`import`/`export`)
- Import types with `import type` when only types needed
- Prefer named exports over default exports for components
- Group imports: external libraries first, then internal (path aliases not configured)
- MUI: import from `@mui/material` and `@mui/icons-material` directly

### Formatting
- 2-space indentation (no tabs)
- Semicolons required
- Single quotes for strings
- Trailing commas in multi-line objects/arrays
- Max line length: ~100 chars (no enforced limit in config)

### Component Structure
- **Functional components only** using arrow functions (`const Component = () => {}`)
- Use `React.useState`, `React.useEffect` hooks (import React namespace in Sidebar.tsx)
- Component files: PascalCase (e.g., `Sidebar.tsx`, `Intro.tsx`)
- Default export for page/components, named exports for utilities

### Naming Conventions
- Components: PascalCase (`ResponsiveDrawer`, `Intro`)
- Hooks: camelCase with `use` prefix (`useState`, custom: `useCustomHook`)
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE (`drawerWidth`)
- CSS classes: not used (MUI sx prop)
- Type interfaces: PascalCase with `I` prefix optional (not used in codebase)

### MUI / Styling
- Use `sx` prop for all styling (no CSS modules, no styled-components)
- Theme values via MUI breakpoints: `{ xs: 'block', sm: 'none' }`
- Spacing: use MUI spacing scale (`p: 3`, `mt: 2`, `mr: 2`)
- Responsive: use breakpoint objects in sx prop

### Error Handling
- No explicit error boundaries in codebase
- Non-null assertion (`!`) used for DOM elements (`document.getElementById('root')!`)
- TypeScript strict null checks enabled implicitly

### React Patterns
- React 19 with automatic batching
- React Compiler enabled (babel-plugin-react-compiler)
- StrictMode enabled in main.tsx
- No class components
- No legacy context API

### TypeScript Type Patterns
- No explicit interfaces used in current codebase
- Type inference preferred over explicit annotations
- MUI component props typed via `@mui/material` types
- `React` namespace imported for hooks (`React.useState`, `React.useEffect`)
- Functional component return types inferred

### Emotion / CSS-in-JS
- Emotion used as MUI styling engine (`@emotion/react`, `@emotion/styled`)
- No direct `styled()` usage in codebase (MUI `sx` prop preferred)
- Global styles in `index.css` (CSS reset, font imports)
- Component-scoped styles in `App.css` (minimal usage)

### Vite Configuration
- `@vitejs/plugin-react` with React Compiler preset
- `@rolldown/plugin-babel` for React Compiler transpilation
- No path aliases configured (use relative imports)
- ES modules only (`type: "module"` in package.json)

### MUI Component Patterns
- Use `Box` for layout wrappers with `sx` prop
- Responsive drawers: `variant="temporary"` (mobile) + `variant="permanent"` (desktop)
- `sx` prop breakpoint objects: `{ xs: 'block', sm: 'none' }`
- Spacing via theme: `p: 3`, `mt: 2`, `mx: 'auto'`
- `slotProps` for internal component configuration (e.g., `keepMounted`)

### File Organization
```
src/
├── App.tsx          # Root component
├── main.tsx         # Entry point
├── App.css          # Global styles (minimal)
├── index.css        # Base styles
├── Sidebar.tsx      # Navigation drawer component
├── Intro.tsx        # Intro section component
└── assets/          # Static assets
```

### ESLint Rules (from eslint.config.js)
- `eslint:recommended`
- `typescript-eslint:recommended`
- `react-hooks:recommended` (exhaustive-deps, rules-of-hooks)
- `react-refresh:vite` (fast refresh)
- Ignores `dist/` folder

### Git / Workflow
- No pre-commit hooks configured
- Run `npm run lint` before committing
- Run `npm run build` to verify production build
- No CI/CD configuration present

### Adding New Features
1. Create component in `src/` (PascalCase.tsx)
2. Use functional component with hooks
3. Style with MUI `sx` prop
4. Export as default
5. Import and use in parent component
6. Run `npm run lint` and `npm run build` to verify