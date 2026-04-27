# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build → /dist
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

No test suite is configured.

## Architecture

**Wolfsdorff** is a fully static React SPA (no backend, no API calls, no auth) showcasing the legacy of surrealist painter Faiwel Wolfsdorf.

Stack: React 19, Vite 8, React Router v7, Framer Motion 12, Tailwind CSS 3.

### Routing

Defined in [src/App.jsx](src/App.jsx). All routes wrap their page in `<Layout>`:

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/portfolio` | Portfolio |
| `/gallery` | Gallery |
| `/legacy` | Services |
| `/contact` | Contact |

### Page structure

Every page uses the same Framer Motion wrapper pattern:

```jsx
<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
  <div className="container-custom">
    {/* content */}
  </div>
</motion.div>
```

`pageTransition` variants are defined locally in each page file.

### State management

Local `useState` only — no Context or Redux. Key state per component:
- **About.jsx** — audio playback, carousel indices, modal visibility
- **Portfolio.jsx** — category filter, selected artwork lightbox
- **Gallery.jsx** — selected exhibition modal
- **Layout.jsx** — mobile menu + submenu toggle

### Data

All artwork/exhibition data lives as static arrays inside the page components themselves (no separate data files or external fetches).

### Styling conventions

- Tailwind utility classes throughout; `stone-*` is the primary color palette
- Custom component classes defined in [src/index.css](src/index.css): `.container-custom`, `.btn-primary`, `.btn-outline`, `.link-animated`
- Serif font for headings (`font-serif`), uppercase tracking for labels
- SVG noise texture applied as overlay for visual depth

### Animations

All animations use Framer Motion:
- Page entry/exit: `variants={pageTransition}` with `AnimatePresence` in App.jsx
- Scroll-triggered reveals: `whileInView` + `viewport={{ once: true }}`
- Stagger groups: `staggerChildren` on container variants
- Modals/lightboxes: `AnimatePresence` wrapping conditional renders

### Assets

Images are statically imported at the top of each component file. Key collections:
- `src/assets/images/ElArconDeLosRecuerdos/` — 24 scanned archive images (used in About)
- `src/assets/images/Taller/` — 5 workshop images
- `src/assets/` — Bach's *Air on G String* audio file (~7 MB), played from the fixed button in About
