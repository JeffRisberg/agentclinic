# Changelog

## 2026-04-26

- Set up initial Node.js project with a `hello.js` placeholder entry point and IntelliJ project files
- Added `.gitignore` and `CLAUDE.md` with project overview and dev commands
- Wrote Phase 1 specs: `mission.md`, `tech-stack.md`, `roadmap.md`, and the Hello Hono feature spec (requirements, plan, and validation checklist)
- Built the Phase 1 Hono server: TypeScript config, JSX renderer middleware, `serveStatic` for the public directory, and a root `GET /` route rendering a server-side JSX home page
- Added `Header`, `Footer`, `Layout`, and `Home` JSX components; linked `main.css` from the document `<head>`; configured `tsx` as the dev runner
- Refactored server entry point into `src/app.tsx` (exportable Hono app) and `src/index.tsx` (server bootstrap) to make the app testable without starting a live server
- Added Vitest test suite: 18 route integration tests covering HTTP status, content-type, document structure, header, main content, and footer; plus 18 component unit tests for `Header`, `Footer`, and `Layout` via a shared `render()` helper that uses the real Hono JSX rendering pipeline
- Rewrote CSS to mobile-first responsive design: CSS custom properties for colours and spacing, `flex-wrap` and 44 px touch targets on nav links, and `@media` breakpoints at 640 px (tablet) and 960 px (desktop) for progressive typography and margin scaling
- Updated all specs and the Phase 1 validation checklist to reflect the Vitest testing approach and responsive design requirements; moved responsive design from a deferred Phase 9 item to a Phase 1 baseline
- Added `/changelog` project skill that reads git history and uncommitted diffs to maintain this file
