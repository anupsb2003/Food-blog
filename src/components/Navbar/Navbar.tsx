import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h2>FOODLAB</h2>
      </div>

      <nav>
        <ul className="navbar-links">
          <li>Home</li>
          <li>Spices</li>
          <li>Coffee</li>
          <li>Contact US</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;