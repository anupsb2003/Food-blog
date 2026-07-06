import "./Navbar.css";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <h1>CULINARY INQUIRY</h1>
      </div>

      {/* NAV LINKS */}
      <nav className="navbar-center">
        <ul className="navbar-links">
          <li className="active">The Diaries</li>
          <li>Label Lab</li>
          <li>Browning Files</li>
          <li>Field Notes</li>
          <li>About</li>
        </ul>
      </nav>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        <button className="search-btn">
          <FiSearch />
        </button>

        <button className="subscribe-btn">
          Subscribe
        </button>

      </div>

    </header>
  );
}

export default Navbar;