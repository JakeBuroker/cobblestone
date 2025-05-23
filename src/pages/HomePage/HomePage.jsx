import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to Cobblestone Café</h1>
        <p>Craft coffee. Fresh bites. Cozy vibes.</p>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          Located in the heart of the city, Cobblestone Café is your neighborhood spot for
          hand-crafted drinks, locally sourced food, and warm company.
        </p>
      </section>

      <section className="highlights">
        <h2>Our Specialties</h2>
        <ul>
          <li>☕ Signature Lattes</li>
          <li>🥐 Freshly Baked Pastries</li>
          <li>🌿 Vegan & Gluten-Free Options</li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
