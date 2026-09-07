# index.html — Build Instructions

## Navigation
← from: (entry page — no previous)
→ to: jeev.html (paused — Figma link not yet provided) and 3 not-yet-built topic pages

## Correction note (read first)
Frames 2 and 3's raw Figma export data include a "TITLE / TEXT BOX / photo-frame / next-prev arrow"
node cluster (ribbon "What is Punya?", paragraph text, decorative photo card). Screenshots of both
frames confirm this cluster is positioned off-canvas and is **not visible** in either frame — it is
excluded from the build entirely. Ground truth = the screenshots, not the raw exported coordinates,
wherever the two disagree (this cluster is the only place they disagreed).

## Structure decision
Frames 1 → 2 → 3 form one onboarding sequence, not three separate pages:
- Frame 1: splash (centered mascot + title + Enter button)
- Frame 2: transitional state — mascot/heading have moved to the left-aligned "topics" position,
  heading only, pills not yet visible
- Frame 3: settled state — same left-aligned layout as Frame 2, plus 3 topic pills

Frame 2 has no unique static content beyond a mid-transition layout, so it is implemented as the
"settle" animation (CSS transition) from splash → topics rather than its own dead-end section.
index.html therefore has 2 sections: `#section-splash` (Frame 1) and `#section-topics` (Frame 3,
which visually contains Frame 2's layout plus the pills).

## Frame 1 Guidelines (Splash / Enter screen)
  1- read frame 1 from figma mcp local server https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=17-454&m=dev (node-id=17:454)
     for image reference use @assets/images/

    1.1- BG — assets/images/bg-1.png, full-bleed cover, position absolute inset:0

    1.2- FL1 / FL2 — large rotated flower-petal decorative graphics, symmetric behind mascot
      1.2.1- FL1: assets/images/fl-1.png — size 178.97vw square, left 50.0%, top 51.95% (center), rotate -72.64deg
      1.2.2- FL2: assets/images/fl-2.png — size 50.17vw square, left 119.6%, top 1.1%, rotate -72.64deg, opacity 35%

    1.3- mascot group (centered) — assets/images/shadow-intro.svg, seat-mat-intro.svg, boy-meditating.png
      1.3.1- boy image: left 39.67%, top 7.87%, width 20.05%, height 54.75%
      1.3.2- seat mat: left 36.61%, top 51.72%, width 26.72%, height 10.86%
      1.3.3- shadow ellipse: left 39.44%, top 58.69%, width 21.11%, height 2.59%
      1.3.4- divider line (#dfd0de): left 36.66%, top 62.58%, width 26.67%, height 0.567vw
      1.3.5- stack order back→front: shadow → seat mat → divider line → boy

    1.4- title text: left 24.0%, top 65.6%, width 52.0%, centered
      1.4.1- line 1 "9 Types of" font-size clamp(~3.33vw), line 2 "Punya Bandh" font-size clamp(~5.73vw)
      1.4.2- font News701 BT Bold (fallback: Georgia/serif bold — font file not in /fonts, flagged)
      1.4.3- gradient text fill, radial purple→magenta: #4222aa → #5e25a5 → #7928a1 → #b12d99
      1.4.4- text-shadow 0 4px 4px rgba(0,0,0,0.25)
      1.4.5- render via .english/.hindi/.gujrati spans — Hindi/Gujarati copy not in Figma text nodes, English used as placeholder for all 3 until translated strings supplied (flagged)

    1.5- Enter button: left 45.0%, top 86.2%, width 10.02%, height 5.67%
      1.5.1- gradient bg #ffd0a9 → #ffa659, border 0.16vw solid #fff2e2, rounded full (border-radius 50vw), drop-shadow 0 11px 15.4px rgba(0,0,0,0.25)
      1.5.2- label "Enter" — font Baloo Regular (assets/fonts — file present), white, centered, font-size clamp(~1.875vw)

    1.6- on click of Enter → add "settled" state class to page (triggers CSS transition of mascot+heading from centered/splash position to left-aligned/topics position), hide Enter button + splash-only decor, reveal back button + pills

## Frame 2 Guidelines (transitional layout — folded into Frame 3's section, see Structure decision)
  2- read frame 2 from figma mcp local server https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=1-2&m=dev (node-id=1:2)

    2.1- confirms left-aligned mascot position (same coordinates as 3.2) and heading-only state (no pills yet) —
         implemented purely as the CSS starting-state of the transition described in 1.6; no separate markup

## Frame 3 Guidelines ("topics" section — settled state with pill list)
  3- read frame 3 from figma mcp local server https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=17-666&m=dev (node-id=17:666)
     for image reference use @assets/images/

    3.1- global chrome
      3.1.1- back button: assets/images/back-arrow.svg, class [left-corner], left 3.33%, top 3.80%, width 2.69%, links → back to #section-splash
      3.1.2- language switch: reuse existing #langSelect markup from basic-template.html verbatim (class [language], never rebuild/restyle)
      3.1.3- BG: assets/images/bg-1.png, same as 1.1

    3.2- FL1 / FL2 — smaller, left-weighted (distinct from Frame 1's symmetric version)
      3.2.1- FL1: assets/images/fl-1.png — size 76.8vw square, left 17.77%, top 50%, rotate -72.64deg
      3.2.2- FL2: assets/images/fl-2.png — size 50.17vw square, left 99.3%, top 1.1%, rotate -72.64deg, opacity 35%

    3.3- mascot group (left-aligned) — same assets as 1.3 but different sizing/position + different mat/shadow art
      3.3.1- boy image: left 6.72%, top 18.43%, width 22.92%, height 62.5%
      3.3.2- seat mat: assets/images/seat-mat.svg — left 3.23%, top 68.51%, width 30.52%, height 12.41%
      3.3.3- shadow ellipse: assets/images/shadow.svg — left 6.46%, top 76.48%, width 24.11%, height 2.96%
      3.3.4- divider line: left 3.28%, top 80.93%, width 30.47%, height 0.648vw

    3.4- heading: left 48.0%, top 14.5%, width 52.0% — same style as 1.4 (line1 "9 Types of", line2 "Punya Bandh")

    3.5- topic pill stack (below heading, right side) — 3 pills, no distinct "active" style found in source data, all rendered identically
      3.5.1- pill shape: assets/images/pill-shape.svg background, font Krungthep Regular (fallback: rounded sans — file not in /fonts, flagged), color #7a32a1, text-shadow 0 2px 2px rgba(0,0,0,0.2)
      3.5.2- shared box size: width 21.9%, height 12.1%, left 63.1%
      3.5.3- pill 1: top 38.3% — "What is Punya & Paap ?" → placeholder link, target page not yet built
      3.5.4- pill 2: top 55.1% — "What do we earn from Punya?" → placeholder link, target page not yet built
      3.5.5- pill 3: top 71.9% — "9 types of Punya Bandh" → placeholder link (overview), target page not yet built
      3.5.6- render each label via .english/.hindi/.gujrati spans (English placeholder for all 3 langs, flagged, same as 1.4.5)

## Open items (flagged, not blocking build)
  - Hindi / Gujarati copy not present in any Figma text node read so far — English used as placeholder in all `.english/.hindi/.gujrati` spans until translated strings are supplied.
  - Fonts "Krungthep" and "News701 BT Bold" are referenced by the design but their font files are not in /fonts (only Baloo, ITFDevanagari, NotoSansGujarati are present) — using close system-font fallbacks, noted in CSS comments, until the real font files are supplied.
  - The 3 pills have no destination frame in figma-links.md yet — rendered as inert (non-navigating, `href="#"`) list items.
  - jeev.html Frame 5 (node-id=2-18) has no Figma URL in figma-links.md — build paused for that page per user instruction.
  - The off-canvas "TITLE/TEXT BOX/photo-frame" cluster present in Frames 2 & 3's raw export (ribbon "What is Punya?", paragraph "When one performs good deeds...") is NOT part of either frame's visible design (confirmed via screenshot) and was intentionally omitted — see Correction note above.
