# Prototype Instructions

18.10.2026: Site №1 is the INTAMIN-inspired home at `/`, fixed at tag `site-1-intamin` (fc8c599). Preserve it. Site №2 lives at `/site-2/` and uses the second displayed B&M-inspired concept (`outputs/gorkiland-site-2-bm-2026-10-18/concept-2.png`, ImageGen exec-7976e2c2-66cb-4a14-abca-8a77b1b6531c). Its design: approved white logo, discreet menu, left-aligned two-line white headline on Orion imagery, generous white company section. Reuse original product data, specifications, and service scopes, with isolated `bm.css`; do not replace Site №1. Both entry points must build and work on GitHub Pages.

## Approved project decisions

17.10.2026 revision: user supplied an INTAMIN mobile reference and asked for more breathing room and visible additional services at the top. Use a white persistent header, black version of the approved logo, larger white content areas, calmer heading scale, and a Services navigation dropdown with direct anchors. Expand services from public company sources; preserve all ride families and the chosen logo.

17.10.2026: brand ГоркиLand, legal entity ООО «Лабораттория»; no APEX branding. Selected website concept 2 (dark cinematic / lime). Initial abstract G logos rejected. Selected the first of the two latest industrial logo lockups: roller coaster on supports plus dense geometric wordmark (`public/assets/logo.svg`). Preserve that font and emblem. Use original manufacturer portfolio; clearly distinguish manufacturing projects and new offers from opened rides. RU and EN. Separate public GitHub repository and preview, without changing gorkiland.ru. Private strategy/research remains outside this public repository.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

17.10.2026: User asked to unload the homepage. Keep a brief introduction and four photographic navigation tiles; put catalogue, parks, projects, company and services on separate query-addressed screens. Preserve RU/EN and direct service links.

18.10.2026: Explicit feedback for Site №2: the hero is the first screen and must fill the entire browser viewport, with company content only after scrolling. Use dynamic viewport height on desktop and mobile; no fixed minimum/maximum height that clips or reveals the next section.

18.10.2026: Site №2 hero headline approved verbatim: «ИНЖЕНЕРИЯ ДВИЖЕНИЯ. АРХИТЕКТУРА ВПЕЧАТЛЕНИЙ». Preserve fullscreen hero; adapt line breaks to viewport. English equivalent: ENGINEERING MOTION. ARCHITECTURE OF EXPERIENCES.

18.10.2026: User updated the logo direction for Site №2 with six supplied crops. Implement the compact monochrome trajectory symbol and minimal wordmark from the third crop (codex-clipboard-7cf1ce30-cc67-4cfc-8338-7149320b388b.png), no red, gradients or microtagline. Automatic vector trace saved as brand-motion-black/white.svg. Use in Site №2 header and footer only. Original logo assets and Site №1 remain intact.

18.10.2026 correction: Site №2 logo MUST include «ПРОЕКТИРУЕМ ЭМОЦИИ» under the wordmark in both colors; this supersedes the earlier omission. Each hero phrase must occupy exactly one unbroken line on every viewport, for a total of two lines. Preserve the final period on each phrase and reduce the mobile type size as necessary.
