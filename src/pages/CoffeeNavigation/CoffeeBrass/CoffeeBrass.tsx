import "./CoffeeBrass.css";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

function CoffeeBrass() {
  return (
    <section className="coffee-brass-section">

      {/* FLOATING BLURS */}
      <div className="coffee-brass-blur blur-left"></div>
      <div className="coffee-brass-blur blur-right"></div>

      <div className="coffee-brass-container">

        {/* IMAGE SIDE */}
        <div className="coffee-brass-image-wrapper">

          <div className="coffee-brass-image-card">

            <img
              src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop"
              alt="Brass Coffee"
              className="coffee-brass-image"
            />

          </div>

        </div>

        {/* CONTENT SIDE */}
        <div className="coffee-brass-content">

          <p className="coffee-brass-tag">
            THE TRADITION
          </p>

          <h1 className="coffee-brass-title">
            The Brass Davara
          </h1>

          <p className="coffee-brass-description">
            True filter coffee is never served in ceramic.
            The brass tumbler and its saucer-like counterpart,
            the Davara, serve a dual purpose: the brass retains
            heat while the act of pouring between the two aerates
            the brew, cooling it to the perfect sipping
            temperature without losing the 'degree' of freshness.
          </p>

          {/* FEATURES */}

          <div className="coffee-brass-features">

            <div className="coffee-brass-feature">
              <FaCheckCircle />
              <span>Pure Cow Milk sourcing</span>
            </div>

            <div className="coffee-brass-feature">
              <FaCheckCircle />
              <span>Hand-spun Brassware</span>
            </div>

            <div className="coffee-brass-feature">
              <FaCheckCircle />
              <span>Slow-drip 12-hour process</span>
            </div>

          </div>

          {/* BUTTON */}

          <button className="coffee-brass-button">

            Explore our Collections

            <FaArrowRight />

          </button>

        </div>

      </div>

      {/* BACKGROUND TEXT */}

      <h1 className="coffee-bg-text">
        DEGREE
      </h1>

    </section>
  );
}

export default CoffeeBrass;