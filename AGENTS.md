# Prototype Instructions

18.10.2026 typography decision: Site №2 uses self-hosted Onest everywhere outside the preserved wordmark outline, including the logo tagline (Onest 500 outlined). Enforce only three rendered CSS size tokens per viewport: desktop 14px / 18px / one responsive display size32–64px; mobile12px /16px /28px. Mobile hero uses16px to preserve its two unbroken phrases. All pages, menu, forms, input placeholders and product dialogs follow src/typography.css and TYPOGRAPHY.md. Do not add per-component text sizes or another family. Site №1 remains unchanged.

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

18.10.2026: Increase Site №2 header logo and its tagline by1.5 at each breakpoint (525px desktop,420px tablet,258px mobile,232.5px narrow mobile). On phones controls occupy a second header row to prevent overlap. Site№1 remains unchanged.

18.10.2026: User chose displayed header option2 (exec-e68c9155-7cf9-4c96-a4f3-aaed652195bd). Logo, RU/EN, menu+ stay on one row at all widths. Mobile logo225px at390 viewport, flexes down on320. Restore88px mobile header/menu offset. This supersedes the two-row mobile header and fixed1.5 mobile scaling. Preserve full tagline and source vector logo.

18.10.2026 latest mobile revision: supplied B&M phone screenshots supersede the unbroken mobile headline requirement. Mobile hero is a centered, bold four-line statement, with original words and final periods. Use the display token clamp(28px,10.5vw,54px), still only three text sizes. Compact logo with full tagline and menu share one row; mobile languages move into the expanded menu. Full dynamic viewport and own Orion imagery remain. Desktop and Site №1 stay intact.


18.10.2026 menu/motion: latest B&M mobile menu screenshot approved as direction. Primary navigation is short and right-aligned, with Services and project enquiry as secondary items; full service directory remains on its own page. Desktop and phone share the white angled menu tab and plus-to-minus transition; mobile drops the text label and moves language controls into the menu. Persistent inert closed navigation supports reversible entrance/exit transitions. Respect reduced-motion; no infinite decorative movement or fake ride rotation.

18.10.2026 news: Site№2 includes three source-backed RU/EN news cards on home, a News menu link and separate list/article route ?page=news#news-ID. Dates are event/broadcast dates, not invented publication dates. Maintain src/news.js with verifiable sources; archival installation photo has an explicit caption. Site№1 homepage/navigation remain unchanged.

18.10.2026 map: Site№2 Projects includes source-backed map of all70 points extracted from original gorkiland.ru GeoJSON; homepage has Geography entry. Use exact source coordinates/descriptions, no invented park positions, no arbitrary additions or unsupported count of parks. Map is light and integrated, clustered lime markers, search/category/list linked to selected card, mobile map and details stack; map dragging opt-in on mobile and no scroll-wheel hijacking. Source№1 remains unchanged.

18.10.2026 partners: source-backed12-brand partner grid on Site№2 home and Company page. Preserve original supplied/source logos, colors and aspect ratios; no invented endorsements or all-partners-as-customers claims. Static responsive grid4/3/2 columns, generous space, no marquee or glowing presentation frames. Framed source artwork is visually clipped inside the flat brand panel; original asset remains unmodified. Site№1 unchanged.

18.10.2026 inline brand: throughout Site№2 visible editorial text, render ГоркиLand/GorkiLand using the approved wordmark only, without emblem/tagline. Reuse InlineWordmark/brandify for new components. Inherit text color and scale; preserve accessible brand name. Keep metadata, URLs, email addresses, form values and source strings plain text. Header/footer full lockups remain. Site№1 unchanged.

18.10.2026 logo accent: user requested the small inner lower wedge of the A in LAND in brand lime #D6F025, replacing the prior monochrome-only rule for this detail. Applied to site-two black/white full logo and inline wordmark; emblem, lettering and tagline otherwise preserved. Site№1 logo files unchanged.

Brandbook: preserve the user-approved original business/exhibition artwork exactly (exec-dea015a9-bae4-4679-a057-56d4b7154756.png, published as public/brandbook/assets/business-approved.png). The approved stand, notebook, business cards, proposal folder and catalogue covers must not be regenerated or replaced when changing the web layout. CSS crops may show individual panels from this same artwork. Original team/service board is public/brandbook/assets/team-approved.png. Later print/gifts/environment substitute mockups are not approved replacements. Downloads must use the corrected approved package.
