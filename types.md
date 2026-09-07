# types.html — Build Instructions

## Navigation
← from: index.html / define.html ("9 types of Punya Bandh" pill, 3rd subpoint)
→ to: index.html (home icon)

## Structure decision
Frames 19 & 18 are an intro->settle transition (mascot centered, title ribbon slides down from
off-canvas, 9 sub-point pills fade in around the mascot in a radial layout) — same pattern as
index.html's splash->topics transition, played automatically on page load (no button) since this
page is only ever entered via a page-transition click from index.html/define.html.

Frames 20/21/22 are 3 of what turns out to be a 6-slide detail view per sub-point (confirmed by
assets/videos/3/1/1-6.mp4 and assets/videos/3/2/1-6.mp4 on disk — 6 videos each for sub-points 1
"Anna Punya" and 2 "Paan Punya"), reached by clicking a sub-point pill in the menu. The detail view
has: a left sidebar listing all 9 sub-points (scrollable, active one highlighted), a video slider
(prev/next) in the rounded photo-frame, and a text box below.

Implemented as ONE page, data-driven from assets/js/types-data.js (mirrors the define.html /
data.js pattern), so adding sub-point 3+ later is just adding data + a video folder, no HTML edits.

## Frame 19 Guidelines (intro, node-id=21-2242)
  - mascot centered: same position family as index.html splash mascot but distinct values from
    this file's own data (boy left 39.39%/top 21.39%, mat/shadow/divider proportionally placed)
  - title ribbon off-canvas above (top -17.41%) — slides down to settled position on load
  - 9 sub-point pills off-canvas in their own radial directions — fade+scale into position on load
  - FL1/FL2 flowers per this frame's own values (distinct from index.html's)

## Frame 18 Guidelines (settled menu, node-id=21-1796)
  - title ribbon settled: top 2.96%, text "9 Types of Punya Bandh"
  - 9 sub-point pills, radial layout around mascot (exact px positions converted to % — see
    assets/css/types.css `.subpoint-pill` per-index rules), each pill's label from Figma:
    1 Anna Punya, 2 Paan Punya, 3 Aasan Punya, 4 Shayan Punya, 5 Vastra Punya, 6 Mann Punya,
    7 Vachan Punya, 8 Kaay Punya, 9 Namaskaar Punya
  - right-side step badges (1/2/3) — same component/position as define.html, badge 3 marked active
    since this is the "9 types" topic
  - on click of any sub-point pill → open the detail view for that sub-point (index 1 & 2 have
    real video+text data; 3-9 show a "coming soon" placeholder — flagged, not blocking)
  - off-canvas "TITLE/TEXT BOX/photo-frame/next" cluster in this frame's raw export is NOT visible
    per screenshot (same known Figma-export quirk as define.html) — excluded from the build

## Frame 20/21/22 Guidelines (detail view template, node-ids=21-2341, 32-6236, 32-6323)
  - left sidebar: vertical list of all 9 sub-points, ~3 visible at a time (scrollable), active
    sub-point styled as a solid pill (white text on purple), others plain (purple text on white)
  - photo-frame: video per slide, assets/videos/3/{subpointIndex}/{slideIndex}.mp4
  - text box below: content per slide (Definition / Examples / scenario for sub-point 1's first
    3 slides, from Figma; sub-point 1's slides 4-6 and all of sub-point 2's slides use a
    placeholder string — flagged, fill in via types-data.js as real copy is supplied)
  - prev/next arrows cycle slides within the active sub-point (auto-hide at first/last slide,
    same as define.html)
  - title ribbon switches to show the active sub-point's own name (e.g. "1. Anna Punya")

## Open items (flagged, not blocking build)
  - Only sub-points 1 (Anna Punya) and 2 (Paan Punya) have video assets on disk
    (assets/videos/3/1/ and assets/videos/3/2/, 6 clips each) — sub-points 3-9 render as inert
    sidebar entries with a "coming soon" placeholder until their assets + Figma frames are supplied.
  - Real copy only exists for sub-point 1, slides 1-3 (Definition/Examples/scenario) — slides 4-6
    for sub-point 1, and all 6 slides for sub-point 2, use placeholder text in types-data.js.
  - Hindi / Gujarati copy not available — English used as placeholder for all `.english/.hindi/.gujrati`
    spans, consistent with index.html/define.html.
  - The sidebar's Figma implementation uses a CSS mask + pixel-scroll animation for the 3-visible-
    at-a-time reveal; implemented here as a simpler `overflow-y` scroll region with the same visual
    sizing, since the exact mask-driven scroll mechanics aren't practical to replicate 1:1 in plain
    CSS/JS without materially changing behavior.
