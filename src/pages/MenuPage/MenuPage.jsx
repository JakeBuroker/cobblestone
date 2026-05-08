import '../PageStyles.css';

const doordashUrl =
  'https://www.doordash.com/store/cobblestone-cafe-white-bear-lake-581572/793365/';

function MenuPage() {
  return (
    <main id="main-content" className="page-shell">
      <section className="page-hero">
        <h1>Menu</h1>
        <p>
          Breakfast favorites, fresh lunches, and classic malt shop treats served
          daily in downtown White Bear Lake.
        </p>
      </section>

      <section className="menu-pdf-grid" aria-label="Menu PDFs">
        <article className="page-card menu-pdf-card">
          <div>
            <p className="menu-kicker">Coming Soon</p>
            <h2>Breakfast Menu</h2>
            <p>
              A full breakfast PDF will be available here soon. For now, stop in
              for homestyle breakfast favorites served daily from 7 AM – 2 PM.
            </p>
          </div>

          <div className="menu-preview-list">
            <h3>Breakfast Favorites</h3>
            <ul>
              <li>Waffles with strawberries and cream</li>
              <li>Raspberry French toast</li>
              <li>Biscuits and gravy</li>
              <li>Eggs, hash browns, bacon, and toast</li>
            </ul>
          </div>

          <div className="menu-placeholder-link" aria-disabled="true">
            Breakfast PDF Coming Soon
          </div>
        </article>

        <article className="page-card menu-pdf-card">
          <div>
            <p className="menu-kicker">Coming Soon</p>
            <h2>Lunch Menu</h2>
            <p>
              A full lunch PDF will be available here soon. Come by for classic
              cafe lunches, daily specials, and malt shop treats.
            </p>
          </div>

          <div className="menu-preview-list">
            <h3>Lunch Favorites</h3>
            <ul>
              <li>Fresh sandwiches</li>
              <li>Homemade soups</li>
              <li>Classic cafe plates</li>
              <li>Malts, shakes, and sweet treats</li>
            </ul>
          </div>

          <div className="menu-placeholder-link" aria-disabled="true">
            Lunch PDF Coming Soon
          </div>
        </article>
      </section>

      <section className="page-card menu-order-card">
        <h2>Order Online</h2>
        <p>
          Want Cobblestone at home? Order breakfast or lunch through DoorDash.
        </p>
        <a
          href={doordashUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="page-button"
          aria-label="Order Cobblestone Café on DoorDash"
        >
          Order on DoorDash
        </a>
      </section>
    </main>
  );
}

export default MenuPage;
