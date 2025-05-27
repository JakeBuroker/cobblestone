import "./HomePage.css";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <header className="hero">
        <h1 className="hero-heading">
          Welcome to Cobblestone Café — Fresh Coffee, Local Flavor
        </h1>
      </header>

      {/* OUR STORY */}
      <section className="content-block">
        <div className="images">
          <img src="/images/8d5b13da0ec52802dc87fa96f56e9d65.jpg" alt="Interior Shot" className="main-image" />
        </div>
        <div className="text">
          <h2>Our Story</h2>
          <p>
            Nestled in the heart of White Bear Lake, Cobblestone Café has served
            homemade meals and warm coffee to our community for over 20 years.
            Locally loved and family-owned, we believe in flavor, comfort, and connection.
          </p>
        </div>
      </section>

      {/* HOURS / LOCATION */}
      <section className="content-block reverse">
        <div className="images">
          <img src="/images/52248125492_9384570133_b.jpg" alt="Cafe Exterior" className="main-image" />
        </div>
        <div className="text">
          <h2>Hours & Location</h2>
          <p><strong>📍 Address:</strong> 4760 Washington Square, White Bear Lake, MN</p>
          <p><strong>📞 Phone:</strong> (651) 429-6793</p>
          <p><strong>🕒 Open Today:</strong> 7 AM – 3 PM</p>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="content-block reverse menu-preview">
        <div className="text">
          <h2>What’s on the Menu</h2>
          <p>
            From hearty breakfasts to fresh, handcrafted lunches and classic malts — 
            there’s something for everyone. Come in hungry, leave full and happy.
          </p>
          <a href="/menu" className="menu-link">See the Full Menu</a>
        </div>
        <div className="images-grid">
          <img src="/images/roll.jpg" alt="Pancakes" className="grid-img" />
          <img src="/images/caption.jpg" alt="Sandwich" className="grid-img" />
          <img src="/images/unnamed (1).webp" alt="Latte Art" className="grid-img" />
          <img src="/images/unnamed.webp" alt="Pastry" className="grid-img" />
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <GoogleReviews />
    </div>
  );
};

export default Home;
