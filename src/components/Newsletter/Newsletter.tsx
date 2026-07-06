import "./Newsletter.css";
import {
  RiArrowRightUpLine,
  RiMailLine,
  RiFlaskLine,
  RiShieldCheckLine,
} from "react-icons/ri";

export default function Newsletter() {
  return (
    <section className="newsletter-section">

      {/* BACKGROUND */}

      <div className="newsletter-grid"></div>

      <div className="newsletter-glow glow-left"></div>
      <div className="newsletter-glow glow-right"></div>

      {/* FLOATING ORBS */}

      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      {/* MAIN CARD */}

      <div className="newsletter-wrapper">

        {/* LEFT */}

        <div className="newsletter-left">

          <span className="newsletter-tag">
            JOIN THE DIARIES
          </span>

          <h2>
            Weekly food science.
            <br />
            No noise.
            <br />
            No sponsored posts.
          </h2>

          <p>
            Get label breakdowns,
            food science notes,
            product reviews,
            and field stories
            directly in your inbox.
          </p>

          {/* FEATURES */}

          <div className="newsletter-features">

            <div className="feature-chip">

              <RiFlaskLine />

              <span>
                Label Breakdowns
              </span>

            </div>

            <div className="feature-chip">

              <RiMailLine />

              <span>
                Weekly Notes
              </span>

            </div>

            <div className="feature-chip">

              <RiShieldCheckLine />

              <span>
                No Sponsored Content
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="newsletter-right">

          {/* GLASS CARD */}

          <div className="subscribe-card">

            <div className="card-glow"></div>

            <div className="mini-badge">

              <RiMailLine />

            </div>

            <h3>
              Subscribe
              to the journal
            </h3>

            <p>
              One thoughtful email every week.
            </p>

            {/* FORM */}

            <form className="newsletter-form">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button type="submit">

                Subscribe

                <RiArrowRightUpLine />

              </button>

            </form>

            {/* PRIVACY */}

            <div className="privacy-note">

              <RiShieldCheckLine />

              <span>
                No spam.
                Unsubscribe any time.
                Just useful food science.
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}