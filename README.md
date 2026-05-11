# Cobblestone Cafe Website

Production website for Cobblestone Cafe & Malt Shoppe, a local breakfast, lunch, and malt shop in downtown White Bear Lake, Minnesota.

The site is built as a static React/Vite app and is intended to deploy on Cloudflare Pages.

## Features

- Responsive homepage with cafe hours, location, history, reviews, Facebook, and DoorDash links
- Mobile-friendly menu viewer with image carousel and downloadable PDFs
- Contact page with phone, directions, ordering, and embedded map
- Google Analytics event tracking for menu, phone, directions, review, Facebook, and order clicks
- SEO basics: structured restaurant data, sitemap, robots.txt, social preview metadata, and privacy page

## Tech Stack

- React
- Vite
- React Router
- Cloudflare Pages

## Local Development

```bash
npm install
npm run dev
```

Use the localhost URL Vite prints, usually:

```txt
http://127.0.0.1:5173/
```

Do not test by opening `index.html` directly with a `file://` URL. Routing, assets, and environment variables are meant to run through Vite locally or Cloudflare Pages in production.

## Checks

```bash
npm run lint
npm run build
```

## Deployment

Cloudflare Pages settings:

```txt
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
```

Production environment variable:

```txt
VITE_GA_MEASUREMENT_ID=G-LLJGEFCDEN
```

Production domain:

```txt
https://thecobblestonecafe.com
```

## Common Updates

Business info, hours, and external links:

```txt
src/config/site.js
```

Homepage:

```txt
src/pages/HomePage/
public/images/
```

Menu page and menu files:

```txt
src/pages/MenuPage/MenuPage.jsx
public/menu/
```
