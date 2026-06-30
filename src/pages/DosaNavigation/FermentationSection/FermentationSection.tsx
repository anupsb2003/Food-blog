// FermentationSection.tsx

import "./Fermentation.css";
import { FaClock } from "react-icons/fa";
import { GiAirBalloon } from "react-icons/gi";

export default function FermentationSection() {
  return (
    <section className="fermentation-section">
      {/* Background Glow */}
      <div className="bg-glow"></div>

      <div className="fermentation-container">
        {/* LEFT CONTENT */}
        <div className="fermentation-left">
          <p className="ritual-tag">THE 12-HOUR RITUAL</p>

          <h1 className="fermentation-title">
            A Symphony of Time & <br />
            Microbes
          </h1>

          <p className="fermentation-description">
            The secret isn't in the heat, but in the wait. We begin with
            premium short-grain rice and de-husked black lentils,
            stone-ground in traditional wet grinders to a precise silky
            consistency.
          </p>

          {/* FEATURES */}
          <div className="feature-list">

            <div className="feature-item">
              <div className="feature-icon">
                <FaClock />
              </div>

              <div>
                <h3>Slow Maturation</h3>
                <p>
                  Wild cultures develop naturally over 12 hours, creating
                  that characteristic tang and ethereal lightness that
                  defines an authentic dosa.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <GiAirBalloon />
              </div>

              <div>
                <h3>Micro-Aired Structure</h3>
                <p>
                  The fermentation creates millions of tiny air pockets,
                  ensuring the batter expands into a honeycomb of crispness
                  once it hits the heat.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="fermentation-right">

          <div className="image-grid">

            <div className="top-image">
              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop"
                alt="Texture"
              />
            </div>

            <div className="bottom-image">
              <img
                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1200&auto=format&fit=crop"
                alt="Dosa Plate"
              />
            </div>

            <div className="side-image">
              <img
                src="https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1200&auto=format&fit=crop"
                alt="Cone Dosa"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}