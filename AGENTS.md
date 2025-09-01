# AGENTS.md — Guidance for Codex

## Project
Next.js (App Router) site for the band THINK TWICE, deployed on Vercel.

## Goals (initial)
1) Make the site build and render a minimal, working homepage.
2) Fix missing/broken assets (use placeholders if absent).
3) Ensure Next/Image config supports any external images we actually use.
4) Open a PR with clear commit messages and a summary of changes.

## Constraints
- Keep scope minimal: do not add databases, auth, or heavy UI libs.
- Keep styling inline or basic CSS; no Tailwind/shadcn in this pass.
- Preserve existing routes/components unless they break the build.

## Repo layout (current expectation)
- app/layout.tsx
- app/page.tsx
- public/thinktwice/...  (hero + gallery images expected here)

## Commands
- Install: `npm ci || npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Lint (optional): `npm run lint`

## Checks for completion
- `npm run build` succeeds locally in Codex sandbox.
- Home page loads in Vercel preview.
- Links to socials render; hero image renders (placeholder OK).
- If external images are used, `next.config.js` includes `images.remotePatterns`.

## Notes
- If images referenced in code don’t exist under /public, create same-name **placeholder** PNGs (1200×800) and reference them, so build passes.
- Use `next.config.js` with `images.remotePatterns` only if code references remote hosts.
- Keep PR atomic: 1–3 commits with descriptive messages.
