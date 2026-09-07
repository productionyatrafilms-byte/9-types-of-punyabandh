# Figma Frame Links & Reading Instructions

---

## How to Read Each Frame
For every frame listed below, read ALL of the following from Figma MCP local server using get_nodes or get_file_nodes:

- Layout & spacing — exact positions, padding, margin, gap, alignment
- Layer names — use as class names and image filenames
- Layer hierarchy — parent > child order must match in HTML DOM
- Colors & gradients — exact hex/rgba values
- Typography — font family, size, weight, letter spacing, line height
- Images — read layer name, map to /assets/images/[layer-name].png
- Prototypes & interactions — every click, tap, hover action defined in Figma
- Navigation targets — which frame or page each interaction leads to
- Animations & transitions — type (instant, dissolve, slide, push etc), duration, easing
- Overlays — position, backdrop, close behavior
- Scroll behavior — fixed, sticky, overflow settings
- Component states — default, hover, pressed, disabled
- Variants — read all variant properties for each component
- Auto layout — direction, spacing, padding, fill/hug/fixed sizing
- Constraints — how layers scale or pin relative to parent

---

## Frame Index

## [index].html
| Frame | Node ID | Figma Link |
|-------|---------|------------|
| Frame 1 | node-id=q-2 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=17-454&m=dev] |
| Frame 2 | node-id=2-155 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=1-2&m=dev] |  
| Frame 4 | node-id=3-155 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=17-666&m=dev] |  
 


## [define].html
| Frame | Node ID | Figma Link |
|-------|---------|------------|
| Frame 3 | node-id=2-18 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=13-292&m=dev] |
| Frame 70 | node-id=2-18 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=35-11589&m=dev] |
| Frame 71 | node-id=2-18 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=35-11645&m=dev] |
| Frame 72 | node-id=2-18 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=35-11701&m=dev] |
  

---

## [types].html
| Frame | Node ID | Figma Link |
|-------|---------|------------|
| Frame 19 | node-id=2-18 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=21-2242&m=dev] |
| Frame 18 | node-id=2-18 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=21-1796&m=dev] |
| Frame 20 | node-id=2-18 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=21-2341&m=dev] |
| Frame 21 | node-id=2-18 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=32-6236&m=dev] |
| Frame 22 | node-id=2-18 | [https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=32-6323&m=dev] |
  




## Prototype & Interaction Map
> Fill this after reading Figma. Claude will use this to wire up click events and navigation.

| Page | Layer Name | Interaction | Target Frame / Page | Animation |
|------|------------|-------------|----------------------|-----------|
| [page].html | [layer-name] | on click | Frame N / [page].html | [type, duration] |
| [page].html | [layer-name] | on hover | — | [type, duration] |

---

## Synced Sliders
> Fill when a page has two sliders that move together.

| Page | Main Slider Layer | Synced Slider Layer | Effect | Node IDs per Slide |
|------|-------------------|---------------------|--------|--------------------|
| [page].html | [layer-name] | [layer-name] | fade | node-id=X, node-id=X ... |

---

## Overlay Map
> Fill when a frame opens as an overlay on top of another.

| Page | Trigger Layer | Overlay Frame | Position | Close on backdrop |
|------|---------------|---------------|----------|-------------------|
| [page].html | [layer-name] | Frame N | center / top / bottom | yes / no |

---

## Image Map
> Claude fills this after reading all frames via Figma MCP.

| Page | Layer Name | Image Path | Notes |
|------|------------|------------|-------|
| [page].html | [layer-name] | /assets/images/[filename].png | missing / found |