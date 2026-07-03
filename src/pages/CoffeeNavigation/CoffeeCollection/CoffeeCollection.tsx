// CoffeeCollection.tsx

import "./CoffeeCollection.css";

import coffeeBag from "../../../assets/coffee-bag.png";
import brassSet from "../../../assets/brass-set.png";
import coffeePowder from "../../../assets/coffee-powder.png";

function CoffeeCollection() {
  return (
    <section className="coffee-collection-section">

      {/* BACKGROUND BLURS */}
      <div className="coffee-bg-blur coffee-blur-1"></div>
      <div className="coffee-bg-blur coffee-blur-2"></div>

      {/* HEADER */}
      <div className="coffee-collection-header">

        <p className="coffee-collection-subtitle">
          The Artisan Selection
        </p>

        <h1 className="coffee-collection-title">
          Curated Heritage Collection
        </h1>

      </div>

      {/* GRID LAYOUT */}
      <div className="coffee-collection-grid">

        {/* LEFT LARGE CARD */}
        <div className="coffee-large-card">

          <div className="coffee-card-glass"></div>

          <div className="coffee-card-content">

            <p className="coffee-card-tag">
              SIGNATURE BLEND
            </p>

            <h2 className="coffee-card-title">
              The Kaveri Reserve
            </h2>

            <p className="coffee-card-description">
              80% Peaberry, 20% Chicory.
              Intense, earthy, and bold.
            </p>

            <div className="coffee-image-wrapper">
              <img
                src={coffeeBag}
                alt="Coffee Bag"
                className="coffee-card-image"
              />
            </div>

            <button className="coffee-add-btn">
              Add to Ritual
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="coffee-right-grid">

          {/* TOP CARD */}
          <div className="coffee-small-card">

            <div className="coffee-card-glass"></div>

            <div className="coffee-small-content">

              <img
                src={brassSet}
                alt="Brass Set"
                className="coffee-small-image"
              />

              <div>

                <p className="coffee-small-tag">
                  BRASSWARE
                </p>

                <h3 className="coffee-small-title">
                  Heritage Davara Set
                </h3>

                <button className="coffee-link-btn">
                  Shop Heirloom →
                </button>

              </div>

            </div>

          </div>

          {/* BOTTOM CARD */}
          <div className="coffee-small-card">

            <div className="coffee-card-glass"></div>

            <div className="coffee-small-content">

              <img
                src={coffeePowder}
                alt="Coffee Powder"
                className="coffee-small-image"
              />

              <div>

                <p className="coffee-small-tag">
                  BLENDS
                </p>

                <h3 className="coffee-small-title">
                  Traditional Coarse Grind
                </h3>

                <button className="coffee-link-btn">
                  View Details →
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CoffeeCollection;