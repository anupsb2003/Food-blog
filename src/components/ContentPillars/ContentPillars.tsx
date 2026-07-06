import { useState } from "react";
import "./FoodPillars.css";

import {
  RiBook2Line,
  RiFlaskLine,
  RiTestTubeLine,
  RiRestaurant2Line,
  RiMicroscopeLine,
  RiMapPinLine,
  RiFileList3Line,
  RiStarSmileLine,
} from "react-icons/ri";

import { FiArrowRight, FiX } from "react-icons/fi";

const pillars = [
  {
    id: "01",
    title: "Diary Entries",
    icon: <RiBook2Line />,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    short:
      "Personal voice. Slow writing. Food stories and reflections.",
    description:
      "Diary Entries explores emotional storytelling around food memories, kitchens, smells, family traditions, migration, nostalgia, and slow observations.",
    details:
      "This pillar focuses on deeply reflective writing where food becomes memory, identity, and personal history.",
    frequency: "Monthly",
  },

  {
    id: "02",
    title: "The Browning Files",
    icon: <RiFlaskLine />,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    short:
      "One cooking reaction. One scientific truth.",
    description:
      "A cinematic exploration into caramelization, Maillard reaction, roasting, heat transformation, and flavor chemistry.",
    details:
      "Every article explains one cooking reaction through real dishes and practical science.",
    frequency: "Twice monthly",
  },

  {
    id: "03",
    title: "Study / Lab Notes",
    icon: <RiTestTubeLine />,
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200&auto=format&fit=crop",
    short:
      "Food experiments, tastings, and learning.",
    description:
      "Behind-the-scenes observations, ingredient testing, fermentation trials, tasting notes, and notebook-style research.",
    details:
      "This section feels experimental and alive — like entering a food science lab.",
    frequency: "Weekly stories",
  },

  {
    id: "04",
    title: "Kitchen Decoded",
    icon: <RiRestaurant2Line />,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    short:
      "Traditional cooking explained scientifically.",
    description:
      "Explains the science hidden inside everyday recipes and cooking methods.",
    details:
      "Why dough rises, why onions sweeten, why batter ferments — decoded clearly.",
    frequency: "Weekly",
  },

  {
    id: "05",
    title: "The Science Behind",
    icon: <RiMicroscopeLine />,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
    short:
      "Sharp food science explanations.",
    description:
      "Quick but deep insights into ingredients, oils, preservatives, acidity, texture, and packaged food behavior.",
    details:
      "Small explainers designed to permanently change how readers understand food.",
    frequency: "Twice weekly",
  },

  {
    id: "06",
    title: "Field Notes",
    icon: <RiMapPinLine />,
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1200&auto=format&fit=crop",
    short:
      "Markets, restaurants, and food observations.",
    description:
      "Reviews and observations about freshness, ingredient quality, food spaces, and culinary culture.",
    details:
      "Field Notes behaves like a thoughtful culinary investigator journal.",
    frequency: "Twice monthly",
  },

  {
    id: "07",
    title: "Label Lab",
    icon: <RiFileList3Line />,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop",
    short:
      "Ingredient labels decoded honestly.",
    description:
      "Breakdowns of additives, preservatives, stabilizers, oils, hidden sugars, and marketing language.",
    details:
      "A clean and practical guide to understanding packaged foods.",
    frequency: "Weekly",
  },

  {
    id: "08",
    title: "Final Verdict",
    icon: <RiStarSmileLine />,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    short:
      "Honest food product reviews.",
    description:
      "Clear food reviews without sponsorship language or influencer-style exaggeration.",
    details:
      "Only useful analysis based on ingredients, flavor, freshness, and value.",
    frequency: "Weekly",
  },
];

export default function FoodPillars() {
  const [active, setActive] = useState<any>(null);

  return (
    <section className="food-pillars">

      <div className="left-content">

        <span className="section-label">
          WHAT LIVES HERE
        </span>

        <h1>
          Eight ways to
          think about
          what you eat
        </h1>

        <button>
          All entries
          <FiArrowRight />
        </button>

      </div>

      {/* GRID */}

      <div className="pillars-grid">

        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="pillar-card"
            style={{
              backgroundImage: `url(${pillar.image})`,
              animationDelay: `${index * 0.12}s`,
            }}
            onClick={() => setActive(pillar)}
          >

            <div className="overlay"></div>

            <div className="card-content">

              <div className="card-top">

                <div className="icon">
                  {pillar.icon}
                </div>

                <span>{pillar.id}</span>

              </div>

              <h3>{pillar.title}</h3>

              <div className="line"></div>

              <p>{pillar.short}</p>

              <small>
                Frequency: {pillar.frequency}
              </small>

            </div>

          </div>
        ))}

      </div>

      {/* POPUP */}

      {active && (
        <div
          className="popup-overlay"
          onClick={() => setActive(null)}
        >

          <div
            className="popup-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setActive(null)}
            >
              <FiX />
            </button>

            <div
              className="popup-image"
              style={{
                backgroundImage: `url(${active.image})`,
              }}
            ></div>

            <div className="popup-body">

              <div className="popup-header">

                <div className="popup-icon">
                  {active.icon}
                </div>

                <div>
                  <span>{active.id}</span>
                  <h2>{active.title}</h2>
                </div>

              </div>

              <p className="popup-desc">
                {active.description}
              </p>

              <p className="popup-details">
                {active.details}
              </p>

              <div className="popup-footer">

                <small>Publishing Frequency</small>

                <strong>
                  {active.frequency}
                </strong>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}