# Project status and working notes

This file lets a new Claude Code session (or a person) pick up the portfolio work where
it stopped. Last updated: 2026-10-11.

## What this is

The portfolio site of Outmani Mahfoud, Enterprise AI, Cloud & DevSecOps Architect.

- **Live site:** https://moutmani.mahfoudoutmani0.workers.dev
- **Hosting:** a Cloudflare Worker serving the static export in `out/` (see `wrangler.toml`).
  The owner calls it "Cloudflare Pages"; it is a Worker.
- **Stack:** Next.js 14 (static export), Tailwind CSS 3, TypeScript.

## Goals

- **Audience, in priority order:** recruiters, B2B clients, then anyone who can bring a
  role or a project.
- **Look:** modern and futuristic, with motion, but readable when skimmed. The site keeps
  its dark "operations console" identity: green and blue signal colours, Space Grotesk,
  Inter and JetBrains Mono.
- **Motion reference:** https://fancy.design (word-reveal headings, ticker, step focus,
  floating call-to-action). All motion respects `prefers-reduced-motion`, and content
  stays visible without JavaScript.

## How to work on it

- **Deploying:** every push to `main` runs `.github/workflows/ci.yml` and
  `.github/workflows/deploy.yml`, which publishes the live site. Work on a branch, open a
  pull request, and merge only when the owner says "deploy".
- **Before pushing:** `npm run format:check`, `npm run lint`, `npm run typecheck` and
  `npm run build` must pass. CI runs the same checks, and Prettier covers every file in
  the repo, including Markdown and the files in `resume/`.
- **Content lives in `content/`:** `profile.ts`, `experience.ts`, `projects.ts`,
  `services.ts`, `skills.ts`, `milestones.ts`, `certifications.ts`, `about.mdx`.
- **Styles:** design tokens are in `tailwind.config.ts`; shared component classes and all
  keyframes are in `app/globals.css`.
- **Facts:** do not invent claims, numbers, employers or dates. Ask the owner.

### Helpers worth knowing

| File                          | Purpose                                                        |
| ----------------------------- | -------------------------------------------------------------- |
| `components/InView.tsx`       | Sets `data-inview` so CSS can run reveals and pause loops      |
| `components/SplitText.tsx`    | Splits a heading into words that rise from behind a mask       |
| `components/Architecture.tsx` | Draws a project's layered architecture from `content/projects` |
| `components/HeroTopology.tsx` | The animated platform diagram in the hero                      |
| `components/Spotlight.tsx`    | A panel whose highlight follows the cursor                     |
| `components/FocusItem.tsx`    | Dims experience entries that are not at mid-viewport           |
| `components/FloatingCta.tsx`  | The "Let's talk" pill shown between the hero and the footer    |

### Resume

- `public/resume.pdf` (English) and `public/cv-fr.pdf` (French, with photo) are printed
  from `resume/resume-en.html` and `resume/cv-fr.html`, styled by `resume/resume.css`.
- To regenerate: serve `resume/` over HTTP, open each page in headless Chromium, and print
  to A4 PDF with backgrounds on. Then run `pdftotext` on the result and confirm the
  section headings and reading order extract cleanly.
- Keep it single-column with standard headings and no letter-spacing on headings;
  letter-spaced headings were extracted as separate letters.

### Assets

- `public/portrait.webp`: the owner's photo, cut out and placed on a dark backdrop.
- `public/logos/`: employer logos, shown in their original colours on light plates.
  Sources: Wikimedia Commons (Saham Bank, Crédit du Maroc), French Wikipedia (Ymagis),
  powerm.ma (Power Maroc).
- `public/og.png`: the social preview card (1200×630).

## Claude Code setup used for this work

Installed at user level on the working machine, not in this repo:

- **MCP servers:** Playwright (`@playwright/mcp`, headless, system Chromium) for
  screenshots and checks; Context7 (`@upstash/context7-mcp`) for library documentation.
- **Skills:** `impeccable` (from `pbakaus/impeccable`) and `animate` (from
  `emilkowalski/skills`), in `~/.claude/skills`.
- **GitHub:** the `gh` CLI, logged in as `moutmani01`.

## Done so far

1. Redesign: new hero with an animated platform diagram, motion system, labelled-row
   layouts for experience and skills, higher text contrast, site icon, Next.js 14.2.35.
2. Portrait in the hero and on the About page; fancy.design-inspired motion.
3. Selected Projects: five projects, each with problem, approach, results and an
   architecture diagram. The owner specified four of the diagrams; the supercomputer
   diagram is inferred from its stack.
4. Employer logos in the experience timeline.
5. Hero positioning sentence, social preview image and Open Graph tags.
6. "How I Can Help" B2B section: five services with proof links, five ways to engage,
   contracting details.
7. Resume rebuilt as an ATS-friendly single column, in English and French.

## Open items

Waiting on the owner:

- **Booking link:** set `engagementTerms.bookingUrl` in `content/services.ts` to a Calendly
  or Cal.com URL; the "Book a call" button then appears.
- **Testimonials:** two or three quotes that name an outcome, with permission to publish.
  Planned position: between Projects and Skills.
- **Better photo:** the current one is a small passport-style shot (314 px wide). A
  higher-resolution photo would let it carry the hero and replace the one on the French CV.
- **Logo for Training Consulting Services:** none was found.
- **Review:** the French CV translation, the certification names on the resume, the
  supercomputer architecture diagram, and the problem statements of the two newest
  projects.

Offered, not yet requested:

- Add the supercomputer and self-service projects to the resume (page two has room).
- A Word (.docx) copy of each resume.
- A custom domain in place of the `workers.dev` address.
- Dedicated case-study pages for each project.
- A French version of the site.
- Public work samples (Terraform or Ansible examples, or an article from the PhD research).

## Decisions already made

- Client logos were left out on purpose: they read as an endorsement. Only employers have
  logos.
- The Nagios and Prometheus mentions in Experience and Skills were kept on purpose, as
  history, when the Observability Fabric project moved to Centreon, LGTM, ELK and
  Dynatrace.
- The experience dimming was softened to 70% so skimming stays easy.
- The resume keeps the broad title "Enterprise AI, Cloud & DevSecOps Architect".
