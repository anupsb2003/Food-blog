import "./CoffeeAlchemy.css";
import { FaWind, FaTint, FaGripLines } from "react-icons/fa";

function CoffeeAlchemy() {
  return (
    <section className="alchemy-section">

      {/* FLOATING LIGHTS */}
      <div className="alchemy-blur blur-1"></div>
      <div className="alchemy-blur blur-2"></div>

      {/* HEADER */}
      <div className="alchemy-header">

        <p className="alchemy-tag">
          THE ALCHEMY
        </p>

        <h1 className="alchemy-title">
          Crafting the Perfect Decoction
        </h1>

      </div>

      {/* CARDS */}
      <div className="alchemy-grid">

        {/* CARD 1 */}
        <div className="alchemy-card">

          <div className="alchemy-icon-box">
            <FaGripLines />
          </div>

          <h2>The Grind</h2>

          <p>
            Peaberry and Arabica beans, roasted in
            small batches and ground to a coarse,
            sand-like texture to ensure slow water
            permeation.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="alchemy-card">

          <div className="alchemy-icon-box">
            <FaTint />
          </div>

          <h2>The Decoction</h2>

          <p>
            Gravity-fed dripping over hours. No
            pressure, just time. The result is a thick,
            syrupy concentrate with deep chocolatey
            undertones.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="alchemy-card">

          <div className="alchemy-icon-box">
            <FaWind />
          </div>

          <h2>The Froth</h2>

          <p>
            The 'Meter' pour. Stretching the milk and
            decoction through the air to create a
            velvety, micro-bubble froth that lingers.
          </p>

        </div>

      </div>

    </section>
  );
}

export default CoffeeAlchemy;