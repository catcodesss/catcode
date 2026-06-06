# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

CatCodee — freelance web design & maintenance landing page. Static single-page site (no build system, no dependencies).

**Serve locally:**
```powershell
python -m http.server 8000   # → http://localhost:8000
```
Or open `index.html` directly in a browser.

## Structure

```
index.html   — single-page site; sections in order: hero → servicios → proceso → sobre-mi → contacto
style.css    — all styles; CSS custom properties in :root
script.js    — header scroll effect, mobile nav toggle + slide animation, smooth scroll with header offset
```

## Design system

CSS custom properties in `:root` (`style.css`):
- Brand: `--orange #FFAA6E` / `--orange-dark #E07A3E` / `--orange-lighter #FFF0E6`
- Backgrounds: `--cream #FFF9F5` (default page), `--peach #FDEADE` (proceso section), `--dark #1E1E1E` (contacto section)
- Typography: `--text #2C2C2C` / `--text-mid #6A6A6A` / `--text-soft #A0A0A0`
- Border: `--border #EED9CC`

Font: Inter, loaded from Google Fonts. No local font files.

Responsive breakpoints: 900px (4-col grid → 2-col), 768px (desktop nav → hamburger), 500px (single column).

## Contact / brand info

- WhatsApp: `977404050` → `https://wa.me/51977404050`
- Email: `dylan_cal@outlook.com`
- Brand name: CatCodee (cat-themed; cat paw SVG used as logo icon throughout)
