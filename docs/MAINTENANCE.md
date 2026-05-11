# Maintenance Notes

These notes are for future edits after launch. The README is intentionally short; this file keeps the deeper details out of the way.

## Project Map

```txt
src/
  App/                       Route layout and global app shell
  components/Analytics/      Google Analytics route tracking
  components/Footer/         Site footer and footer links
  components/GoogleReviews/  Hardcoded Google review section
  components/Nav/            Header, address block, logo, nav links
  components/ReviewCard/     Individual review card UI
  config/site.js             Main business info and third-party URLs
  pages/ContactPage/         Contact, map, phone, directions, DoorDash
  pages/HomePage/            Homepage content and homepage CSS
  pages/MenuPage/            Menu image carousel and PDF downloads
  pages/PrivacyPage/         Simple privacy policy
  utils/analytics.js         Google Analytics helpers and custom events

public/
  _redirects                 Cloudflare Pages fallback for React routes
  images/                    Homepage/logo images
  menu/                      Menu PDFs and JPG menu images
  robots.txt                 Search engine crawl settings
  sitemap.xml                Search engine sitemap
```

## Business Info And Links

Start with:

```txt
src/config/site.js
```

That file controls the shared phone number, address, hours, DoorDash link, Facebook link, Google review links, directions link, and local history article link.

If the domain, social preview, business identity, or search metadata changes, also check:

```txt
index.html
public/sitemap.xml
public/robots.txt
```

## Homepage Images

Homepage public images live in:

```txt
public/images/
```

Current important files:

```txt
cobblestone-cafe-exterior.webp       Hero background and social preview image
logo-512.png                         Header logo and favicon
8d5b13da0ec52802dc87fa96f56e9d65.jpg Coffee/mug image
roll.jpg                             Cinnamon roll image
caption.jpg                          Eggs Benedict image
unnamed (1).webp                     Pancake image
unnamed.webp                         Breakfast plate image
mr-t-diner-washington-avenue.jpg     Historic downtown image
```

When replacing an image, update the `src`, `width`, `height`, and `alt` text in:

```txt
src/pages/HomePage/HomePage.jsx
```

For the hero crop, adjust `.hero` in:

```txt
src/pages/HomePage/HomePage.css
```

## Menu Assets

The menu page uses JPGs for the carousel and PDFs for downloads.

```txt
public/menu/
public/menu/images/
src/pages/MenuPage/MenuPage.jsx
```

Update the `menuFiles` array when replacing or reordering menu pages. Keep the order customer-friendly: breakfast first, lunch next, kids/seniors last.

Each item needs:

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

After changing menu assets, run:

```bash
npm run build
```

Then check the menu on mobile. The image intentionally pans horizontally on small screens so the scanned text stays readable.

## Reviews

Reviews are hardcoded in:

```txt
src/components/GoogleReviews/GoogleReviews.jsx
```

Dates are intentionally not shown so the section stays evergreen. Use real Google review links for `author_url`.

## Analytics

Analytics files:

```txt
src/components/Analytics/Analytics.jsx
src/utils/analytics.js
```

The Google Analytics measurement ID comes from:

```txt
VITE_GA_MEASUREMENT_ID
```

Local development uses `.env.development`. Production should use the Cloudflare Pages environment variable.

Custom events currently tracked:

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

## Security Notes

The site is intentionally simple:

- No customer accounts.
- No direct payments.
- No online order processing on this site.
- No stored customer data.
- No server-side API keys required.

Do not commit `.env`. Old Google API keys are not needed for the current static site.

## Launch Checks

Before calling a deploy final:

```bash
npm run lint
npm run build
```

Then test:

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
