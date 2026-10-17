# Prototype Instructions

## Approved project decisions

17.10.2026 revision: user supplied an INTAMIN mobile reference and asked for more breathing room and visible additional services at the top. Use a white persistent header, black version of the approved logo, larger white content areas, calmer heading scale, and a Services navigation dropdown with direct anchors. Expand services from public company sources; preserve all ride families and the chosen logo.

17.10.2026: brand ГоркиLand, legal entity ООО «Лабораттория»; no APEX branding. Selected website concept 2 (dark cinematic / lime). Initial abstract G logos rejected. Selected the first of the two latest industrial logo lockups: roller coaster on supports plus dense geometric wordmark (`public/assets/logo.svg`). Preserve that font and emblem. Use original manufacturer portfolio; clearly distinguish manufacturing projects and new offers from opened rides. RU and EN. Separate public GitHub repository and preview, without changing gorkiland.ru. Private strategy/research remains outside this public repository.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
