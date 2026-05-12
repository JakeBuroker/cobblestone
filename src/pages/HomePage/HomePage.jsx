import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";
import { trackEvent } from "../../utils/analytics";
import { business, links } from "../../config/site";

const Home = () => {
  const facebookFeedRef = useRef(null);
  const [facebookFeedWidth, setFacebookFeedWidth] = useState(500);

  useEffect(() => {
    const updateFeedWidth = () => {
      if (!facebookFeedRef.current) {
        return;
      }

      const nextWidth = Math.floor(facebookFeedRef.current.clientWidth);
      setFacebookFeedWidth(Math.min(500, Math.max(260, nextWidth)));
    };

    updateFeedWidth();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateFeedWidth);
      return () => window.removeEventListener("resize", updateFeedWidth);
    }

    const observer = new ResizeObserver(updateFeedWidth);
    observer.observe(facebookFeedRef.current);
    return () => observer.disconnect();
  }, []);

  const facebookFeedUrl = useMemo(() => {
    const pageUrl = encodeURIComponent(links.facebookPluginPage);
    return `https://www.facebook.com/plugins/page.php?href=${pageUrl}&tabs=timeline&width=${facebookFeedWidth}&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;
  }, [facebookFeedWidth]);

  return (
    <main id="main-content">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <p className="hero-kicker">White Bear Lake Cafe & Malt Shoppe</p>
          <h1 className="hero-heading">
            Cobblestone Café
          </h1>
          <div className="hero-copy-spacer" aria-hidden="true"></div>
          <div className="hero-meta" aria-label="Cafe hours and location">
            <span>Open Daily 7 AM – 2 PM</span>
            <span>{business.addressLine1}</span>
          </div>
          <div className="hero-actions">
            <a
              href={links.doordash}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-primary"
              aria-label="Order Cobblestone Café on DoorDash"
              onClick={() => trackEvent("order_online_click", { location: "home_hero" })}
            >
              Order on DoorDash
            </a>
            <Link
              to="/menu"
              className="hero-button hero-button-secondary"
              onClick={() => trackEvent("menu_click", { location: "home_hero" })}
            >
              View Menu
            </Link>
            <a
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-ghost"
              aria-label="Get directions to Cobblestone Café on Google Maps"
              onClick={() => trackEvent("directions_click", { location: "home_hero" })}
            >
              Get Directions
            </a>
          </div>
        </div>
      </header>

      {/* HOURS / LOCATION */}
      <section className="content-block reverse hours-location-section">
        <div className="images">
          <img
            src="/images/8d5b13da0ec52802dc87fa96f56e9d65.jpg"
            alt="Coffee being poured into a Cobblestone Café mug"
            className="main-image"
            width="1440"
            height="1677"
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
              <strong>{business.addressShort}</strong>
            </div>
            <div>
              <span>Phone</span>
              <a
                href={business.phoneHref}
                onClick={() => trackEvent("phone_click", { location: "home_location" })}
              >
                {business.phoneDisplay}
              </a>
            </div>
            <div>
              <span>Hours</span>
              <strong>Open Daily 7 AM – 2 PM</strong>
            </div>
          </div>

          <a
            href={links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-button"
            aria-label="Get directions to Cobblestone Café on Google Maps"
            onClick={() => trackEvent("directions_click", { location: "home_location" })}
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="content-block reverse menu-preview">
        <div className="text">
          <p className="section-kicker">Breakfast, lunch & malts</p>
          <h2>What’s on the Menu</h2>
          <p>
            The menu leans into the good stuff: eggs and hash browns, pancakes,
            Benedicts, burgers, sandwiches, soups, hot dogs, kids meals, and
            classic malts. It is everyday cafe food done the way regulars expect it.
          </p>
          <Link
            to="/menu"
            className="menu-link"
            onClick={() => trackEvent("menu_click", { location: "home_menu_preview" })}
          >
            See the Full Menu
          </Link>
          <a
            href={links.doordash}
            target="_blank"
            rel="noopener noreferrer"
            className="order-link"
            aria-label="Order Cobblestone Café on DoorDash"
            onClick={() => trackEvent("order_online_click", { location: "home_menu_preview" })}
          >
            Order on DoorDash
          </a>
        </div>
        <div className="images-grid">
          <img
            src="/images/roll.jpg"
            alt="Glazed cinnamon roll served at Cobblestone Café"
            className="grid-img"
            width="900"
            height="1200"
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

      {/* HISTORY */}
      <section className="content-block reverse heritage-block">
        <div className="images story-images">
          <img
            src="/images/mr-t-diner-washington-avenue.jpg"
            alt="Historic Washington Avenue view showing Mr. T Diner in downtown White Bear Lake"
            className="main-image historic-image"
            width="798"
            height="544"
            loading="lazy"
            decoding="async"
          />
          <p className="image-credit">
            Historic Washington Avenue photo, ca. 1970, via White Bear Lake
            Magazine and the White Bear Lake Area Historical Society.
          </p>
        </div>
        <div className="text">
          <p className="section-kicker">Downtown roots</p>
          <h2>From Malt Shoppe to Mr. T to Cobblestone</h2>
          <p>
            This corner has been feeding White Bear Lake for generations. Before
            it became Cobblestone Café, the space was remembered as Mr. T Diner
            and, before that, part of the downtown Malt Shoppe story.
          </p>
          <p>
            You can still feel that history in the malts, the regulars, and the
            easy comfort of a cafe that has always belonged downtown.
          </p>
          <a
            href={links.localHistory}
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-button"
            onClick={() => trackEvent("history_article_click", { location: "home_story" })}
          >
            Read the Local History
          </a>
        </div>
      </section>

      {/* FACEBOOK */}
      <section className="facebook-section" aria-labelledby="facebook-heading">
        <div className="facebook-copy">
          <p className="section-kicker">Follow along</p>
          <h2 id="facebook-heading">Find Us on Facebook</h2>
          <p>
            Follow Cobblestone Café for current posts, specials, updates, and
            the small-town breakfast counter energy that does not always fit on
            a menu.
          </p>
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-link"
            aria-label="Follow Cobblestone Café on Facebook"
            onClick={() => trackEvent("facebook_click", { location: "home_facebook" })}
          >
            Follow on Facebook
          </a>
        </div>

        <div className="facebook-feed-card" ref={facebookFeedRef}>
          <iframe
            title="Cobblestone Café Facebook feed"
            src={facebookFeedUrl}
            width={facebookFeedWidth}
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
            <a
              href={links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("facebook_click", { location: "home_facebook_fallback" })}
            >
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
