import { Link } from "react-router-dom";
import "./HomePage.css";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";

const doordashUrl =
  "https://www.doordash.com/store/cobblestone-cafe-white-bear-lake-581572/793365/";
const facebookUrl = "https://www.facebook.com/people/Cobblestone-Cafe/100042647630381/";
const facebookFeedUrl =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100042647630381&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";

const Home = () => {
  return (
    <main id="main-content">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <p className="hero-kicker">White Bear Lake Cafe & Malt Shoppe</p>
          <h1 className="hero-heading">
            Cobblestone Café
          </h1>
          <p className="hero-copy">
            Breakfast, lunch, coffee, and classic malt shop favorites served
            daily in downtown White Bear Lake.
          </p>
          <div className="hero-meta" aria-label="Cafe hours and location">
            <span>Open Daily 7 AM – 2 PM</span>
            <span>4760 Washington Square</span>
          </div>
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
          <p className="section-kicker">Family-owned local favorite</p>
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
          <p className="section-kicker">Visit us</p>
          <h2>Hours & Location</h2>
          <div className="location-details" aria-label="Cobblestone Cafe visit details">
            <div>
              <span>Address</span>
              <strong>4760 Washington Square, White Bear Lake, MN</strong>
            </div>
            <div>
              <span>Phone</span>
              <a href="tel:16514296793">(651) 429-6793</a>
            </div>
            <div>
              <span>Hours</span>
              <strong>Open Daily 7 AM – 2 PM</strong>
            </div>
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
          <p className="section-kicker">Breakfast, lunch & malts</p>
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

      {/* FACEBOOK */}
      <section className="facebook-section" aria-labelledby="facebook-heading">
        <div className="facebook-copy">
          <p className="section-kicker">Follow along</p>
          <h2 id="facebook-heading">Find Us on Facebook</h2>
          <p>
            Follow Cobblestone Café for recent posts, updates, specials, and
            local café moments.
          </p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-link"
            aria-label="Follow Cobblestone Café on Facebook"
          >
            Follow on Facebook
          </a>
        </div>

        <div className="facebook-feed-card">
          <iframe
            title="Cobblestone Café Facebook feed"
            src={facebookFeedUrl}
            width="500"
            height="640"
            style={{ border: 0, overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"
          ></iframe>
          <div className="facebook-feed-fallback">
            <span>Facebook Page</span>
            <strong>Latest posts open on Facebook</strong>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              View Updates
            </a>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <GoogleReviews />
    </main>
  );
};

export default Home;
