# Requirements — Phase 1: Hello Hono

## Scope

Stand up the Hono server with a single working route, confirm TypeScript types work end-to-end, and render a minimal HTML home page using Hono JSX.

## Deliverables

1. `hono` and `tsx` installed as dependencies.
2. `src/index.ts` — a minimal Hono app that:
   - Listens on a configurable port (default `3000`).
   - Enables Hono's JSX renderer middleware.
   - Serves `GET /` rendering the `<Home />` component.
3. `src/pages/Home.tsx` — a JSX component with a `<title>`, `<h1>`, and brief welcome copy from the mission.
4. TypeScript compiles cleanly (no `tsc` errors).

## Out of Scope

- Additional routes (health, API, etc.).
- Database, shared layout component, navigation, CSS beyond what lands inline.
- Auth, middleware beyond Hono's JSX renderer.

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
