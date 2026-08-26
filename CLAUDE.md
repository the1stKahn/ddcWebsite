# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static marketing site for "Diversified Dynamic Care" — plain HTML/CSS, no build system, no package manager, no framework, and no dependencies.

## Structure

- `index.html` — the only page currently populated; a hero section with a nav bar, logo, and headline.
- `css/style.css` — all styling for the site.
- `images/` — logo and hero background image.
- `pages/` — empty directory, presumably reserved for future pages (About Us, Services — see the nav links in `index.html` which currently point to `#`).

## Development

There is no build, lint, or test tooling. Edit `index.html` and `css/style.css` directly and open `index.html` in a browser (or serve the directory with any static file server) to preview changes.
