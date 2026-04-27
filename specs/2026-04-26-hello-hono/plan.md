# Plan — Phase 1: Hello Hono

## Group 1 — Install Dependencies

1. Initialise `package.json` as a module project (`"type": "module"`) if not already set.
2. Install runtime deps: `hono`.
3. Install dev deps: `tsx`, `typescript`, `@types/node`.
4. Add a `tsconfig.json` targeting `ES2022`, `module: NodeNext`, `strict: true`.

## Group 2 — Configure the Server

5. Create `src/index.ts`.
6. Instantiate a `Hono` app.
7. Set up `serve` from `@hono/node-server` to listen on `process.env.PORT ?? 3000`.
8. Confirm TypeScript types resolve with no errors (`npx tsc --noEmit`).

## Group 3 — Add the Root Route

9. Add `app.get('/', (c) => c.text('AgentClinic is open for business'))`.
10. Add a `dev` npm script: `tsx src/index.ts`.
11. Start the server and confirm it starts without errors.

## Group 4 — Minimal Home Page

12. Enable Hono's JSX renderer middleware (`app.use('*', jsxRenderer(...))`).
13. Create `src/pages/Home.tsx` — a JSX component returning a minimal HTML page with:
    - `<title>AgentClinic</title>`
    - A visible `<h1>` heading.
    - One or two sentences of welcome copy drawn from the mission.
14. Update the `GET /` handler to render `<Home />` via `c.render()` instead of returning plain text.
15. Confirm the browser receives a full HTML document with correct `Content-Type: text/html`.

## Group 5 — Smoke Test & Tidy

16. Curl `http://localhost:3000/` and confirm the response is an HTML document containing the heading.
17. Open in a browser and visually confirm the page renders.
18. Remove or update the old `hello.js` entry point so `node hello.js` is no longer the primary command.
19. Update `CLAUDE.md` commands section to reflect the new dev script.

## Group 6 — Layout Component with Header / Main / Footer

20. Create `src/components/Header.tsx` — a `<header>` element with the site name and a placeholder nav.
21. Create `src/components/Footer.tsx` — a `<footer>` element with a brief copyright line.
22. Create `src/components/Layout.tsx` — wraps `<Header />`, a `<main>` that accepts `children`, and `<Footer />`. Each of the three subcomponents (`Header`, `Footer`, `Layout`) lives in its own file under `src/components/`.
    - The component's `<head>` section links to `/styles/main.css`.
23. Create `public/styles/main.css` — mobile-first responsive styles:
    - CSS custom properties for colours, spacing, and `--max-width`.
    - Reset (`box-sizing: border-box`, margins/padding zeroed).
    - Base typography and flex-column page structure (mobile default).
    - Header: `flex-wrap: wrap` and 44 px minimum touch-target height on nav links.
    - `@media (min-width: 640px)` — tablet adjustments (larger margins, `h1` at 1.75 rem).
    - `@media (min-width: 960px)` — desktop adjustments (`h1` at 2 rem).
24. Register Hono's `serveStatic` middleware in `src/index.tsx` to serve files from the `public/` directory.
25. Refactor `src/pages/Home.tsx` to render its content inside `<Layout>` instead of a raw `<html>` shell.
26. Confirm TypeScript compiles cleanly and the browser shows the styled layout with header and footer.
