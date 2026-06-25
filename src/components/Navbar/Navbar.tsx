import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h2>FOODLAB</h2>
      </div>

      <nav>
        <ul className="navbar-links">
          <li>The Diaries</li>
          <li>Label Lab</li>
          <li>Browning Files</li>
          <li>Field Notes</li>
          <li>About</li>
          <li>Subscription</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;