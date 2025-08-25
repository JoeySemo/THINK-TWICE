// FILE: README.md
# THINK TWICE — Link Hub

This repo contains a static, dark‑themed microsite for the Florida metalcore band **THINK TWICE**. It uses no build step, so it deploys instantly on Vercel.

## Features

- High‑contrast, glassmorphism UI with big, tappable buttons.
- SEO‑friendly meta tags and OG/Twitter preview.
- In‑page Spotify player for the verified Think Twice artist.
- Data‑driven button lists via `links.json` (easy to update).
- Critical CSS inlined for low CLS; full CSS deferred.
- Accessible focus states, aria labels, and prefers‑reduced‑motion support.

## Deploy guide (no coding required)

1. **Create a GitHub repo** (e.g. `thinktwice-linkhub`) and upload these files: `index.html`, `styles.css`, `vercel.json`, `links.json`, `README.md`, and the `assets` folder with `logo.svg`.
2. **Commit** your changes (that’s just GitHub’s way of saving).
3. **Log in to Vercel** and choose **New Project** → **Import GitHub Repository**. Pick your repo and deploy with the default settings.
4. After deployment, go to your **Vercel project → Settings → Domains** and add `thinktwice.verdantmission.org`.
5. Vercel will show a **CNAME target** (copy this value).
6. **On Porkbun**, open the DNS settings for `verdantmission.org` and add a **CNAME** record:
   - **Host**: `thinktwice`
   - **Value**: paste the CNAME target from Vercel (include the trailing dot).
7. Wait a few minutes. Back in Vercel, the domain will show a green checkmark and HTTPS will activate automatically.
8. Visit `https://thinktwice.verdantmission.org` to see your link hub live.

## Maintenance

- **Add or edit links:** open `links.json` on GitHub and change or add objects in the `featured` or `socials` arrays. The keys are `title`, `href`, `source`, `icon`, and (optionally) `optional` for press links.
- **Change the tagline or player:** edit the `<p class="hook">…</p>` or the `<iframe>` `src` in `index.html`.
- **Replace the logo:** swap out `assets/logo.svg` with your new artwork (keep the same filename).
- **Styling tweaks:** adjust CSS variables or classes in `styles.css`.

## Troubleshooting

- If links appear gray or missing, ensure `links.json` exists in your repo and has valid JSON.
- If the wrong band appears in the Spotify player, verify that the embed URL and the button link use the ID `0U2ZIIYIMFChatxKoQJdTU`.
- DNS issues? Double‑check the CNAME record at Porkbun matches Vercel’s target exactly, with the trailing dot.

