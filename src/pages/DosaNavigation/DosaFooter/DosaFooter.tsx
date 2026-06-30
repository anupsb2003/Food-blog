// DosaFooter.tsx

import "./dosaFooter.css";
import { FiArrowUpRight } from "react-icons/fi";

export default function DosaFooter() {
  return (
    <footer className="dosa-footer">

      {/* Background Glow */}
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <h1>HeritageBite</h1>

          <p>
            Elevating traditional culinary crafts into modern
            gastronomic experiences. Join us for a journey
            through the timeless flavors of the South.
          </p>

        </div>

        {/* RIGHT */}
        <div className="footer-links">

          {/* Explore */}
          <div className="footer-column">
            <h3>EXPLORE</h3>

            <a href="/">Philosophy</a>
            <a href="/">Sourcing</a>
            <a href="/">Craft</a>
          </div>

          {/* Connect */}
          <div className="footer-column">
            <h3>CONNECT</h3>

            <a href="/">Locations</a>
            <a href="/">Private Dining</a>
            <a href="/">Careers</a>
          </div>

          {/* Newsletter */}
          <div className="footer-column newsletter">

            <h3>NEWSLETTER</h3>

            <div className="newsletter-box">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                <FiArrowUpRight />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="footer-divider"></div>

      {/* BOTTOM */}
      <div className="footer-bottom-d">

        <p>
          © 2024 HERITAGEBITE. CRAFTED WITH TRADITION.
        </p>

      </div>

    </footer>
  );
}