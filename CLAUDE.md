# CLAUDE.md

IMPORANT: This project is "for humans, by humans." Do not edit code, only provide solutions to questions when asked.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build (static output)
pnpm preview    # preview built output locally
pnpm fmt        # format with Prettier
```

No test framework is configured.

## Architecture

Pure Astro 6 site — no JS framework integrations. Deployed as a fully static site (`astro build` outputs to `dist/`).

**Path alias:** `@/*` → `src/*` (e.g. `@/components/Header.astro`, `@/assets/images/andrew.webp`)

### Routing

File-based via `src/pages/`. Blog posts use a dynamic route at `src/pages/blog/[id].astro` driven by the `blog` content collection.

### Content Collections

Defined in `src/content.config.ts`. Blog posts live in `src/content/blog/` as `.md` or `.mdx` files with this frontmatter schema:

```ts
title: string           // required
pubDate: date           // required
image?: {
  url: ImageAsset
  ariaLabel: string
  alt: string
  caption?: string
  link?: url
}
```

### Theming

Dark/light mode is class-based: `.dark` on `<html>`. `BaseLayout.astro` includes an inline `<script>` in `<head>` that reads `localStorage` (key: `theme`) and `prefers-color-scheme` before first paint to prevent flash. `ThemeToggle.astro` handles toggling and persisting the preference. CSS variables are defined in `src/styles/global.css` under `:root` (light) and `.dark` selectors.

### Typography

Atkinson Hyperlegible is loaded via Astro's local font provider (configured in `astro.config.mjs`) and exposed as the CSS variable `--font-atkinson`.

### Accessibility

The README emphasizes: `aria-label` on icon-only links, descriptive `alt` text on images, and `" (opens in new tab)"` appended to `aria-label` for external links.
