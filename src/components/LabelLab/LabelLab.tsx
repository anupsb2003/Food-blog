import { useState } from "react";
import "./LabelLab.css";

import {
  FiArrowRight,
  FiX,
} from "react-icons/fi";

import {
  RiFileList3Line,
  RiFlaskLine,
  RiLeafLine,
} from "react-icons/ri";

const labelPosts = [
  {
    id: "01",

    category: "Packaged Food Product A",

    icon: <RiFileList3Line />,

    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1400&auto=format&fit=crop",

    title:
      "27 ingredients. Three are worth a conversation.",

    description:
      "A packaged food may contain familiar ingredients, but some additives or emulsifiers may need closer attention.",

    verdict:
      "Read before you buy",

    full:
      "Ingredient lists are often designed to appear harmless. But stabilizers, emulsifiers, preservatives, and hidden sugar forms can completely change the nutritional reality of a product. This article explains what matters, what doesn’t, and what consumers should understand before trusting packaging language.",
  },

  {
    id: "02",

    category: "Spice Product / Ingredient Product",

    icon: <RiLeafLine />,

    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=1400&auto=format&fit=crop",

    title:
      "Your supermarket spice might be doing less than you think.",

    description:
      "Freshness, storage, grinding date, and packaging affect spice quality more than branding.",

    verdict:
      "Buy fresh or grind yourself",

    full:
      "Ground spices slowly lose volatile aroma compounds through oxidation and environmental exposure. Transparent packaging, humidity, heat, and long shelf storage reduce flavor intensity dramatically. This breakdown explains why fresh grinding changes cooking quality completely.",
  },

  {
    id: "03",

    category: "Packaged Ingredient Comparison",

    icon: <RiFlaskLine />,

    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop",

    title:
      "One product has more real ingredient content. The price difference is small.",

    description:
      "Ingredient percentage, stabilizers, water ratio, and fat content reveal the true value.",

    verdict:
      "Choose based on ingredient quality",

    full:
      "Some packaged products rely heavily on water, fillers, and stabilizers while marketing themselves as premium. Reading ingredient percentages and understanding food formulation can reveal which products offer actual ingredient value instead of packaging illusion.",
  },
];

export default function LabelLab() {

  const [activeCard, setActiveCard] =
    useState<any>(null);

  return (

    <section className="label-lab-section">

      {/* BACKGROUND GLOWS */}

      <div className="label-glow glow-left"></div>
      <div className="label-glow glow-right"></div>

      {/* HEADER */}

      <div className="label-top">

        <div>

          <span className="label-small">
            LABEL LAB — WEEKLY SERIES
          </span>

          <h2 className="label-heading">
            I read the label.
            <br />
            You make the decision.
          </h2>

        </div>

        <button className="episodes-btn">

          All episodes

          <FiArrowRight />

        </button>

      </div>

      {/* CARDS */}

      <div className="label-grid">

        {labelPosts.map((item, index) => (

          <div
            className="label-card"
            key={index}
            style={{
              animationDelay:
                `${index * 0.15}s`,
            }}
          >

            {/* IMAGE */}

            <div
              className="label-image"
              style={{
                backgroundImage:
                  `url(${item.image})`,
              }}
            >

              <div className="label-overlay"></div>

              <div className="label-icon">
                {item.icon}
              </div>

            </div>

            {/* CONTENT */}

            <div className="label-content">

              <small>
                {item.category}
              </small>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

              <div className="label-footer">

                <span>
                  {item.verdict}
                </span>

                <button
                  onClick={() =>
                    setActiveCard(item)
                  }
                >

                  Full breakdown

                  <FiArrowRight />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* =========================================
      POPUP MODAL
      ========================================= */}

      {activeCard && (

        <div
          className="label-popup-overlay"
          onClick={() =>
            setActiveCard(null)
          }
        >

          <div
            className="label-popup"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="label-close"
              onClick={() =>
                setActiveCard(null)
              }
            >

              <FiX />

            </button>

            {/* IMAGE */}

            <div
              className="popup-image-side"
              style={{
                backgroundImage:
                  `url(${activeCard.image})`,
              }}
            >

              <div className="popup-dark"></div>

            </div>

            {/* CONTENT */}

            <div className="popup-content-side">

              <small>
                {activeCard.category}
              </small>

              <h2>
                {activeCard.title}
              </h2>

              <p>
                {activeCard.full}
              </p>

              <div className="popup-verdict">

                Verdict:
                <span>
                  {activeCard.verdict}
                </span>

              </div>

              <button>

                Continue Reading

                <FiArrowRight />

              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}