# Design QA — 17.10.2026

Latest revision: **more white space and expanded services**, described in the final section below. Its explicit user direction supersedes the initial dark content surfaces; the original hero and approved logo remain the visual foundations.

## Visual truth and evidence

Selected target: `../../outputs/gorkiland-research-2026-10-17/concepts/02.png` (1487 × 1058 px). User subsequently replaced the abstract G with the first industrial roller-coaster logo lockup, preserving its geometric font. That explicit change supersedes the original header logo.

Rendered implementation: `../../outputs/gorkiland-research-2026-10-17/screenshots/new-desktop-final.png`, 1440 × 1024 pixels. Browser viewport override: 1440 × 1024 CSS px, normal screenshot density. Reference normalized to 1440 × 1024 (same aspect within rounding). Combined comparison: `screenshots/comparison-final.png` beside the research document; source left, implementation right. Focused header comparison: `screenshots/header-detail.png`; product and request evidence: `new-product-final.png`, `new-request.png`.

State: Russian, home, no dialog. Additional states tested: 390 × 844 EN and RU; 320 × 740 RU; catalogue filtering/search; product dialog; contextual project enquiry; mobile menu; service enquiry.

## Comparison history

1. Initial render: product tower occupied the text column; logo retained a dark rectangular background. P1 imagery/header issues. Replaced hero with an art-directed adaptation of the supplied real ride photo, preserving the chosen composition; converted the selected logo by automatic tracing to transparent SVG. Verified new render.
2. First normalized comparison: headline line spacing pushed intro and CTA below the intended position, and equipment was too small. P2 spacing/image scale. Reduced headline line height to .9, restored weight 500, and increased desktop photograph scale with a fixed focal point. Captured and compared the revised screen in `comparison-final.png`.
3. Narrow-screen check: the first immediate post-resize capture reported horizontal overflow while old layout was settling. Rechecked the stable rendered DOM and screenshot at 320 px: client width 305, document scroll width 305 (remaining 15 px is the browser scrollbar), no overflowing visible element. Evidence: `new-mobile-320-final.png`. Small-screen header sizing is explicitly constrained.

## Required fidelity surfaces

- Typography: local Inter variable font; source hierarchy, three-line headline, lime emphasis, restrained navigation and label tracking retained. Logo contours preserve the approved geometric lettering. Optical font differences from generated image remain P3.
- Spacing: desktop hero, CTA group, caption and lifecycle links match the selected hierarchy. Responsive stacking is intentional on phones. No clipped persistent controls or page overflow in stable checked states.
- Colour: dark #0B1014, lime #EFF43C, white primary type, muted secondary type. Catalogue uses a light surface for technical browsing. Focus ring on the light catalogue is dark for visibility.
- Imagery: exact manufacturer photography/renderings in catalogue and projects; hero is a documented artistic adaptation. Header uses automatically traced approved artwork, not a hand-drawn substitute. Source photo metadata was visually checked where it conflicted with the subject.
- Copy: RU and EN cover all visible core flows. Twelve sourced families, five sourced project/production materials, explicit stages for work in progress. No invented prices, delivery promises or awards. Variants in specifications are not presented as one configuration.

## Interactions and runtime

Checked browser interactions: anchor navigation; category filtering; search reducing results; product opening/closing; technical fields; selected model passed to the enquiry; input editing; RU/EN switch with current hash retained; mobile navigation; separate serial-number field in service enquiry; native dialog focus and Escape/close path. No actual commercial message was sent. The email-composer handoff is implemented, while recipient-side delivery is outside this static preview and not claimed.

Console checked through browser developer logs after final render: no warnings/errors returned. Local asset verification passed. Production build passed; four worker/packaging tests passed. No Lighthouse score, field performance claim or full accessibility certification is asserted.

## Findings

No unresolved P0/P1/P2 visual or core interaction findings in the checked states.

## Follow-up polish and release limits

- P3: commissioned custom typography could tighten optical fidelity further; approved logo font stays unchanged.
- Server-side enquiry delivery, CRM, complete product passports, legal publishing package and primary-domain migration remain separate production integrations, disclosed in README.
- Desktop/phone checks do not replace testing every browser/device combination.

## Latest revision: white space and services

User reference: attached INTAMIN mobile screenshot, `1-Фото-1.jpg` (589 × 1282, including phone/browser UI). It is an editorial/spacing reference, not a pixel-cloning target. Revised visual target: `../../outputs/gorkiland-research-2026-10-17/revision-air/services-target.png` (1487 × 1058). Rendered comparison: `revision-air/services-desktop-final.png`, 1440 × 1024 screenshot at 1440 × 1024 CSS viewport. Target normalized to the same dimensions; `revision-air/services-comparison.png` places target left and implementation right. Both were opened together. Focused logo/header inspection: `revision-air/header-detail.png`.

State: RU, service overview, all descriptions collapsed, navigation closed. Extra evidence: `menu-desktop.png`, `menu-mobile.png`, `relocation-mobile.png`, `direct-link-en-320-final.png`, `home-desktop.png`, `home-mobile.png` in the same revision folder.

Iteration findings and fixes:

- P2: initial services anchor retained an unnecessary strip of the preceding section and placed the title too low. Set scroll padding from the actual sticky header height, reduced the service introduction's top padding and synchronized service hash navigation after rendering. Final root top ~104 px, matching the 104 px header; heading top ~212 px.
- P2: the first service comparison had an underweighted heading and too much vertical displacement. Updated service heading size/weight and overview spacing, then recaptured and compared the same state.
- P2: at 320 px the footer grid's intrinsic width created 1 px document overflow. Set the phone footer track to `minmax(0,1fr)`. Final client width and scroll width both 305 px (15 px browser scrollbar); the screenshot has no horizontal page scrollbar.
- Fixed missing manufacturing photograph path `.png` → `.webp`; visually and through DOM confirmed loaded dimensions.

Fidelity surfaces: local Inter and the approved geometric logo are retained; whitespace and font hierarchy follow the revised target. Pure-white header and principal reading surfaces, quiet grey dividers and lime action accents replace the heavy dark content sections. Desktop services are two columns with generous gaps and real expandable descriptions; phone layout uses one column. All imagery is reused source material; no new equipment illustration was invented. RU/EN service titles, scopes and enquiry context are complete. P3 optical differences from the generated target and slightly different navigation spacing are acceptable; its lettering is not used as an uneditable screenshot.

Verified flows: ten service links in the top dropdown; jump opens the correct description; overview link; collapse; request retains selected service and shows serial-number field for lifecycle enquiries; mobile navigation scroll; fresh EN direct URL opens and positions the requested service; Escape closes the menu; switching language and original catalogue search/dialog continue to work. Header remains visible when scrolling. Browser logs returned no warning/error entries. No enquiry was sent.

No unresolved P0/P1/P2 findings remain in checked desktop/390 px/320 px states. Existing backend/CRM and full-device/accessibility coverage limits still apply.

final result: passed

Homepage density revision 17.10.2026: removed detailed catalogue, solutions, cases, manufacturing and services from home; dedicated query-addressed screens retain all content. Browser verified 12 catalogue cards and 5 cases after navigation; four image tiles inspected on desktop. Logo and original portfolio retained.

## 18.10.2026 — Site №2, selected B&M concept

Source visual truth: `outputs/gorkiland-site-2-bm-2026-10-18/concept-2.png` in parent workspace (ImageGen exec-7976e2c2-66cb-4a14-abca-8a77b1b6531c, second image displayed and selected by user).
Implementation: local `/site-2/?lang=ru`; evidence in the same output directory: implemented-desktop-final.png, comparison-final.png, approved-logo-detail.png, mobile-home.png, mobile-menu.png and mobile-en-320.png.

Viewport: 1374×1145 CSS px, density 1. Source 1374×1145. Full-page browser capture is 1359px wide (15px native scrollbar), cropped to first 1145px and padded with 15px white on right for the combined 2748×1145 comparison. No stretching. The native quick screenshot was clipped at 1071px and was not used as final comparison evidence.
State: home, RU, closed menu, top of page. Mobile checked at 390×844 RU and 320×760 EN. No overflow at 320 (content width305, viewport320 including native scrollbar).

Findings and iterations:
- [P2, fixed] Initial hero crop placed ride top too close to masthead. Object position adjusted to 25% vertical; original hero asset retained instead of generated product geometry. Evidence: comparison-initial.png → comparison-final.png.
- [P2, fixed] Initial headline weight and size were too light/small. Set 700 weight and 7.25vw desktop, retained exact two-line copy; recaptured final comparison.
- [P2, fixed] Compact mobile menu button initially had only 24px width. Its interactive area is now at least44×44px.

Required fidelity surfaces:
- Typography: local Inter variable; bold hero versus light editorial company heading. Two-line hero and three-line company copy match selected layout. Exact original geometric wordmark preserved in the source SVG. Generated mock's tiny letterform variations are not copied into the brand asset.
- Spacing: sparse masthead, 51vw hero, left text and right attraction, 28% side label/company grid, 64px company top padding. Full-view combined comparison reviewed.
- Colors: white/black editorial surface and restrained lime details. Original photographic colors retained; no new product imagery created.
- Imagery: supplied approved logo and existing hero.webp, orion.webp, photo-8.webp. Hero original crop differs slightly from generated mock as intentional source fidelity; no invented technical geometry accepted. Focused logo evidence inspected.
- Copy: selected Russian headline and company text retained; English equivalent implemented. Manufacturer configurations, readiness disclosures, 12 product families, 5 cases and ten services preserved.

Browser checks: desktop menu, direct modernization link and reload with expanded state, 12 catalogue families, search Top Spin→one result, specifications, request dialog and Escape; mobile service navigation, RU/EN switch and English Maintenance & repair; Escape closes menu. No actual email sent. Browser errors: none observed. Original Site №1 reopened: original header, hero, four home tiles and links retained.

Beyond the supplied viewport: below-fold portfolio preview, park link and contact reused from established project content. No mock or asset exists for a ride video, so the photograph is intentionally static. Public enquiry delivery still uses mailto, not a backend.

Follow-up polish: [P3] slight letterform/crop differences from the generated image remain; original vector brand and source photography take precedence.

Implementation checklist: selected source resolved; both entry points built; comparison and mobile evidence inspected; services/catalogue/request flow checked; root Site №1 preserved.

final result: passed

## 18.10.2026 — viewport-sized first screen

User reference: C:/Users/sergey/AppData/Local/Temp/codex-clipboard-74621442-a1e3-422b-b52e-860a86b440c2.png (2118×907). Explicit requirement supersedes the previous selected mock's partial white section in the first viewport.

Implementation: bm.css hero uses100vh fallback and100dvh, no old minimum/maximum caps. Removed mobile82svh and fixed height limits. Short landscape windows get a height-constrained headline to retain the arrow and caption.
Evidence: outputs/gorkiland-site-2-bm-2026-10-18/fullscreen-wide.png, fullscreen-mobile.png and fullscreen-comparison.png in parent workspace. Source and screenshot normalized proportionally into equal1059×454 panes, no stretching; native screenshot2103×901 excludes browser edge/scrollbar. The combined comparison was opened and reviewed.
Browser geometry:2118×907→hero907/next section top907;390×844→hero844/next section top844;844×390→hero390, copy bottom282px and arrow top326px. No overlap or following section visible in the initial window. Fonts, logo, colors, hero imagery and text remain the approved design. A minor source white screenshot border is omitted intentionally. Site№1 untouched.
Build passed; Sites packaging tests4/4. No new tests for the reversible CSS adjustment.
final result: passed

## 18.10.2026 — approved hero statement

User replaced headline verbatim with «ИНЖЕНЕРИЯ ДВИЖЕНИЯ. АРХИТЕКТУРА ВПЕЧАТЛЕНИЙ». This explicit text correction supersedes prior mock copy. Implemented uppercase as supplied, two phrase lines on desktop and natural four word lines on390px mobile. English equivalent updated. Desktop and mobile screenshots inspected: no overflow, full-height hero preserved; source photo, colors and logo unchanged. Vite build passed. final result: passed

## 18.10.2026 — new Site №2 monochrome logo

User target: third supplied crop `codex-clipboard-7cf1ce30-cc67-4cfc-8338-7149320b388b.png`, shown alongside five related references. Brief playback explicitly selected this compact trajectory mark/minimal wordmark for the header; user requested proceeding in this direction. Target supersedes the earlier coaster-on-supports lockup for Site №2 only.

Implementation assets: brand-motion-black.svg and brand-motion-white.svg, automatic Potrace conversion of supplied artwork, not hand-drawn paths or new AI logo geometry. Source crop preserved privately in parent outputs/gorkiland-brand-motion-2026-10-18/user-reference.png.

Comparison evidence: reference-vector-comparison.png combines normalized thresholded source and vector silhouette at equal960px width. Opened and reviewed. Monochrome-logo-preview.png shows black and white executions. Original reference365×88; traced artwork viewBox2406×329 including small safe padding. Proportional normalization only, no stretching.

Website evidence: site-desktop.png, site-light-header.png, site-mobile.png in the same parent output directory. Desktop native1265×712 / mobile390×844 checked. White logo on hero, black logo in open menu/light header, black footer logo confirmed from rendered DOM. Header placement and logo size preserve the established site layout.

Required surfaces: outlined source lettering retained; no external font required for the logo; two trajectory ribbons and wordmark spacing retained; black#0b1014 / white#ffffff; source gradients removed by monochrome conversion; no tagline at small sizes. Existing fullscreen headline, copy, colors and imagery unchanged. No visible P0/P1/P2 mismatch; small corner smoothing from tracing is intentional and visible in combined comparison.

Local Site №1 reopened and retains its original header, hero and four entrances. Original logo asset files unchanged. Browser error log empty. Content/asset verification passed; both entries build; packaging tests4/4 passed. New brand applied to Site №2 header and footer, no video replacement.

final result: passed

## 18.10.2026 — no-wrap phrases and restored logo tagline

User corrections supersede prior microtagline omission and mobile four-line wrap. Each hero phrase has white-space:nowrap. On phones the font is5vw so the complete phrases remain within the viewport. Final periods retained. Restored «ПРОЕКТИРУЕМ ЭМОЦИИ» under the original supplied vector wordmark in both SVG versions, using editable vector text and expanded viewBox380 high. Existing outlined symbol and name are unchanged; font family for the subtitle is Arial/sans-serif.

Visual evidence: parent outputs/gorkiland-brand-motion-2026-10-18/two-lines-mobile.png and two-lines-desktop.png opened in browser. At390×844, each phrase has one25.35px line box. At320×760, each has one20.8px line box and scrollWidth equals available263px. Page scrollWidth305px versus window320px including native scrollbar. EN also has no page overflow. Fullscreen hero retained. Logo subtitle visible on desktop and mobile. Native SVG text uses the requested actual phrase, not a raster approximation. Source user corrections are textual; no new visual concept requested.

Vite build passed. Both logo output files refreshed. No changes to Site№1 branding.
final result: passed


## 18.10.2026 — header logo scaled1.5

Explicit user scale request applied to Site№2 header identity including its subtitle: base350→525px, tablet280→420px, mobile172→258px, narrow155→232.5px. Image container height also52→78px and44→66px. Header vertical padding adapted to preserve desktop/tablet navigation. On phones the controls occupy a second row and menu offsets follow the129px header. Browser desktop1265×712 and narrow320×760 opened and inspected; no overflow or overlap; narrow logo width232.5px verified. Evidence: outputs/gorkiland-brand-motion-2026-10-18/logo-150-desktop.png in parent workspace; mobile view inspected. No changes to logo geometry, color, subtitle wording or Site№1. Vite build passed; original source/logo-size difference is intentional explicit feedback. final result: passed

## 18.10.2026 — selected one-row header option2

Source: second displayed result exec-e68c9155-7cf9-4c96-a4f3-aaed652195bd, parent outputs/gorkiland-header-options-2026-10-18/option-2.png. User chose2. Implemented source layout: logo left, RU/EN then menu at far right, no menu underline; mandatory logo tagline retained. Original SVG used instead of generated lettering. Supersedes earlier two-row mobile rule.

Browser390×844 capture implemented-option-2-mobile.png (native375px excluding scrollbar). Combined comparison selected-comparison.png: source1844×853 scaled proportionally to375px wide and padded7px below; actual cropped to375×180. Opened and compared. Intentional difference: real existing hero image crop retained instead of generated sky. Header alignment, white logo, lime active-language underline, control order and tagline match target. Existing Inter controls and source SVG wordmark retained.

Geometry390px: logo225px, center44px; languages center44px; menu center44px. At320px all centers44px, logo flexes165px; scrollWidth305 versus viewport320 including scrollbar, no overflow. Mobile header88px; menu offset88px. Desktop original large identity preserved. Tested menu open/Escape and RU/EN switching at320px. Source one-row and actual compared without P0/P1/P2 mismatches. No logo geometry, hero caption or Site№1 changes. Vite build passed.
final result: passed

## 18.10.2026 — unified Onest typography and three sizes

Source: existing Site№2 appearance at76f32d7, plus explicit user instruction to use one distinctive family outside the logo and no more than three sizes per page. Adopted self-hosted Onest (Latin/Cyrillic, OFL). Original wordmark outline remains unchanged; its supporting tagline converted from Arial text to Onest500 glyph outlines using the same source font. No claim of an exclusive custom typeface.

Implementation: src/typography.css imported only by main-bm.jsx. Three tokens:14/18/adaptive32–64px on desktop;12/16/28px on phones. All text inherits the family and token values, including menu, buttons, labels, placeholders, specifications, service scopes, dialogs and footer. Mobile hero uses16px to retain two unbroken phrases. Menu label is explicitly hidden on phones with aria-label retained, avoiding font-size0 workarounds.

Evidence: parent outputs/gorkiland-typography-2026-10-18/audit.json, before-viewport.png, after-viewport.png, typography-comparison-final.png, services-mobile.png, enquiry-mobile.png, product-mobile.png. The combined before/after viewport image was opened and reviewed. Viewport1280×720, native capture1265×712 excludes scrollbar/browser edge, same route/state and density1. Full-page images were NOT used as final comparison because that screenshot mode temporarily changes dynamic viewport units; the fixed viewport recapture is authoritative.

29 browser measurements:6 routes×2 languages×2 viewport classes, desktop menu, expanded service, service request form, product detail, narrow320px EN home. Every state: family Onest/sans-serif, exactly three rendered CSS text sizes, no horizontal overflow. At1280px the three sizes are14/18/53.76; at390/320px12/16/28. Prior home had14 computed sizes. Inspecting direct text nodes includes off-screen laid-out page content and fields; hidden nodes and vector-logo geometry are excluded. Source SVG supporting caption is independently verified as Onest outlined glyphs.

Fidelity surfaces: single family and controlled hierarchy; headings may differ in weight but not introduce sizes; established spacing/colors/photos retained; Cyrillic and English inspected; open form and product specification images opened and reviewed with no clipping or overlap. All heading-size changes are intentional explicit typography cleanup, rather than drift from the old mock. Site№1 does not import typography.css and retains its old typography. Font asset84.21KB WOFF2 served locally; license bundled. Browser audit files saved; content/assets verify passed, Vite multi-entry build passed, packaging tests4/4.

final result: passed

## Mobile B&M reference revision — 18.10.2026

Source visual truth: user attachments `3807787E-1545-4CCB-A9DB-2DD539C7E83A/1-Фото-1.jpg` and `3-Фото-3.jpg`; implementation: `outputs/gorkiland-mobile-bm-revision-2026-10-18/` in the parent workspace. The third reference was cropped to website content x0,y83,589×1065, excluding iOS/Safari chrome. Normalized to390×705. Browser CSS viewport390×705 produced375×678 capture pixels (browser capture scaling about0.962); normalized proportionally to390×705. Combined comparison: `reference-and-result.png`, opened and reviewed. Additional full-height390×844,320×700,430×932 and desktop1280×720 states inspected.

Initial findings against fresh `before.png`: [P1]16px headline lost the reference's dominant hierarchy; [P1] left-aligned text and sky-heavy crop did not work as a mobile poster; [P2] header language controls competed with the brand; [P2] left arrow broke the central axis. Initial result: blocked.

Fixes: four intentional lines using the shared display token; centered text with two final periods; focal crop72%; smaller one-row brand and white menu button; languages inside menu; centered48px scroll target. Mobile scroll-padding aligned to72px header. Later captures `after-390.png`, `after-320.png`, `english-390.png`, `menu-390.png`, `service-390.png`, `desktop.png` reviewed. Combined reference comparison confirms the intended central composition, generous image field and minimal header. Header/tagline and text wrapping are legible in the focused phone views.

Five fidelity surfaces:
- Typography: own Onest retained, uppercase Russian copy longer than reference English;40.95px at390,33.6px at320,45.15px at430;12/16 plus the single display size. No fourth size. English also fits. Internal pages audited after token change.
- Spacing: full100dvh; header72; central message and bottom arrow. Four lines intentionally replace prior two-line mobile instruction. Desktop remains left-aligned/two-line.
- Colors: own white/blue/lime retained. Reference red accent intentionally not copied. Text treatment includes a light darkening for contrast over equipment.
- Images: original approved Orion-derived photo, no B&M image substituted. **Static image remains an explicit material limitation; video fidelity is not achieved or claimed.** Current scope passes layout QA, not video production.
- Copy: exact Russian words and final periods; mandatory outlined logo tagline preserved. No browser chrome recreated.

Interactions verified: menu open, RU/EN switch inside menu, Escape closes and returns focus, direct Engineering service opens expanded, company arrow scrolls. All six mobile routes, open menu, RU/EN home and desktop have one font, three sizes and no horizontal overflow.320/390/430 widths checked. Source1 asset and entrypoint unchanged. No outstanding P0/P1/P2 layout findings. Video remains separately unimplemented pending suitable approved footage.

final result: passed (mobile layout scope; video not delivered)
