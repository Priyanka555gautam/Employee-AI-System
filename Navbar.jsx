import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Employee AI System
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/ai">
          AI Recommendation
        </Link>

        <Link to="/login">
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;