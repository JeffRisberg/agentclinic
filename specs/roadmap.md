# Roadmap

Phases are intentionally scoped — each one is a shippable slice of work, independently reviewable and testable.

---

## Phase 1 — Hello Hono ✓
- Install and configure Hono with `tsx` dev server
- Single `/` route returning "AgentClinic is open for business"
- Confirm TypeScript types work end-to-end
- Main layout component (Header, Footer, Layout) each in their own file
- CSS file linked via `serveStatic`
- Mobile-first CSS with CSS custom properties and media queries at 640 px and 960 px

## Phase 2 — Layout, Data, and Core Pages
- Server-side JSX layout component (header, nav, main, footer); all routes render inside the shared layout
- SQLite database + first migration (`agents` table); seed a handful of fictional agents
- `/agents` page listing all agents
- `/agents/:id` page showing a single agent's profile (name, model type, current status, presenting complaints)
- `ailments` table + seed data (e.g., "context-window claustrophobia", "prompt fatigue"); `/ailments` list page; agents linked to one or more ailments
- Tests: agent list and detail routes return correct status codes and content; ailment associations appear on the agent detail page; unknown agent ID returns 404

## Phase 3 — Therapies Catalog
- `therapies` table + seed data
- `/therapies` list page
- Map ailments → recommended therapies
- Tests: therapies list returns 200; ailment–therapy mapping is present in response

## Phase 4 — Appointment Booking
- `appointments` table (agent, therapist, datetime, status)
- Form to book an appointment from an agent's detail page
- Basic validation and confirmation page
- Tests: valid POST creates a record; invalid POST returns 422 with error message

## Phase 5 — Staff Dashboard
- `/dashboard` with summary counts: agents, open appointments, ailments in-flight
- Simple table views for staff to manage records
- Mary's dashboard is now real
- Tests: dashboard returns 200; counts match database state

## Phase 6 — Polish & Accessibility
- Semantic HTML audit across all pages
- Keyboard navigation and focus styles
- Advanced responsive patterns: complex multi-column layouts, print styles

## Phase 7 — Hardening
- Error pages (404, 500)
- Input sanitization on all forms
- Basic logging middleware

---

Later phases (not yet planned): auth, email notifications, therapist profiles, reporting.
