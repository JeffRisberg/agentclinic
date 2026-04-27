# Roadmap

Phases are intentionally small — each one is a shippable slice of work, independently reviewable and testable.

---

## Phase 1 — Hello Hono ✓
- Install and configure Hono with `tsx` dev server
- Single `/` route returning "AgentClinic is open for business"
- Confirm TypeScript types work end-to-end
- Main layout component (Header, Footer, Layout) each in their own file
- CSS file linked via `serveStatic`
- Mobile-first CSS with CSS custom properties and media queries at 640 px and 960 px

## Phase 2 — Base Layout
- Server-side JSX layout component (header, nav, main, footer)
- Basic CSS (custom properties, reset, typography)
- All routes render inside the shared layout

## Phase 3 — Agent List
- SQLite database + first migration (`agents` table)
- Seed a handful of fictional agents
- `/agents` page listing all agents
- Tests: route returns 200; seeded agents appear in response body

## Phase 4 — Agent Detail
- `/agents/:id` page showing a single agent's profile
- Name, model type, current status, presenting complaints
- Tests: known agent ID returns 200 with agent name; unknown ID returns 404

## Phase 5 — Ailments Catalog
- `ailments` table + seed data (e.g., "context-window claustrophobia", "prompt fatigue")
- `/ailments` list page
- Link agents to one or more ailments
- Tests: ailments list returns 200; agent–ailment association is reflected in detail page

## Phase 6 — Therapies Catalog
- `therapies` table + seed data
- `/therapies` list page
- Map ailments → recommended therapies
- Tests: therapies list returns 200; ailment–therapy mapping is present in response

## Phase 7 — Appointment Booking
- `appointments` table (agent, therapist, datetime, status)
- Form to book an appointment from an agent's detail page
- Basic validation and confirmation page
- Tests: valid POST creates a record; invalid POST returns 422 with error message

## Phase 8 — Staff Dashboard
- `/dashboard` with summary counts: agents, open appointments, ailments in-flight
- Simple table views for staff to manage records
- Mary's dashboard is now real
- Tests: dashboard returns 200; counts match database state

## Phase 9 — Polish & Accessibility
- Semantic HTML audit across all pages
- Keyboard navigation and focus styles
- Advanced responsive patterns: complex multi-column layouts, print styles

## Phase 10 — Hardening
- Error pages (404, 500)
- Input sanitization on all forms
- Basic logging middleware

---

Later phases (not yet planned): auth, email notifications, therapist profiles, reporting.
