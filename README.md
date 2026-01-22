# AETHER

AETHER is an experimental interface system focused on **weight, silence, and intent**.
It explores how motion, typography, and spatial hierarchy can communicate meaning without noise.

This project is not a component library and not a template. It is a **designed system** — where every animation is synchronized, every transition is deliberate, and every section behaves like part of a larger machine.

---

## Philosophy

Most interfaces decorate. AETHER distills.

- Motion is not spectacle — it is feedback
- Scroll is not navigation — it is time
- Layout is not alignment — it is structure

Every section enters, exists, and exits in coordination with the global rhythm of the page. Nothing animates alone.

---

## Tech Stack

- **Next.js (App Router)** — structural backbone
- **TypeScript** — strictness as a design constraint
- **Tailwind CSS** — utility-first, zero abstraction noise
- **GSAP** — animation engine
- **ScrollTrigger** — scroll-driven timelines
- **Lenis** — smooth scrolling with deterministic control

No animation libraries are layered on top of GSAP. No visual effects are handled by CSS alone when timing matters.

---

## Animation Architecture

AETHER uses a **section-based timeline model**.

Each major section:

- Owns a single GSAP timeline
- Is triggered by its own ScrollTrigger
- Animates **entry → presence → exit** in one continuous scrubbed timeline

This avoids:

- Staggered one-off triggers
- Desynced motion between sections
- Competing scroll effects

### Core Rules

- One ScrollTrigger per section
- No `toggleActions`
- No `onEnter` / `onLeave` side effects
- All motion lives inside timelines

Scroll position is the only source of truth.

---

## Smooth Scrolling (Lenis + GSAP)

Lenis is wired directly into GSAP’s ticker to ensure perfect synchronization.

Conceptually:

- Lenis controls scroll velocity
- GSAP reads scroll position
- ScrollTrigger reacts deterministically

No requestAnimationFrame duplication. No easing conflicts.

---

## Project Structure

```
app/
    lib/
        SmoothScroll.tsx         # Smooth scroll setup
    components/
        Navbar.tsx
        StatusBar.tsx
        Hero.tsx
        Discovery.tsx
        Interaction.tsx
        Manifesto.tsx
        Works.tsx
        Footer.tsx
  layout.tsx        # Global layout
  page.tsx          # Main composition
  global.css

```

Each section component:

- Is self-contained
- Registers its own GSAP context
- Cleans itself on unmount

---

## Local Development

```bash
# clone the repository
git clone https://github.com/chamakhmakh/aether.git

# install dependencies
npm install

# run the dev server
npm run dev
```

Open `http://localhost:3000`.

---

## Performance Notes

- Animations are transform-only (no layout thrashing)
- Opacity + transform used exclusively
- No continuous watchers outside ScrollTrigger
- GSAP contexts are properly reverted

This keeps frame pacing stable even on lower-end devices.

---

## Design Intent

This project intentionally avoids:

- Carousels
- Infinite marquees
- Overlapping parallax layers
- Unbounded easing

What remains is structure.

AETHER is an argument for restraint.

---

## License

MIT

---

## Final Note

This project is best understood by scrolling slowly.

Speed hides mistakes.
Silence reveals structure.
