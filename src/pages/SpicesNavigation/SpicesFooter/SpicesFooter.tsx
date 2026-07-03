import "./SpicesFooter.css";

import {
  FaGlobe,
  FaCommentAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function SpicesFooter() {
  return (
    <footer className="spices-footer">

      
      <div className="spices-footer-top">

        {/* LEFT */}
        <div className="spices-footer-brand">

          <h2 className="spices-footer-logo">
            MALABAR & CO.
          </h2>

          <p className="spices-footer-description">
            Curating the finest medicinal-grade
            spices from the hidden valleys of
            South India since 1924.
          </p>

          <div className="spices-footer-icons">
            <a href="#">
              <FaGlobe />
            </a>

            <a href="#">
              <FaCommentAlt />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* LINKS */}
        <div className="spices-footer-links">

          <div className="spices-footer-column">
            <h4>The Trade</h4>

            <a href="#">Our Story</a>
            <a href="#">Sourcing Ethics</a>
            <a href="#">Wholesale</a>
          </div>

          <div className="spices-footer-column">
            <h4>Guides</h4>

            <a href="#">Spice Care</a>
            <a href="#">Climate & Soil</a>
            <a href="#">Recipes</a>
          </div>

          <div className="spices-footer-column">
            <h4>Customer Care</h4>

            <a href="#">Shipping Policy</a>
            <a href="#">Contact Us</a>

            <div className="spices-footer-address">

              <span>
                Visit the Atelier
              </span>

              <p>
                Fort Kochi, Kerala,
                India 682001
              </p>

            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="spices-footer-bottom">
        © 2024 Malabar & Co. Spices.
        All Rights Reserved.
        Crafted for the Discerning Epicurean.
      </div>

    </footer>
  );
}