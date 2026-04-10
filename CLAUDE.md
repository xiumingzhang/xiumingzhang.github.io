# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal academic homepage for Xiuming Zhang, hosted on GitHub Pages at xiuming.info. Pure static HTML/CSS/JS — no build step, no static site generator. Modified from HTML5 UP's "Read Only" template.

## Development

- **No build system.** Open `index.html` in a browser or use any static file server (e.g., `python3 -m http.server`).
- **Deployment** is automatic — push to `master` and GitHub Pages serves it.
- **Formatting:** Prettier is configured (`.prettierrc`): 80-char width, 2 spaces, single quotes, semicolons, LF endings. VSCode auto-formats on save.

## Architecture

**Single-page design.** Nearly all content lives in `index.html` (~2400 lines), organized as sections navigated by anchor links (#about, #news, #products, #publications, #press, #services).

**Responsive framework:** skel.js (`js/skel.min.js` + `js/skel-layers.min.js`) manages 5 breakpoints configured in `js/init.js`. Each breakpoint has a corresponding CSS file:
- `css/style.css` — base styles
- `css/style-xlarge.css` through `css/style-xsmall.css` — breakpoint overrides (1680px, 1280px, 1024px, 736px, 480px)

**Separate pages** under `pages/` (bio.html, name.html) and `projects/` (e.g., nerfactor/) have their own stylesheets independent of the main page.

**Icons:** Font Awesome 6 (WOFF2 only, local fonts via `css/fa6-local-fonts.css`) and Academicons (`css/academicons.css`).

**JS stack:** jQuery + scrolly/scrollzer plugins for smooth scroll and active nav state tracking.

## Key Files

- `index.html` — the entire homepage content and structure
- `js/init.js` — skel breakpoint config and page initialization
- `css/style.css` — primary stylesheet
- `CNAME` — custom domain mapping to xiuming.info
