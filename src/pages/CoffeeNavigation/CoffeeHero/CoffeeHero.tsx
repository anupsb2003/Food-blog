// CoffeeHero.tsx

import "./CoffeeHero.css";

function CoffeeHero() {
  return (
    <section className="premium-coffee-hero">

      {/* TRANSPARENT GLASS CONTAINER */}
      <div className="premium-coffee-glass">

        {/* TOP TEXT */}
        <p className="premium-coffee-year">
          ESTABLISHED 1912
        </p>

        {/* HUGE TITLE */}
        <h1 className="premium-coffee-title">
          COFFEE
        </h1>

        {/* DESCRIPTION */}
        <p className="premium-coffee-description">
          The soul of South India, slow-roasted and steeped
          in heritage. Experience the ritual perfected over
          a century with rich aromas and timeless flavors.
        </p>

        {/* BUTTONS */}
        <div className="premium-coffee-buttons">

          <button className="premium-brew-btn">
            Explore the Brew
          </button>

          <button className="premium-story-btn">
            Our Story
          </button>

        </div>

      </div>

      {/* FLOATING BLUR CIRCLES */}
      <div className="premium-coffee-circle circle-one"></div>
      <div className="premium-coffee-circle circle-two"></div>
      <div className="premium-coffee-circle circle-three"></div>

    </section>
  );
}

export default CoffeeHero;