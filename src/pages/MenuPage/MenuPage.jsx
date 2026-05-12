import { useState } from 'react';

import '../PageStyles.css';
import { trackEvent } from '../../utils/analytics';
import { links } from '../../config/site';

// These are the public menu pages shown in the carousel. Keep this array in the
// order customers should browse: breakfast first, then lunch, then kids/seniors.
// Every entry needs a JPG image for fast viewing and a matching PDF for download.
const menuFiles = [
  {
    title: 'All-Day Breakfast',
    section: 'Breakfast',
    image: '/menu/images/all-day-breakfast.jpg',
    pdf: '/menu/all-day-breakfast-menu.pdf',
    detail: 'Classic breakfasts, omelets, pancakes, waffles, sides, and morning drinks.',
    alt: 'Cobblestone Cafe all-day breakfast menu with omelets, pancakes, waffles, side orders, and beverages.',
    width: 1159,
    height: 1500,
  },
  {
    title: 'Breakfast Specialties',
    section: 'Breakfast',
    image: '/menu/images/breakfast-specialties.jpg',
    pdf: '/menu/breakfast-specialties.pdf',
    detail: 'Country fried steak, skillets, Benedicts, hashes, omelets, and breakfast wraps.',
    alt: 'Cobblestone Cafe breakfast specialties menu with skillets, Benedicts, hashes, omelets, and wraps.',
    width: 1159,
    height: 1500,
  },
  {
    title: 'Burgers, Sandwiches & Wraps',
    section: 'Lunch',
    image: '/menu/images/burgers-sandwiches-wraps.jpg',
    pdf: '/menu/burgers-sandwiches-wraps.pdf',
    detail: 'Burgers, grilled sandwiches, club favorites, Reubens, and tortilla wraps.',
    alt: 'Cobblestone Cafe lunch menu with burgers, sandwiches, and tortilla wraps.',
    width: 1159,
    height: 1500,
  },
  {
    title: 'Soups, Hot Dogs & Malts',
    section: 'Lunch',
    image: '/menu/images/hot-dogs-soups-malts-shakes.jpg',
    pdf: '/menu/hot-dogs-soups-malts-shakes.pdf',
    detail: 'Hot sandwiches, dinners, hot dogs, soups, salads, sides, malts, shakes, and sundaes.',
    alt: 'Cobblestone Cafe lunch menu with hot sandwiches, dinners, hot dogs, soups, salads, sides, malts, shakes, and sundaes.',
    width: 927,
    height: 1200,
  },
  {
    title: 'Kids & Senior Menu',
    section: 'Kids & Seniors',
    image: '/menu/images/kids-senior-menu.jpg',
    pdf: '/menu/kids-senior-menu.pdf',
    detail: 'Smaller breakfast and lunch plates for kids and seniors.',
    alt: 'Cobblestone Cafe kids meals and senior menu with breakfast and lunch options.',
    width: 1159,
    height: 1500,
  },
];

function MenuPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMenu = menuFiles[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex === 0 ? menuFiles.length - 1 : currentIndex - 1;
      trackEvent('menu_carousel_click', {
        direction: 'previous',
        menu_title: menuFiles[nextIndex].title,
      });
      return nextIndex;
    });
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex === menuFiles.length - 1 ? 0 : currentIndex + 1;
      trackEvent('menu_carousel_click', {
        direction: 'next',
        menu_title: menuFiles[nextIndex].title,
      });
      return nextIndex;
    });
  };

  return (
    <main id="main-content" className="page-shell">
      <section className="page-hero menu-hero">
        <p className="menu-kicker">Menu Viewer</p>
        <h1>Menu</h1>
        <p>
          Browse Cobblestone Café menus by section with full-page images, quick
          switching, and downloadable PDFs for breakfast, lunch, kids meals, and malts.
        </p>
      </section>

      <section className="menu-carousel" aria-label="Menu image carousel">
        <div className="menu-file-strip" aria-label="Choose a menu page">
          {menuFiles.map((item, index) => (
            <button
              type="button"
              key={item.image}
              className={`menu-file-tab${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => {
                setActiveIndex(index);
                trackEvent('menu_section_click', { menu_title: item.title });
              }}
              aria-pressed={index === activeIndex}
            >
              <span>{item.section}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>

        <div className="menu-carousel-shell">
          <div className="menu-carousel-header">
            <div>
              <p className="menu-kicker">{activeMenu.section}</p>
              <h2>{activeMenu.title}</h2>
              <p>{activeMenu.detail}</p>
            </div>

            <div
              className="menu-carousel-controls menu-carousel-controls-desktop"
              aria-label="Menu carousel controls"
            >
              <button
                type="button"
                className="menu-carousel-button"
                onClick={goToPrevious}
                aria-label="Show previous menu page"
              >
                Previous
              </button>
              <span className="menu-carousel-count" aria-live="polite">
                {activeIndex + 1} / {menuFiles.length}
              </span>
              <button
                type="button"
                className="menu-carousel-button"
                onClick={goToNext}
                aria-label="Show next menu page"
              >
                Next
              </button>
            </div>
          </div>

          <div className="menu-image-stage">
            <div className="menu-mobile-current" aria-live="polite">
              <span>{activeMenu.section}</span>
              <strong>{activeMenu.title}</strong>
            </div>
            <img
              key={activeMenu.image}
              src={activeMenu.image}
              alt={activeMenu.alt}
              width={activeMenu.width}
              height={activeMenu.height}
              className="menu-image"
              loading="eager"
              decoding="async"
            />
          </div>

          <div
            className="menu-carousel-controls menu-carousel-controls-mobile"
            aria-label="Menu carousel controls"
          >
            <button
              type="button"
              className="menu-carousel-button"
              onClick={goToPrevious}
              aria-label="Show previous menu page"
            >
              Previous
            </button>
            <span className="menu-carousel-count" aria-live="polite">
              {activeIndex + 1} / {menuFiles.length}
            </span>
            <button
              type="button"
              className="menu-carousel-button"
              onClick={goToNext}
              aria-label="Show next menu page"
            >
              Next
            </button>
          </div>

          <div className="menu-download-actions">
            <a
              href={activeMenu.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${activeMenu.title} menu image in a new tab`}
              onClick={() =>
                trackEvent('menu_full_size_image_click', { menu_title: activeMenu.title })
              }
            >
              Open full-size image
            </a>
            <a
              href={activeMenu.pdf}
              download
              aria-label={`Download ${activeMenu.title} PDF`}
              onClick={() => trackEvent('menu_pdf_download_click', { menu_title: activeMenu.title })}
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className="page-card menu-order-card">
        <h2>Order Online</h2>
        <p>
          Want Cobblestone at home? Order breakfast or lunch through DoorDash.
        </p>
        <a
          href={links.doordash}
          target="_blank"
          rel="noopener noreferrer"
          className="page-button"
          aria-label="Order Cobblestone Café on DoorDash"
          onClick={() => trackEvent('order_online_click', { location: 'menu_order_card' })}
        >
          Order on DoorDash
        </a>
      </section>
    </main>
  );
}

export default MenuPage;
