/* =========================================
LATEST ENTRIES WITH POPUP MODAL
========================================= */

import { useState } from "react";
import "./LatestEntries.css";
import { useNavigate } from "react-router-dom";
import {
  RiFlaskLine,
  RiFileList3Line,
  RiRestaurant2Line,
} from "react-icons/ri";

import {
  FiArrowRight,
  FiX,
} from "react-icons/fi";

export default function LatestEntries() {
    const navigate = useNavigate();

  const [activePost, setActivePost] =
    useState<any>(null);

  return (

    <section className="latest-section">

      {/* GLOW */}

      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      {/* TOP */}

      <div className="latest-top">

        <div>

          <span className="latest-label">
            LATEST ENTRIES
          </span>

          <h2 className="latest-heading">
            From the diaries
          </h2>

        </div>

        <button
  className="all-posts-btn"
  onClick={() => navigate("/all-posts")}
>

  All posts

  <FiArrowRight />

</button>

      </div>

      {/* GRID */}

      <div className="entries-grid">

        {/* FEATURED */}

        <div className="featured-post">

          <div className="featured-overlay"></div>

          <img
            src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1400&auto=format&fit=crop"
            alt=""
          />

          <div className="featured-content">

            <div className="post-meta">

              <span>

                <RiFlaskLine />

                Browning Files

              </span>

              <small>
                Issue 003
              </small>

            </div>

            <h3>
              Why your traditional dish
              never tastes like the one
              you remember.
            </h3>

            <p>
              Fermentation is not just a process.
              It is a relationship between microbes,
              time, temperature, and technique.
            </p>

            <button
              onClick={() =>
                setActivePost({
                  category: "Browning Files",
                  issue: "Issue 003",

                  title:
                    "Why your traditional dish never tastes like the one you remember.",

                  image:
                    "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1400&auto=format&fit=crop",

                  description:
                    "Fermentation is not just a process. It is a relationship between microbes, time, temperature, and technique.",

                  full:
                    "Traditional cooking often understands fermentation through instinct instead of scientific terminology. Smell, texture, timing, and environment all influence microbial activity. This article explores why old cooking methods are scientifically intelligent.",

                  extra:
                    "The article also explores nostalgia, memory, and why food from childhood feels emotionally different."
                })
              }
            >

              Read this entry

              <FiArrowRight />

            </button>

          </div>

        </div>

        {/* SIDE POSTS */}

        <div className="side-posts">

          {/* CARD 1 */}

          <div className="side-card">

            <div className="glass-shine"></div>

            <div className="side-meta">

              <span>

                <RiFileList3Line />

                Label Lab

              </span>

              <small>
                Issue 007
              </small>

            </div>

            <h4>
              This packaged food has many
              ingredients. Which ones
              actually matter?
            </h4>

            <p>
              A breakdown of ingredients
              inside packaged foods.
            </p>

            <button
              onClick={() =>
                setActivePost({
                  category: "Label Lab",
                  issue: "Issue 007",

                  title:
                    "This packaged food has many ingredients. Which ones actually matter?",

                  image:
                    "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1400&auto=format&fit=crop",

                  description:
                    "A breakdown of ingredients inside packaged food products.",

                  full:
                    "Many packaged foods use ingredient lists designed to confuse consumers. Some ingredients are harmless stabilizers while others deserve closer attention.",

                  extra:
                    "This article explains preservatives, hidden sugars, emulsifiers, seed oils, and marketing tricks used in modern packaging."
                })
              }
            >

              Read the breakdown

              <FiArrowRight />

            </button>

          </div>

          {/* CARD 2 */}

          <div className="side-card">

            <div className="glass-shine"></div>

            <div className="side-meta">

              <span>

                <RiRestaurant2Line />

                Kitchen Decoded

              </span>

              <small>
                Issue 005
              </small>

            </div>

            <h4>
              The moment spices release aroma
              is not magic. It is chemistry.
            </h4>

            <p>
              Hot oil, aroma compounds,
              and timing work together.
            </p>

            <button
              onClick={() =>
                setActivePost({
                  category: "Kitchen Decoded",
                  issue: "Issue 005",

                  title:
                    "The moment spices release aroma is not magic. It is chemistry.",

                  image:
                    "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1400&auto=format&fit=crop",

                  description:
                    "Hot oil and spice compounds create flavor reactions.",

                  full:
                    "Spices contain volatile aroma compounds that dissolve into fats during cooking. Timing changes everything.",

                  extra:
                    "This article explains blooming spices, tempering techniques, and why aroma compounds react differently at different temperatures."
                })
              }
            >

              Read the science

              <FiArrowRight />

            </button>

          </div>

        </div>

      </div>

      {
        activePost && (

          <div
            className="entry-popup-overlay"
            onClick={() =>
              setActivePost(null)
            }
          >

            <div
              className="entry-popup"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* CLOSE */}

              <button
                className="popup-close-btn"
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
                    `url(${activePost.image})`
                }}
              >

                <div className="popup-image-overlay"></div>

              </div>

              {/* CONTENT */}

              <div className="popup-content">

                <div className="popup-meta">

                  <span>
                    {activePost.category}
                  </span>

                  <small>
                    {activePost.issue}
                  </small>

                </div>

                <h2>
                  {activePost.title}
                </h2>

                <p className="popup-description">
                  {activePost.description}
                </p>

                <p className="popup-full">
                  {activePost.full}
                </p>

                <p className="popup-extra">
                  {activePost.extra}
                </p>

                <button className="popup-read-btn">

                  Continue Reading

                  <FiArrowRight />

                </button>

              </div>

            </div>

          </div>

        )
      }

    </section>
  );
}