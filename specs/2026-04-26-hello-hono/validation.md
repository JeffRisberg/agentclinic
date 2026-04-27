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

## Merge Criteria

All five checks above pass on a clean checkout with `npm install` followed by `npm run dev`.
