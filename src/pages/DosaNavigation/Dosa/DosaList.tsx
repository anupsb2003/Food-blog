import "./DosaList.css";
import { FaPlay } from "react-icons/fa";

export default function App() {
  function handleVideo(){

  }
  return (
    <div className="hero-d">
      {/* Background Blur */}
      <div className="bg-overlay"></div>

      {/* Floating Shapes */}
      <div className="floating floating-1"></div>
      <div className="floating floating-2"></div>

      <div className="container">
        {/* LEFT CONTENT */}
        <div className="left-d">
          <p className="tag">ART OF FERMENTATION</p>

          <h1 className="title-d">
            The <span>Alchemy</span>
            <br />
            of the Dosa
          </h1>

          <p className="description">
            A golden tapestry of stone-ground rice and silky lentils,
            fermented for twelve hours and crisped to translucent perfection
            on ancient cast-iron tawas.
          </p>

          <div className="buttons">
            <button className="menu-btn">
              Explore The Menu
            </button>

            <button className="ritual-btn" onClick={handleVideo}>
              <span className="play-icon">
                <FaPlay />
              </span>
              Our Ritual
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="right">
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1200&auto=format&fit=crop"
              alt="Dosa"
            />

            {/* Floating Card */}
            <div className="info-card">
              <h3>The Perfect Crisp</h3>
              <p>
                Achieved at precisely 220°C using hand-churned clarified butter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}