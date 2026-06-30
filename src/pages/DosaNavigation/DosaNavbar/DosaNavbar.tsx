// DosaNavbar.tsx

import "./DosaNavbar.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function DosaNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="dosa-navbar">

      {/* LEFT */}
      <div className="nav-left">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>

        <h1 className="nav-logo">
          HeritageBite
        </h1>

      </div>

      {/* CENTER LINKS */}
      <div className="nav-links">

        <Link to="/">Home</Link>

        <a href="#ritual">
          Ritual
        </a>

        <a href="#science">
          Science
        </a>

        <a href="#pairings">
          Pairings
        </a>

        <a href="#footer">
          Contact
        </a>

      </div>

      {/* RIGHT BUTTON */}
      <div className="nav-right">

        <button className="reserve-btn">
          Reserve Table
        </button>

      </div>

    </nav>
  );
}