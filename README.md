# Cobblestone Cafe Website

Production website for Cobblestone Cafe & Malt Shoppe in downtown White Bear Lake, MN.

This is a static React/Vite site. There is no backend server, no payment handling, no customer accounts, and no form storage. External services are linked or embedded where needed: Google Maps, Google Reviews, Facebook, DoorDash, and Google Analytics.

## Quick Start

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open the localhost URL Vite prints, usually:

```txt
http://127.0.0.1:5173/
```

Do not test the production app by opening `index.html` with a `file://` URL. Vite environment variables, routing, and asset paths are meant to run through Vite locally or through the production build on Cloudflare Pages.

Run checks before deploy:

```bash
npm run lint
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```txt
src/
  App/
    App.jsx                 Route layout and global app shell
    App.css                 Global reset, page background, focus styling
  components/
    Analytics/              Initializes Google Analytics page tracking
    Footer/                 Site footer and footer links
    GoogleReviews/          Hardcoded Google review section
    Nav/                    Header, address block, logo, nav links
    ReviewCard/             Individual review card UI
  config/
    site.js                 Main business info and third-party URLs
  pages/
    ContactPage/            Contact, map, phone, directions, DoorDash
    HomePage/               Homepage sections and homepage-specific CSS
    MenuPage/               Menu image carousel and PDF downloads
    NotFoundPage/           404 page
    PrivacyPage/            Simple privacy policy
  utils/
    analytics.js            Google Analytics helpers and custom events

public/
  _redirects                Cloudflare Pages SPA fallback for React routes
  images/                   Public homepage/logo images
  menu/                     Menu PDFs and JPG menu images
  robots.txt                Search engine crawl settings
  sitemap.xml               Search engine sitemap
```

## What To Edit Most Often

### Business Info, Links, And Hours

Start here:

```txt
src/config/site.js
```

This file controls the shared phone number, address, hours text, DoorDash link, Facebook link, Google review links, directions link, and local history article link.

If the address, hours, phone, website URL, or social links change, update `src/config/site.js` first.

Also update these static SEO files when the business identity or domain changes:

```txt
index.html
public/sitemap.xml
public/robots.txt
```

`index.html` contains the title, description, social preview image, structured data, and the Google Analytics bootstrap snippet.

### Homepage Images

Homepage public images live here:

```txt
public/images/
```

Current important files:

```txt
cobblestone-cafe-exterior.webp      Hero background and social preview image
logo-512.png                        Header logo and favicon
8d5b13da0ec52802dc87fa96f56e9d65.jpg Coffee/mug image in Hours & Location
roll.jpg                            Cinnamon roll image in the menu preview grid
caption.jpg                         Eggs Benedict image
unnamed (1).webp                    Pancake image
unnamed.webp                        Breakfast plate image
mr-t-diner-washington-avenue.jpg    Historic downtown image
```

When replacing an image:

1. Put the new optimized image in `public/images/`.
2. Update the `src` path in `src/pages/HomePage/HomePage.jsx` if the filename changed.
3. Update width and height attributes to match the real image dimensions.
4. Keep `alt` text accurate and plain.
5. Run `npm run build`.

For the hero background, also update this CSS if the crop needs adjustment:

```txt
src/pages/HomePage/HomePage.css
```

Look for `.hero`.

### Menu PDFs And Images

Menu assets live here:

```txt
public/menu/
public/menu/images/
```

The menu page uses JPG images for fast on-page viewing and PDFs for downloads. That is intentional: images are easier to read in the carousel, PDFs are better for downloading or printing.

The menu order and labels are controlled here:

```txt
src/pages/MenuPage/MenuPage.jsx
```

Look for the `menuFiles` array. Each menu item needs:

```js
{
  title: 'Customer-facing title',
  section: 'Breakfast',
  image: '/menu/images/file-name.jpg',
  pdf: '/menu/file-name.pdf',
  detail: 'Short description shown above the menu image.',
  alt: 'Accessible description of the menu image.',
  width: 1159,
  height: 1500,
}
```

When replacing a menu:

1. Export a readable JPG for the carousel.
2. Export or keep the matching PDF for download.
3. Put the JPG in `public/menu/images/`.
4. Put the PDF in `public/menu/`.
5. Update the matching entry in `menuFiles`.
6. Run `npm run build`.
7. Check the menu on mobile. The menu image intentionally pans horizontally on small screens so the text stays readable.

### Reviews

Reviews are hardcoded here:

```txt
src/components/GoogleReviews/GoogleReviews.jsx
```

The site does not display review dates. That keeps the section evergreen and avoids implying a live Google API feed.

If you add or replace a review, use a real Google review link for `author_url`. If an avatar breaks, the card falls back to initials automatically.

### Analytics

Analytics is initialized in:

```txt
src/components/Analytics/Analytics.jsx
src/utils/analytics.js
```

The Google Analytics measurement ID comes from:

```txt
VITE_GA_MEASUREMENT_ID
```

Local development currently uses:

```txt
.env.development
```

Production should use the Cloudflare Pages environment variable:

```txt
VITE_GA_MEASUREMENT_ID=G-LLJGEFCDEN
```

Do not commit `.env`. It is intentionally ignored.

Tracked custom events include:

```txt
page_view
menu_click
order_online_click
directions_click
phone_click
facebook_click
google_reviews_click
leave_review_click
menu_section_click
menu_pdf_download_click
menu_full_size_image_click
menu_carousel_click
google_review_card_click
history_article_click
```

## Cloudflare Pages Deployment

Recommended hosting: Cloudflare Pages.

Cloudflare Pages settings:

```txt
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
```

Environment variable:

```txt
VITE_GA_MEASUREMENT_ID=G-LLJGEFCDEN
```

Custom domains to add:

```txt
thecobblestonecafe.com
www.thecobblestonecafe.com
```

Preferred canonical domain:

```txt
https://thecobblestonecafe.com
```

After launch, verify:

```txt
https://thecobblestonecafe.com
https://www.thecobblestonecafe.com
http://thecobblestonecafe.com
http://www.thecobblestonecafe.com
```

They should all land on a sane HTTPS version of the site.

## Security Notes

This site is intentionally simple:

- No customer accounts.
- No direct payments.
- No online order processing on this site.
- No stored customer data.
- No server-side API keys required.
- DoorDash, Google Maps, Facebook, and Google Reviews are external links or embeds.

Keep `.env` private. If old Google API keys are sitting in your local `.env`, do not push them. They are not needed for the current static site.

## Pre-Launch Checklist

Run:

```bash
npm run lint
npm run build
```

Then test on desktop and mobile:

- Home page loads with the exterior hero image.
- Header/nav works at phone, tablet, and desktop widths.
- Menu carousel is readable on mobile.
- `Open full-size image` works on the menu page.
- `Download PDF` works on the menu page.
- Phone links open the call prompt on mobile.
- Directions opens Google Maps.
- DoorDash opens the Cobblestone store.
- Facebook section loads or falls back gracefully.
- Privacy page exists.
- Unknown routes show the 404 page.
- Google Analytics realtime detects a visit after deployment.
- `https://thecobblestonecafe.com/sitemap.xml` loads after deployment.

## Routine Maintenance

For hours, phone, address, and links:

```txt
src/config/site.js
```

For homepage text and section order:

```txt
src/pages/HomePage/HomePage.jsx
```

For homepage styling:

```txt
src/pages/HomePage/HomePage.css
```

For menu order, names, images, and PDFs:

```txt
src/pages/MenuPage/MenuPage.jsx
public/menu/
```

For SEO and social previews:

```txt
index.html
public/sitemap.xml
```

When in doubt, make the edit, run lint/build, and test the affected page on mobile.
