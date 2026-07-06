import "./Footer.css";

import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiPinterestLine,
  RiArrowRightUpLine,
  RiFlaskLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="food-footer">

      {/* BACKGROUND */}

      <div className="footer-grid"></div>

      <div className="footer-glow glow-left"></div>
      <div className="footer-glow glow-right"></div>

      {/* TOP */}

      <div className="footer-top">

        {/* BRAND */}

        <div className="footer-brand">

          <div className="brand-badge">

            <RiFlaskLine />

          </div>

          <h2>
            FOODLAB
          </h2>

          <p>
            A food science journal about flavour,
            ingredients, cooking culture,
            and everything in between.
          </p>

          {/* SOCIALS */}

          <div className="footer-socials">

            <a href="#">
              <RiInstagramLine />
            </a>

            <a href="#">
              <RiLinkedinBoxLine />
            </a>

            <a href="#">
              <RiPinterestLine />
            </a>

          </div>

        </div>

        {/* LINKS */}

        <div className="footer-links-wrapper">

          {/* SERIES */}

          <div className="footer-column">

            <span>
              THE SERIES
            </span>

            <ul>

              <li>Diary Entries</li>
              <li>Browning Files</li>
              <li>Study / Lab Notes</li>
              <li>Kitchen Decoded</li>
              <li>The Science Behind</li>
              <li>Lab Work</li>
              <li>Label Lab</li>
              <li>Final Verdict</li>
              <li>Field Notes</li>

            </ul>

          </div>

          {/* MORE */}

          <div className="footer-column">

            <span>
              MORE
            </span>

            <ul>

              <li>About</li>
              <li>Work with me</li>
              <li>Contact</li>
              <li>@foodlabjournal</li>

            </ul>

          </div>

        </div>

      </div>

      {/* FOOTER CENTER LINE */}

      <div className="footer-middle">

        <div className="middle-line"></div>

        <p>
          Named after the reaction
          that makes food taste like memory.
        </p>

        <div className="middle-line"></div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 FOODLAB.
          All rights reserved.
        </p>

        <button>

          Back to top

          <RiArrowRightUpLine />

        </button>

      </div>

    </footer>
  );
}