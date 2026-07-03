// CoffeeTradition.tsx

import "./CoffeeTradition.css";
import traditionImg from "../../../assets/coffee-tradition.png";

function CoffeeTradition() {
  return (
    <section className="coffee-tradition-section">

      {/* LEFT CONTENT */}
      <div className="coffee-tradition-left">

        <p className="coffee-tradition-tag">
          THE ORIGIN
        </p>

        <h1 className="coffee-tradition-title">
          Heritage Rooted in Brass
          <br />
          and Bean
        </h1>

        <p className="coffee-tradition-description">
          In the sun-drenched courtyards of Kumbakonam,
          the morning doesn't begin with a clock, but
          with the aromatic hiss of the brass filter.
          Our legacy traces back to the Kaveri delta,
          where the 'Degree' coffee was born—a standard
          of purity where only the richest milk and the
          first decoction meet.
        </p>

        <div className="coffee-line"></div>

        <p className="coffee-tradition-quote">
          "It's not just a beverage; it's an heirloom
          passed down through generations of artisans."
        </p>

      </div>

      {/* RIGHT IMAGE */}
      <div className="coffee-tradition-right">

        <div className="coffee-image-wrapper">

          <img
            src={traditionImg}
            alt="Traditional Coffee"
            className="coffee-tradition-image"
          />

          {/* FLOATING GLOW */}
          <div className="coffee-image-glow"></div>

        </div>

      </div>

    </section>
  );
}

export default CoffeeTradition;