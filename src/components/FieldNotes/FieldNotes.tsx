import { useState } from "react";
import "./FieldNotes.css";

import {
  RiArrowRightUpLine,
  RiMapPin2Line,
  RiCloseLine,
  RiFlaskLine,
  RiLeafLine,
  RiCupLine,
} from "react-icons/ri";

const notes = [
  {
    id: "01",
    title:
      "The dish that changed how I understood fermentation.",

    location:
      "Mysore — Old Market Road",

    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",

    icon: <RiFlaskLine />,

    desc:
      "Fermentation, microbial behavior, heat memory, and instinctive cooking.",

    full:
      "Traditional cooking understands fermentation through observation, smell, sound, and timing rather than measurements.",
  },

  {
    id: "02",

    title:
      "Finding fresh herbs that still smell alive.",

    location:
      "Bangalore — Flower Market",

    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1600&auto=format&fit=crop",

    icon: <RiLeafLine />,

    desc:
      "Fresh herbs lose volatile compounds rapidly after harvest.",

    full:
      "Storage temperature, oxygen exposure, moisture, and packaging all affect herb aroma chemistry.",
  },

  {
    id: "03",

    title:
      "The coffee debate explained with chemistry.",

    location:
      "Chikmagalur — Coffee House",

    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",

    icon: <RiCupLine />,

    desc:
      "Extraction temperature changes flavour and bitterness.",

    full:
      "Coffee brewing is an extraction science hidden inside ritual, timing, and ratio.",
  },
];

export default function FieldNotes() {

  const [active, setActive] =
    useState<any>(null);

  return (

    <section className="field-notes">

      {/* BACKGROUND */}

      <div className="bg-grid"></div>

      <div className="glow glow-left"></div>
      <div className="glow glow-right"></div>

      {/* HEADER */}

      <div className="field-header">

        <div>

          <span>
            FIELD NOTES
          </span>

          <h2>
            On the ground.
            <br />
            Eating seriously.
          </h2>

        </div>

        <button>

          All locations

          <RiArrowRightUpLine />

        </button>

      </div>

      {/* UNIQUE HORIZONTAL LAYOUT */}

      <div className="notes-wrapper">

        {/* LEFT HUGE PANEL */}

        <div
          className="vertical-panel"
          style={{
            backgroundImage:
              `url(${notes[0].image})`,
          }}
        >

          <div className="dark-layer"></div>

          <div className="glass-layer"></div>

          <div className="panel-id">
            {notes[0].id}
          </div>

          <div className="panel-content">

            <div className="panel-top">

              <div className="panel-icon">
                {notes[0].icon}
              </div>

              <small>

                <RiMapPin2Line />

                {notes[0].location}

              </small>

            </div>

            <h3>
              {notes[0].title}
            </h3>

            <p>
              {notes[0].desc}
            </p>

            <button
              onClick={() =>
                setActive(notes[0])
              }
            >

              Read the notes

              <RiArrowRightUpLine />

            </button>

          </div>

        </div>

        {/* RIGHT STACK */}

        <div className="stack-layout">

          {/* TOP FLOAT CARD */}

          <div
            className="floating-card"
            style={{
              backgroundImage:
                `url(${notes[1].image})`,
            }}
          >

            <div className="dark-layer"></div>

            <div className="glass-layer"></div>

            <div className="floating-content">

              <div className="mini-circle">
                {notes[1].icon}
              </div>

              <span>
                {notes[1].location}
              </span>

              <h4>
                {notes[1].title}
              </h4>

              <button
                onClick={() =>
                  setActive(notes[1])
                }
              >

                Open Note

              </button>

            </div>

          </div>

          {/* BOTTOM ROW */}

          <div className="bottom-row">

            {/* TEXT GLASS */}

            <div className="glass-quote">

              <div className="quote-ring"></div>

              <span>
                FIELD OBSERVATION
              </span>

              <h5>
                Ingredients
                are living
                chemistry.
              </h5>

              <p>
                Aroma, flavour,
                oxidation,
                moisture,
                heat,
                and timing
                change everything.
              </p>

            </div>

            {/* COFFEE */}

            <div
              className="coffee-card"
              style={{
                backgroundImage:
                  `url(${notes[2].image})`,
              }}
            >

              <div className="dark-layer"></div>

              <div className="glass-layer"></div>

              <div className="coffee-content">

                <div className="mini-circle">
                  {notes[2].icon}
                </div>

                <span>
                  {notes[2].location}
                </span>

                <h4>
                  {notes[2].title}
                </h4>

                <button
                  onClick={() =>
                    setActive(notes[2])
                  }
                >

                  Open Note

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* POPUP */}

      {active && (

        <div
          className="popup-overlay"
          onClick={() =>
            setActive(null)
          }
        >

          <div
            className="popup-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-btn"
              onClick={() =>
                setActive(null)
              }
            >

              <RiCloseLine />

            </button>

            <div
              className="popup-image"
              style={{
                backgroundImage:
                  `url(${active.image})`,
              }}
            >

              <div className="popup-dark"></div>

            </div>

            <div className="popup-body">

              <span>
                {active.location}
              </span>

              <h2>
                {active.title}
              </h2>

              <p>
                {active.full}
              </p>

              <button>

                Continue Reading

                <RiArrowRightUpLine />

              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}