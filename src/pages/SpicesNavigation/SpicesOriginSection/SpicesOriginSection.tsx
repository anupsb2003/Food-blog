// SpicesOriginSection.tsx

import "./SpicesOriginSection.css";

import SpiceImage from "../../../assets/spices-landscape.png";

export default function SpicesOriginSection() {
  return (
    <section className="spOrigin-section">
      {/* LEFT SIDE */}
      <div className="spOrigin-left">
        <div className="spOrigin-imageWrapper">
          <img
            src={SpiceImage}
            alt="Spices Landscape"
            className="spOrigin-image"
          />
        </div>

        <div className="spOrigin-card">
          <span className="spOrigin-cardTag">
            The Terroir of Malabar
          </span>

          <p>
            Mineral-rich volcanic soil meets
            3000mm of annual rainfall,
            creating a flavor density found
            nowhere else on earth.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="spOrigin-right">
        <span className="spOrigin-miniTag">
          PROVENENCE I
        </span>

        <h2 className="spOrigin-title">
          Mist, Soil,
          <br />
          & Time
        </h2>

        <div className="spOrigin-line"></div>

        <p className="spOrigin-description">
          Deep within the Western Ghats,
          our spices are born from a unique
          alchemy of heavy monsoons and
          mineral-rich volcanic red soil.
          This isn't just agriculture; it's
          a centuries-old dialogue with the
          land.
        </p>

        <div className="spOrigin-item">
          <h3>Alleppey Cardamom</h3>

          <p>
            Floral notes with a bold,
            camphoraceous finish.
          </p>
        </div>

        <div className="spOrigin-item">
          <h3>Tellicherry Pepper</h3>

          <p>
            Rich in piperine with deep,
            woody undertones and citrus
            bright notes.
          </p>
        </div>
      </div>
    </section>
  );
}