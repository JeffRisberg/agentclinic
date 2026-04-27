Maintain CHANGELOG.md in the project root. Follow every step below in order.

---

## Step 1 — Read the current state

Run all of the following:

```
git log --format="%ad %H %s" --date=short
git status --short
git diff HEAD
```

If CHANGELOG.md exists, read it now.

---

## Step 2 — Decide what to write

**Case A — CHANGELOG.md does not exist:**
You will create it from scratch, covering the entire git history.
The set of commits to document is: every commit in `git log`.

**Case B — CHANGELOG.md exists:**
Find the most recent date heading (format `## YYYY-MM-DD`).
The set of commits to document is: every commit whose date is *on or after* that date,
plus any uncommitted changes shown in `git status` / `git diff HEAD`.
You will prepend new content above the existing entries (newest date at the top).

---

## Step 3 — Read the diffs

For each commit hash you identified in Step 2, run:

```
git show <hash> --stat --format=""
```

For commits where the stat summary is not enough to write a clear bullet, also run:

```
git show <hash> -- <file>
```

on the relevant files. The goal is to understand *what actually changed*, not just copy the commit message.

Also read any files touched by uncommitted changes (`git diff HEAD`) so you can describe those accurately too.

---

## Step 4 — Write the entries

Group all changes by calendar date (the author date from git log, or today's date for uncommitted work).

For each date, write a `## YYYY-MM-DD` heading followed by a bullet list.

Rules for bullets:
- Write in past tense, plain English — describe the change, not the file name.
- One bullet per logical change, not one bullet per commit or per file.
  Combine closely related commits or files into a single bullet when they form one coherent change.
- Be specific enough that a future reader understands what was added, changed, or removed
  without opening the diff. Include the key detail (e.g., breakpoint values, framework name,
  what the test covers) rather than vague phrases like "updated CSS" or "added tests".
- Do not parrot commit messages verbatim. Rewrite them in the same voice as the rest of the log.
- Omit pure housekeeping (merge commits, lock-file-only changes, IDE config) unless they
  represent a meaningful decision worth recording.

---

## Step 5 — Update the file

**If creating from scratch:**
Write CHANGELOG.md with this structure:

```
# Changelog

## YYYY-MM-DD
- …

## YYYY-MM-DD
- …
```

Most recent date at the top, oldest at the bottom.

**If updating an existing file:**
Prepend only the new date block(s) immediately after the `# Changelog` heading.
Do not rewrite or reformat existing entries.
If the most recent existing heading matches today's date, merge the new bullets into
that heading rather than creating a duplicate.

---

## Step 6 — Confirm

After writing the file, print a one-line summary of what was added, e.g.:
"Added 3 bullets under 2026-04-26 (responsive CSS, Vitest suite, skill command)."
