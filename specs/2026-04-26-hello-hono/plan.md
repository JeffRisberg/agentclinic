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
