# ProgrammingWithMab Site

The landing page for **Programming With Mab** — a Khmer-language video course on
WordPress fundamentals and theme development. The site pitches the course,
embeds the trailer, lists the pricing tiers, and points at the Telegram/Facebook
channels used to actually sell it.

**Live:** <https://programmingwithmab.github.io/programmingwithmab/>

Built with Nuxt 3 and Tailwind CSS, prerendered to static HTML and served from
GitHub Pages.

---

## Quick start

Requires **Node 22** (what CI runs; Nuxt 3 needs 20+).

```bash
npm ci        # installs exactly what package-lock.json pins
npm run dev   # dev server on http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload. |
| `npm run generate` | **The build.** Prerenders static HTML into `.output/public/`. |
| `npm run preview` | Serves the generated output locally. |
| `npm run build` | Builds a *server* bundle. **Not used here** — see below. |

> [!IMPORTANT]
> Deploys use `generate`, not `build`. `build` produces a Nitro server bundle
> that GitHub Pages cannot run — Pages only serves static files. If you ever see
> a deployed site that 404s everywhere, check which command ran.

## Project layout

```
pages/index.vue            The single page — hero, course outline, pricing
layouts/default.vue        Wraps every page; boots AOS + the Facebook chat widget
components/Layouts/        Header (hero + YouTube embed), Footer, Annoucement
components/Utils/          NoticeBar, PricingBox, PricingBoxItem, DevelopmentMode
components/Icons/          Inline SVG icons
assets/css/main.css        Tailwind entrypoint
public/                    Favicons, logo, site.webmanifest, .nojekyll
```

Nuxt auto-imports components with a **path-derived prefix**, so
`components/Utils/PricingBox.vue` is used as `<UtilsPricingBox />` and
`components/Layouts/Header.vue` as `<LayoutsHeader />`. Renaming a directory
renames every tag that references it.

There is no `app.vue` — Nuxt falls back to `layouts/default.vue` + the matched
page, which is why global styles and the third-party bootstrapping live in the
layout.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which runs
`npm ci && npm run generate`, verifies the output, then publishes to GitHub
Pages. `workflow_dispatch` allows a manual re-deploy from the Actions tab
without pushing a commit.

Two pieces of repo configuration this depends on — both are set, but they live
in GitHub settings rather than in the repo, so they are easy to lose:

- **Pages source** must be *GitHub Actions*, not "deploy from a branch".
- The **`github-pages` environment** must list `master` as an allowed
  deployment branch. If it doesn't, the `deploy` job fails in ~2 seconds with
  `Branch "master" is not allowed to deploy to github-pages due to environment
  protection rules` — before any step runs.

### Things that silently break the deploy

**`app.baseURL` must stay `/programmingwithmab/`.** This is a GitHub Pages
*project* page, so the site is served from a subpath, not the domain root. Get
this wrong and every asset 404s while the HTML still loads — a blank white page.
The workflow guards against it by grepping the generated `index.html` for
`/programmingwithmab/_nuxt/` and failing the build if it's missing.

**`public/.nojekyll` must exist.** Pages runs output through Jekyll by default,
which strips directories beginning with an underscore — including Nuxt's entire
`_nuxt/` asset directory. The empty `.nojekyll` file disables that.

**Bumping AOS requires regenerating its SRI hashes.** `nuxt.config.ts` pins
AOS 2.3.1 from unpkg with `integrity` hashes. Change the version without
updating the hashes and the browser refuses to load the files. Since `aos.css`
sets `opacity: 0` on every animated element, a blocked stylesheet would leave
the page invisible — `layouts/default.vue` has a fallback that reveals content
when AOS fails to load, but the hashes should still be regenerated properly:

```bash
curl -sfL https://unpkg.com/aos@<version>/dist/aos.css \
  | openssl dgst -sha384 -binary | openssl base64 -A
```

## Editing content

Copy is Khmer and hardcoded in the templates (`htmlAttrs.lang` is `km`); there
is no CMS or i18n layer.

- **Pricing** — `components/Utils/PricingBox.vue`, in the `pricings` array.
- **Course outline / contact numbers** — `pages/index.vue`.
- **Hero copy, trailer, signup link** — `components/Layouts/Header.vue`.
- **Promo banner** — `components/Utils/NoticeBar.vue`.
- **SEO, Open Graph, favicons** — the `app.head` block in `nuxt.config.ts`.
  Open Graph tags must use `property`, not `name`, and `og:image` must be an
  absolute URL — crawlers don't resolve relative ones.

`components/Layouts/Annoucement.vue` (red "Development mode" bar) and
`components/Utils/DevelopmentMode.vue` (a "កំពុងអភិវឌ្ឍន៌" placeholder) exist
for work-in-progress sections and are not currently rendered.

## Third-party embeds

| What | Where | Notes |
| --- | --- | --- |
| AOS 2.3.1 | `nuxt.config.ts` | Scroll animations. SRI-pinned; see above. |
| YouTube | `Layouts/Header.vue` | Course trailer, `loading="lazy"`. |
| Facebook Customer Chat | `layouts/default.vue` | Loaded client-side. Deliberately **not** SRI-pinned — it's an unversioned rolling script and `connect.facebook.net` sends no CORS header, so requesting it in CORS mode fails outright. |
| Google Fonts | `layouts/default.vue` | EB Garamond, Koh Santepheap, Montserrat. |

All of these are blockable by ad blockers or network filtering, so the page is
written to stay readable when any of them fail.

## License

<!--
TODO: pick one. This repo is public and currently has no license, which means
"all rights reserved" by default — nobody may legally copy or reuse it.
Trade-offs:
  - Leave as-is: maximum control. Fine, since this is a commercial landing page
    for a paid course, not a reusable library.
  - MIT: lets others learn from and reuse the Nuxt/Tailwind setup. Note the
    course copy, pricing, and logo are your content, not boilerplate — an MIT
    header applies to the code and does not grant rights to the branding.
-->

Not yet specified — see the note above.
