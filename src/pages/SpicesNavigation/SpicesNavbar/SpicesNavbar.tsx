import "./SpicesNavbar.css";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SpicesNavbar() {

  const navigate = useNavigate();

  return (
    <nav className="spices-navbar">

      {/* LEFT */}
      <button
        className="spices-back-btn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />

        <span>Back</span>
      </button>

      {/* CENTER */}
      <div className="spices-navbar-logo">
        MALABAR & CO.
      </div>

      {/* RIGHT */}
      <div className="spices-navbar-links">

        <a href="#home">
          Home
        </a>

        <a href="#collections">
          Collections
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>

    </nav>
  );
}