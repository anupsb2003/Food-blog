// CoffeeFooter.tsx

import "./CoffeeFooter.css";

import {
  FaGlobe,
  FaShareAlt,
} from "react-icons/fa";

function CoffeeFooter() {
  return (
    <footer className="premium-coffee-footer">

      {/* BLUR BACKGROUNDS */}
      <div className="footer-blur footer-blur-one"></div>
      <div className="footer-blur footer-blur-two"></div>

      {/* MAIN CONTENT */}
      <div className="coffee-footer-container">

        {/* LEFT */}
        <div className="coffee-footer-left">

          <h1 className="coffee-footer-logo">
            KUMBAKONAM
          </h1>

          <p className="coffee-footer-description">
            Crafting the legacy of South Indian
            coffee for those who seek excellence
            in every drop.
          </p>

        </div>

        {/* CENTER */}
        <div className="coffee-footer-center">

          <a href="/">
            Provenance
          </a>

          <a href="/">
            Brewing Guide
          </a>

          <a href="/">
            Shipping
          </a>

          <a href="/">
            Contact
          </a>

        </div>

        {/* RIGHT */}
        <div className="coffee-footer-right">

          <p className="coffee-footer-copy">
            © 2024 Kumbakonam Heritage.
            Crafted for the Connoisseur.
          </p>

          <div className="coffee-footer-icons">

            <button>
              <FaGlobe />
            </button>

            <button>
              <FaShareAlt />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default CoffeeFooter;