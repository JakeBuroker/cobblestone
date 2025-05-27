import React from "react";
import "./HomePage.css"; // Assuming you have a CSS file for styles

const Home = () => {
  return (
    <div>
      <header className="hero">
        <h1 className="hero-heading">
          Welcome to Cobblestone Café — Fresh Coffee, Local Flavor
        </h1>
      </header>

      <section className="content">
        <h2>Our Story</h2>
        <p>
          Since 1985, Cobblestone Café has served up homemade comfort food,
          fresh coffee, and warm hospitality in the heart of White Bear Lake            ghdfj       
          dhg       dh             dhf            dh.
        </p>
        <p>
          Our café is a gathering place for the community, where friends meet,
          families celebrate, and everyone feels at home. We pride ourselves on
          using locally sourced ingredients to create dishes that are both
          delicious and sustainable.
        </p>
        <h2>Menu Highlights</h2>
        <ul>
          <li>Signature Cobblestone Breakfast</li>
          <li>Homemade Soups and Salads</li>
          <li>Freshly Baked Pastries</li>
          <li>Artisan Coffee Blends</li>
          <li>Seasonal Specials</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
