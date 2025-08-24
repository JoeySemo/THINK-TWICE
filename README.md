// FILE: README.md
# THINK TWICE — Link Hub (Static)

Dark, high-contrast, Linktree-style microsite for THINK TWICE. No build step; deploys instantly on Vercel.

## Features
- Polished, accessible UI (glassmorphism, big tap targets, visible focus)
- SEO: canonical, OG/Twitter, favicon
- In-page Spotify Artist embed
- Data-driven buttons via `links.json` (non-dev friendly)
- Lighthouse-ready (target ≥90 across categories)

---

## 1) Create GitHub repo & push

```bash
# from project folder containing index.html, styles.css, assets/, links.json, vercel.json, README.md
git init
git add .
git commit -m "feat: THINK TWICE link hub"
git branch -M main
# create an empty repo on GitHub (no README/license so histories don't conflict), then:
git remote add origin https://github.com/<your-org>/thinktwice-linkhub.git
git push -u origin main
