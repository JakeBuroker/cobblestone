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
          <img
            src="/images/8d5b13da0ec52802dc87fa96f56e9d65.jpg"
            alt="Interior Shot"
            className="main-image"
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
{/* HOURS / LOCATION */}
<section className="content-block reverse hours-location-section">
  <div className="images">
    <img
      src="/images/52248125492_9384570133_b.jpg"
      alt="Cafe Exterior"
      className="main-image"
    />
  </div>
  <div className="text">
    <h2>Hours & Location</h2>
    <p><strong>Address:</strong> 4760 Washington Square, White Bear Lake, MN</p>
    <p> <strong>Phone:</strong> (651) 429-6793</p>
    <p> <strong>Open:</strong> 7 AM – 3 PM</p>

<div className="map-wrapper">

  <iframe
    title="Map to Cobblestone Café"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.0282134758922!2d-93.008888!3d45.085221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d0e996108a15%3A0x331dc4d0fa18494d!2sCobblestone%20Cafe!5e0!3m2!1sen!2sus!4v1748386419499!5m2!1sen!2sus"
    width="100%"
    height="300"
    style={{
      border: 0,
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
       
    }}
    loading="lazy"
    allowFullScreen=""
  
  ></iframe>
  <a
  href="https://www.google.com/maps/dir/?api=1&destination=Cobblestone+Cafe+White+Bear+Lake+MN"
  target="_blank"
  rel="noopener noreferrer"
  className="directions-button"
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
          <a href="/menu" className="menu-link">
            See the Full Menu
          </a>
        </div>
        <div className="images-grid">
          <img src="/images/roll.jpg" alt="Pancakes" className="grid-img" />
          <img src="/images/caption.jpg" alt="Sandwich" className="grid-img" />
          <img
            src="/images/unnamed (1).webp"
            alt="Latte Art"
            className="grid-img"
          />
          <img src="/images/unnamed.webp" alt="Pastry" className="grid-img" />
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <GoogleReviews />
    </div>
  );
};

export default Home;
