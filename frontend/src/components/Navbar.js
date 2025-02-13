import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Book Library</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
