/* =========================================
IMPORTS
========================================= */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./AllPostsPage.css";

import {
  RiFlaskLine,
  RiBook2Line,
  RiFileList3Line,
  RiRestaurant2Line,
  RiMicroscopeLine,
  RiMapPinLine,
  RiStarSmileLine,
  RiTestTubeLine,
  RiLeafLine,
  RiCupLine,
} from "react-icons/ri";

import {
  FiArrowRight,
  FiX,
  FiArrowLeft,
} from "react-icons/fi";

/* =========================================
DATA
========================================= */

const categories = [

  {
    id: "001",

    category: "Browning Files",

    icon: <RiFlaskLine />,

    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1400&auto=format&fit=crop",

    title:
      "Why your traditional dish never tastes like the one you remember.",

    desc:
      "Fermentation, memory, heat, and microbial behavior shape flavor more than recipes alone.",

    full:
      "Traditional cooking relies on instinctive knowledge passed through generations. Fermentation changes according to climate, vessel, humidity, and timing. Older kitchens mastered this through observation rather than measurement.",

    issue: "Issue 003",
  },

  {
    id: "002",

    category: "Label Lab",

    icon: <RiFileList3Line />,

    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1400&auto=format&fit=crop",

    title:
      "This packaged food has many ingredients. Which ones actually matter?",

    desc:
      "Understanding preservatives, additives, emulsifiers, and hidden sugars.",

    full:
      "Not every ingredient deserves equal concern. Some additives stabilize texture while others mainly improve shelf life or marketing appearance.",

    issue: "Issue 007",
  },

  {
    id: "003",

    category: "Kitchen Decoded",

    icon: <RiRestaurant2Line />,

    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1400&auto=format&fit=crop",

    title:
      "The moment spices release aroma is not magic. It is chemistry.",

    desc:
      "Volatile aroma compounds react with oil and heat during cooking.",

    full:
      "Traditional tempering methods are scientifically accurate extraction techniques that maximize aroma and flavor compounds.",

    issue: "Issue 005",
  },

  {
    id: "004",

    category: "Diary Entries",

    icon: <RiBook2Line />,

    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1400&auto=format&fit=crop",

    title:
      "The smell of roasted coffee reminds me of old train stations.",

    desc:
      "Food memories are deeply tied to emotion and place.",

    full:
      "Smell triggers memory more powerfully than visuals because aroma pathways connect directly to emotional memory systems.",

    issue: "Issue 009",
  },

  {
    id: "005",

    category: "Study / Lab Notes",

    icon: <RiTestTubeLine />,

    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1400&auto=format&fit=crop",

    title:
      "What happens when dosa batter ferments 8 hours longer?",

    desc:
      "Texture, acidity, and microbial changes over time.",

    full:
      "Longer fermentation increases acidity and alters starch breakdown, changing crispness and flavor.",

    issue: "Issue 004",
  },

  {
    id: "006",

    category: "The Science Behind",

    icon: <RiMicroscopeLine />,

    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1400&auto=format&fit=crop",

    title:
      "Why onions slowly become sweet while cooking.",

    desc:
      "Sugar development during caramelization.",

    full:
      "Heat breaks down complex carbohydrates into simpler sugars while moisture evaporates slowly.",

    issue: "Issue 011",
  },

  {
    id: "007",

    category: "Field Notes",

    icon: <RiMapPinLine />,

    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1400&auto=format&fit=crop",

    title:
      "Inside a traditional spice market at 5AM.",

    desc:
      "Freshness can be identified through smell and texture.",

    full:
      "Early market hours reveal ingredient quality before oxidation and environmental exposure affect aroma.",

    issue: "Issue 008",
  },

  {
    id: "008",

    category: "Final Verdict",

    icon: <RiStarSmileLine />,

    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1400&auto=format&fit=crop",

    title:
      "This trending instant noodle is all salt and marketing.",

    desc:
      "A brutally honest packaged food review.",

    full:
      "The flavor profile relies heavily on sodium and artificial enhancers rather than ingredient quality.",

    issue: "Issue 014",
  },

  {
    id: "009",

    category: "Fermentation Notes",

    icon: <RiLeafLine />,

    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop",

    title:
      "Why clay pots change fermentation behavior.",

    desc:
      "Material science affects traditional cooking.",

    full:
      "Clay allows micro air exchange and temperature moderation that changes microbial activity.",

    issue: "Issue 013",
  },

  {
    id: "010",

    category: "Coffee Studies",

    icon: <RiCupLine />,

    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop",

    title:
      "The science behind bitterness in dark roast coffee.",

    desc:
      "Roasting temperature changes flavor chemistry.",

    full:
      "Dark roasting destroys some acids while intensifying carbonized bitter compounds.",

    issue: "Issue 015",
  },

];

export default function AllPostsPage() {

  const [activePost, setActivePost] =
    useState<any>(null);

  const navigate = useNavigate();

  /* =========================================
  ALWAYS OPEN FROM TOP
  ========================================= */

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, []);

  return (

    <section className="all-posts-page">

      {/* =========================================
      BACK BUTTON
      ========================================= */}

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >

        <FiArrowLeft />

        Back

      </button>

      {/* GLOWS */}

      <div className="posts-glow glow-one"></div>
      <div className="posts-glow glow-two"></div>

      {/* HEADER */}

      <div className="posts-header">

        <span>
          ALL ENTRIES
        </span>

        <h1>
          Food science,
          culture,
          labels &
          memory
        </h1>

      </div>

      {/* GRID */}

      <div className="posts-grid">

        {categories.map((item, index) => (

          <div
            key={index}
            className="post-card"
            style={{
              backgroundImage:
                `url(${item.image})`,

              animationDelay:
                `${index * 0.08}s`,
            }}

            onClick={() =>
              setActivePost(item)
            }
          >

            <div className="post-overlay"></div>

            <div className="post-content">

              <div className="post-top">

                <div className="post-icon">
                  {item.icon}
                </div>

                <small>
                  {item.issue}
                </small>

              </div>

              <span className="category">
                {item.category}
              </span>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.desc}
              </p>

              <button>

                Read entry

                <FiArrowRight />

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* =========================================
      POPUP
      ========================================= */}

      {activePost && (

        <div
          className="popup-overlay"
          onClick={() =>
            setActivePost(null)
          }
        >

          <div
            className="popup-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="close-btn"
              onClick={() =>
                setActivePost(null)
              }
            >

              <FiX />

            </button>

            {/* IMAGE */}

            <div
              className="popup-image"
              style={{
                backgroundImage:
                  `url(${activePost.image})`,
              }}
            ></div>

            {/* BODY */}

            <div className="popup-body">

              <span className="popup-category">

                {activePost.category}

              </span>

              <h2>
                {activePost.title}
              </h2>

              <p className="popup-desc">

                {activePost.desc}

              </p>

              <p className="popup-full">

                {activePost.full}

              </p>

              <div className="popup-footer">

                <small>

                  {activePost.issue}

                </small>

                <button>

                  Continue Reading

                  <FiArrowRight />

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}