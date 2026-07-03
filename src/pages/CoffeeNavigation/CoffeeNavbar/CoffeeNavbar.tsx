import "./CoffeeNavbar.css";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CoffeeNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="coffee-navbar">
      {/* LEFT */}
      <button
        className="coffee-back-btn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>

      {/* CENTER */}
      <div className="coffee-navbar-logo">
        KUMBAKONAM
      </div>

      {/* RIGHT */}
      <div className="coffee-navbar-links">
        <a href="#home">Home</a>


        <a href="#collections">Collections</a>

        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}