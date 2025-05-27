import React from "react";
import "./HomePage.css";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews"

const Home = () => {
  return (
    <div>
      <header className="hero">
        <h1 className="hero-heading">
          Welcome to Cobblestone Café — Fresh Coffee, Local Flavor
        </h1>
      </header>
    <GoogleReviews />
    
    </div>
  );
};

export default Home;
