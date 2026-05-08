import { Link } from "react-router-dom";
import "./HomePage.css";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";

const doordashUrl =
  "https://www.doordash.com/store/cobblestone-cafe-white-bear-lake-581572/793365/";

const Home = () => {
  return (
    <main id="main-content">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">
            Welcome to Cobblestone Café — Fresh Coffee, Local Flavor
          </h1>
          <div className="hero-actions">
            <a
              href={doordashUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-primary"
              aria-label="Order Cobblestone Café on DoorDash"
            >
              Order on DoorDash
            </a>
            <Link to="/menu" className="hero-button hero-button-secondary">
              View Menu
            </Link>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Cobblestone+Cafe+White+Bear+Lake+MN"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-ghost"
              aria-label="Get directions to Cobblestone Café on Google Maps"
            >
              Get Directions
            </a>
          </div>
        </div>
      </header>

      {/* OUR STORY */}
      <section className="content-block">
        <div className="images">
          <img
            src="/images/8d5b13da0ec52802dc87fa96f56e9d65.jpg"
            alt="Cobblestone Café mug on a breakfast table"
            className="main-image"
            width="1440"
            height="1677"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="text">
          <h2>Our Story</h2>
          <p>
            Nestled in the heart of White Bear Lake, Cobblestone Café has served
            homemade meals and warm coffee to our community for over 20 years.
            Locally loved and family-owned, we believe in flavor, comfort, and
            connection.
          </p>
        </div>
      </section>

      {/* HOURS / LOCATION */}
      <section className="content-block reverse hours-location-section">
        <div className="images">
          <img
            src="/images/52248125492_9384570133_b.jpg"
            alt="Cobblestone Café storefront in downtown White Bear Lake"
            className="main-image"
            width="1024"
            height="683"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="text">
          <h2>Hours & Location</h2>
          <div className="location-details">
            <p>
              <strong>Address:</strong> 4760 Washington Square, White Bear Lake,
              MN
            </p>
            <p>
              <strong>Phone:</strong> (651) 429-6793
            </p>
            <p>
              <strong>Open:</strong> 7 AM – 2 PM
            </p>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Map to Cobblestone Café"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.0282134758922!2d-93.008888!3d45.085221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d0e996108a15%3A0x331dc4d0fa18494d!2sCobblestone%20Cafe!5e0!3m2!1sen!2sus!4v1748386419499!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{
                border: 0,
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              }}
              loading="lazy"
              allowFullScreen=""
            ></iframe>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Cobblestone+Cafe+White+Bear+Lake+MN"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-button"
              aria-label="Get directions to Cobblestone Café on Google Maps"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>


      {/* MENU PREVIEW */}
      <section className="content-block reverse menu-preview">
        <div className="text">
          <h2>What’s on the Menu</h2>
          <p>
            From hearty breakfasts to fresh, handcrafted lunches and classic
            malts — there’s something for everyone. Come in hungry, leave full
            and happy.
          </p>
          <Link to="/menu" className="menu-link">
            See the Full Menu
          </Link>
          <a
            href={doordashUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="order-link"
            aria-label="Order Cobblestone Café on DoorDash"
          >
            Order on DoorDash
          </a>
        </div>
        <div className="images-grid">
          <img
            src="/images/roll.jpg"
            alt="Fresh pastry served at Cobblestone Café"
            className="grid-img"
            width="180"
            height="180"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/caption.jpg"
            alt="Eggs Benedict with hash browns"
            className="grid-img"
            width="1467"
            height="1100"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/unnamed (1).webp"
            alt="Pancakes with syrup and toast"
            className="grid-img"
            width="1360"
            height="1020"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/unnamed.webp"
            alt="Breakfast plate with hash browns, eggs, bacon, and toast"
            className="grid-img"
            width="1360"
            height="1020"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <GoogleReviews />
    </main>
  );
};

export default Home;
