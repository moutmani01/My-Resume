# Outmani Mahfoud — Portfolio

A recruiter-facing portfolio built with Next.js 14 (App Router), TypeScript, and
Tailwind CSS. Content (experience, projects, certifications, milestones, skills) is
structured, typed data in `content/`, plus one MDX-driven long-form page (`/about`).

## Design

Dark, dashboard-inspired visual language — status bars, topology dividers, and a
deployment-log timeline — drawn directly from the observability and infrastructure
tooling (Grafana, ELK, Kubernetes) this portfolio is about. Fonts: Space Grotesk
(display), Inter (body), JetBrains Mono (data/labels).

## Stack

- **Framework:** Next.js 14 (App Router), React 18, TypeScript (strict mode)
- **Styling:** Tailwind CSS with a custom design-token theme
- **Content:** Typed TypeScript data modules + MDX (`next-mdx-remote`) for narrative content
- **Quality:** ESLint (`next/core-web-vitals` + Prettier compat), Prettier with
  `prettier-plugin-tailwindcss`, `tsc --noEmit` for type checking
- **SEO:** Per-page metadata, Open Graph/Twitter tags, JSON-LD `Person` schema,
  dynamic `sitemap.xml` and `robots.txt`

## Getting started

Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Local development server                   |
| `npm run build`        | Production build (validates the whole app) |
| `npm start`            | Serve the production build                 |
| `npm run lint`         | ESLint                                     |
| `npm run typecheck`    | TypeScript strict type checking            |
| `npm run format`       | Prettier — write                           |
| `npm run format:check` | Prettier — check only                      |

## Editing content

All recruiter-facing content lives in `content/`:

- `profile.ts` — name, role, summary, contact, site metadata
- `experience.ts` — work history with highlights and stack tags
- `projects.ts` — case studies with problem/approach/metrics
- `certifications.ts` — credentials grouped by category
- `milestones.ts` — combined career/education/achievement timeline
- `skills.ts` — grouped technical skills + languages
- `about.mdx` — long-form narrative for `/about`, edit as Markdown

Update these files and the site regenerates — no component code changes needed for
routine content updates.

## Deployment

The default build (`npm run build`) produces a static export in `out/`, deployed as
**Cloudflare Workers static assets** (see `wrangler.toml`'s `[assets]` block) via
`.github/workflows/deploy.yml`: on every push to `main`, GitHub Actions builds the
static export and runs `wrangler deploy`. This needs two repository secrets
(Settings → Secrets and variables → Actions → **Secrets** tab, not an environment
and not the Variables tab):

- `CLOUDFLARE_API_TOKEN` — needs Workers deploy permission
- `CLOUDFLARE_ACCOUNT_ID` — from the Cloudflare dashboard's account overview

This started out as an attempt to use Cloudflare Pages, both through Cloudflare's own
Git-integration build and through `wrangler pages deploy` in GitHub Actions — both
failed, the second one with `wrangler` itself confirming _"The Pages project ...
does not exist. Maybe you intended to deploy a Worker project instead?"_ once auth was
actually working. The Cloudflare dashboard project behind this repo is a **Workers**
project, so `wrangler deploy` (not `wrangler pages deploy`) is correct. If you still
have Cloudflare's own Git integration connected to this repo, either disconnect it or
ignore its (failing) build check — it isn't what ships the site.

- **Manual/CLI:** `npm run deploy` (runs `wrangler deploy`, using your own
  `wrangler login` session or `CLOUDFLARE_API_TOKEN`).

`.github/workflows/ci.yml` only validates the build (lint, type check, format check,
static export) on pushes and PRs; `deploy.yml` is the one that actually publishes.

For a self-hosted Node server instead, set `BUILD_STANDALONE=1` before `next build`
to emit `.next/standalone` (see `Dockerfile`).

Update `content/profile.ts` → `siteMeta.url` to your production domain before
deploying so Open Graph tags, the sitemap, and JSON-LD resolve correctly.

## Git workflow

```bash
git init
git add .
git commit -m "Initial commit: portfolio scaffold"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Recommended workflow going forward: feature branches → pull request → review →
merge to `main`. Consider adding a GitHub Actions workflow that runs
`npm run lint && npm run typecheck && npm run build` on every PR.
