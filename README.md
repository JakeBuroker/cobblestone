# Cobblestone Cafe Website

Production website for Cobblestone Cafe & Malt Shoppe in downtown White Bear Lake, MN.

Static React/Vite site deployed with Cloudflare Pages.

## Quick Start

```bash
npm install
npm run dev
```

Use the localhost URL Vite prints, usually:

```txt
http://127.0.0.1:5173/
```

Do not test by opening `index.html` with a `file://` URL. Routing, assets, and environment variables are meant to run through Vite locally or Cloudflare Pages in production.

## Before Deploying

```bash
npm run lint
npm run build
```

## Cloudflare Pages

Use these build settings:

```txt
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
```

Set this production environment variable in Cloudflare Pages:

```txt
VITE_GA_MEASUREMENT_ID=G-LLJGEFCDEN
```

Add these custom domains:

```txt
thecobblestonecafe.com
www.thecobblestonecafe.com
```

Preferred canonical domain:

```txt
https://thecobblestonecafe.com
```

## Common Edits

Most business info and external links live here:

```txt
src/config/site.js
```

Menu pages are managed here:

```txt
src/pages/MenuPage/MenuPage.jsx
public/menu/
```

Homepage content is mostly here:

```txt
src/pages/HomePage/HomePage.jsx
src/pages/HomePage/HomePage.css
public/images/
```

Extra maintenance notes live in:

```txt
docs/MAINTENANCE.md
```
