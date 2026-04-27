# Validation — Phase 1: Hello Hono

Phase 1 is complete and mergeable when **all** of the following pass.

## 1. TypeScript compiles cleanly

```bash
npx tsc --noEmit
```

Expected: exits `0`, no errors or warnings.

## 2. Server starts

```bash
npm run dev
```

Expected: terminal prints something like `Listening on http://localhost:3000` with no uncaught exceptions.

## 3. Root route returns an HTML page

In a second terminal:

```bash
curl -si http://localhost:3000/
```

Expected: HTTP status `200 OK`, `Content-Type: text/html`, and the response body contains `<h1>` and the word `AgentClinic`.

## 4. Home page renders in a browser

Open `http://localhost:3000/` in a browser. Expected: a readable page with a visible heading and welcome text — no raw JSON, no plain text, no error.

## 5. No stray artefacts

- `hello.js` is either removed or clearly superseded (not the documented entry point).
- `CLAUDE.md` commands section reflects `npm run dev`, not `node hello.js`.

## 6. Responsive layout

Open `http://localhost:3000/` in a browser and resize the window across three widths:

| Width | Expected behaviour |
|---|---|
| < 640 px (mobile) | Content fills the viewport with `--space-md` side padding; `h1` renders at 1.5 rem |
| 640 px – 959 px (tablet) | Larger side padding (`--space-lg`); `h1` at 1.75 rem |
| ≥ 960 px (desktop) | Content capped at 960 px and centred; `h1` at 2 rem |

The header must remain usable at all widths (site name and nav wrap cleanly; no overflow or horizontal scroll).

## 7. Tests pass

```bash
npm test
```

Expected: Vitest exits `0`; all tests in `tests/routes.test.ts` pass, including status 200, `text/html` content-type, and body containing `AgentClinic` and `<h1>`.

## Merge Criteria

All seven checks above pass on a clean checkout with `npm install` followed by `npm run dev`.
