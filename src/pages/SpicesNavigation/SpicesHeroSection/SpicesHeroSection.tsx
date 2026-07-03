// SpicesHeroSection.tsx

import "./SpicesHeroSection.css";
import { FiArrowRight } from "react-icons/fi";

export default function SpicesHeroSection() {
  return (
    <section className="spHero-section">
      <div className="spHero-content">
        <span className="spHero-tag">
          Est. 1924 • Malabar Coast
        </span>

        <h1 className="spHero-title">
          The Soul of
          <br />
          South India
        </h1>

        <p className="spHero-description">
          Artisanal spices hand-harvested
          from the ancient hills of the
          Malabar Coast, where the monsoon
          mist meets volcanic soil.
        </p>

        <div className="spHero-actions">
          <button className="spHero-primaryBtn">
            Explore the Collection
          </button>

          <button className="spHero-secondaryBtn">
            Our Heritage
            <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="spHero-scroll">
        <span>Scroll</span>
        <div className="spHero-scrollLine"></div>
      </div>
    </section>
  );
}