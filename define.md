# define.html — Build Instructions

## Navigation
← from: index.html ("What is Punya & Paap ?" pill)
→ to: earn-punya.html (pill "What do we earn from Punya?", not yet built), index.html (pill "9 types of Punya Bandh" / home icon)

## Structure decision
4 Figma frames (Frame 3, 70, 71, 72) share identical chrome (title ribbon, mascot, home icon,
language switch, background flowers, right-side step badges) and differ only in:
  - the photo/media inside the rounded frame
  - the text-box copy below it
This is implemented as ONE page with a Swiper.js slider containing 4 slides — chrome rendered once
outside the slider, slide content (media + text) swapped per slide. Matches project rule "Slider:
implement using Swiper.js" and avoids duplicating identical markup 4 times.

Per this session's instruction, the "photo" area is a **video**, not a static image — one file per
slide from assets/videos/1/1.mp4, 2.mp4, 3.mp4, 4.mp4 (slide N -> N.mp4). Videos autoplay, loop,
muted, playsinline (silent looping demo clips, no controls).

## Frame 3 Guidelines (Slide 1 — "Punya", node-id=13-292)
  3- read frame 3 from figma mcp local server https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=13-292&m=dev

    3.1- global chrome (rendered once, shared by all 4 slides)
      3.1.1- home button top-left: assets/images/home-icon.svg, class [left-corner], links -> index.html
      3.1.2- language switch: reuse existing #langSelect markup verbatim (class [language])
      3.1.3- BG: assets/images/bg-1.png; FL1: assets/images/FL1... (reuse FL2.png per this session's convention) — same treatment as index.html
      3.1.4- mascot (boy, partially off-canvas left) — same asset/position family as index.html's topics mascot
      3.1.5- title ribbon: assets/images/title-ribbon.svg background, text "What is Punya & Paap?", font News701 BT Bold, white, centered — same on all 4 slides
      3.1.6- right-side step badges (1/2/3 numbered circles) — inert placeholders (link targets earn-punya.html / index.html not fully wired since those pages aren't built); flagged, not blocking

    3.2- slide 1 content
      3.2.1- video: assets/videos/1/1.mp4 inside the rounded photo-frame (border 13px #fee6c4, rounded 52px)
      3.2.2- text box: label "PUNYA" (color #b12d99) + body "When one performs good deeds, he gains Good Karma which is called Punya." (color #4222aa)

    3.3- on click of Next -> slide 2
    3.4- on click of Prev -> disabled/hidden on slide 1 (first slide)

## Frame 70 Guidelines (Slide 2 — "Paap", node-id=35-11589)
    - video: assets/videos/1/2.mp4
    - text box: label "PAAP" (color #b12d99) + body "When one performs Bad Deeds, he gains Bad karma which is called Paap."
    - Next -> slide 3, Prev -> slide 1

## Frame 71 Guidelines (Slide 3 — combined summary, node-id=35-11645)
    - video: assets/videos/1/3.mp4
    - text box (wider, no colored label line): "Punya can be earned through good intentions, kind words, and helping those in need. On the other hand, Paap is accumulated when we speak negatively, behave badly, or think ill of others. Both lead to completely different outcomes."
    - Next -> slide 4, Prev -> slide 2

## Frame 72 Guidelines (Slide 4 — outcome, node-id=35-11701)
    - video: assets/videos/1/4.mp4
    - text box: "Punya brings good things into our life, while Paap brings bad things into our life."
    - Next -> disabled/hidden on slide 4 (last slide), Prev -> slide 3

## Open items (flagged, not blocking build)
  - Right-side "1/2/3" step badges' real destinations (earn-punya.html, overview) aren't built yet — rendered inert (non-navigating) same as index.html's pill placeholders.
  - Hindi / Gujarati copy not available for this page's text — English used as placeholder in all `.english/.hindi/.gujrati` spans, consistent with index.html.
  - Photo-frame media in Figma is a static illustration per slide; per this session's explicit instruction the build uses a looping muted video (assets/videos/1/N.mp4) instead.
