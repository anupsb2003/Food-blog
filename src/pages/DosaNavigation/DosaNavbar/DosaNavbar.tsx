import "./DosaNavbar.css";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DosaNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="dosa-navbar">
      {/* LEFT */}
      <button
        className="dosa-back-btn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>

      {/* CENTER */}
      <div className="dosa-navbar-logo">
        DOSA HOUSE
      </div>

      {/* RIGHT */}
      <div className="dosa-navbar-links">
        <a href="#home">Home</a>


        <a href="#specials">Specials</a>


        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}