# Requirements — Phase 1: Hello Hono

## Scope

Stand up the Hono server with a single working route, confirm TypeScript types work end-to-end, and render a minimal HTML home page using Hono JSX.

## Deliverables

1. `hono` and `tsx` installed as dependencies.
2. `src/index.ts` — a minimal Hono app that:
   - Listens on a configurable port (default `3000`).
   - Enables Hono's JSX renderer middleware.
   - Serves static files from `public/` via `serveStatic`.
   - Serves `GET /` rendering the `<Home />` component.
3. `src/components/Header.tsx` — a `<header>` element with the site name and a placeholder nav; in its own file.
4. `src/components/Footer.tsx` — a `<footer>` element with a copyright line; in its own file.
5. `src/components/Layout.tsx` — wraps `<Header />`, a `<main>` that accepts `children`, and `<Footer />`; in its own file. Links to `/styles/main.css` in `<head>`.
6. `src/pages/Home.tsx` — renders welcome content inside `<Layout>`.
7. `public/styles/main.css` — mobile-first responsive styles: CSS custom properties, reset, typography, flex-column page structure, header/footer colours, and media queries at 640 px (tablet) and 960 px (desktop).
8. TypeScript compiles cleanly (no `tsc` errors).

## Out of Scope

- Additional routes (health, API, etc.).
- Database, navigation beyond a placeholder link.
- Auth, middleware beyond Hono's JSX renderer and `serveStatic`.

## Decisions

| Decision | Choice | Reason |
|---|---|---|
| Framework | Hono | Specified in tech-stack.md — TypeScript-first, minimal config |
| Dev runner | `tsx` | No build step required in development |
| Port | `3000` (env-overridable) | Conventional default |
| Templating | Hono JSX (`jsxRenderer`) | Server-side JSX per tech-stack.md; no React overhead |
| Home page scope | Title + h1 + copy only | Full layout/CSS deferred to Phase 2 |

## Context

This is the foundation everything else builds on. Keeping it minimal ensures Phase 1 is independently reviewable before any UI or data work begins.

Refer to `specs/mission.md` for project purpose and `specs/tech-stack.md` for technology choices.
