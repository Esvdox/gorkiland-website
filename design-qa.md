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
