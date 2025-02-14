import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";
import { FiLogOut } from "react-icons/fi"; // Import logout icon

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2>Book Library</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {user && <Link to="/books">Books</Link>} {/* Show Books only if logged in */}
        <Link to="/profile">Profile</Link>
        {user ? (
          <button className="logout-button" onClick={logout}>
            <FiLogOut className="logout-icon" /> Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
