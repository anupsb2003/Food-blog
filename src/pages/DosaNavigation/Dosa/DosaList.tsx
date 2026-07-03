import "./DosaList.css";
import { FaPlay } from "react-icons/fa";
import Dosa from "../../../assets/Dosa.png";
export default function App() {
  function handleVideo(){

  }
  return (
   <div className="dosa-hero-section">
  <div className="dosa-bg-overlay"></div>

  <div className="dosa-floating-shape dosa-floating-shape-one"></div>
  <div className="dosa-floating-shape dosa-floating-shape-two"></div>

  <div className="dosa-layout-container">
    <div className="dosa-left-content">
      <p className="dosa-tagline">ART OF FERMENTATION</p>

      <h1 className="dosa-main-title">
        The <span className="dosa-title-highlight">Alchemy</span>
        <br />
        of the Dosa
      </h1>

      <p className="dosa-description-text">
        A golden tapestry of stone-ground rice and silky lentils...
      </p>

      <div className="dosa-button-group">
        <button className="dosa-menu-button">
          Explore The Menu
        </button>

        <button className="dosa-ritual-button">
          <span className="dosa-play-icon-wrapper">
            <FaPlay />
          </span>
          Our Ritual
        </button>
      </div>
    </div>

    <div className="dosa-right-visual">
      <div className="dosa-image-card-wrapper">
        <img
          className="dosa-hero-image"
          src={Dosa}
          alt="Dosa"
        />

        <div className="dosa-floating-info-card">
          <h3 className="dosa-info-title">
            The Perfect Crisp
          </h3>

          <p className="dosa-info-description">
            Achieved at precisely 220°C...
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}