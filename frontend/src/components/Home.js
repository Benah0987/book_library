import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";
import Swal from "sweetalert2";

function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExploreClick = (e) => {
    if (!user) {
      e.preventDefault(); // Prevent navigation
      Swal.fire({
        title: "Hold on! 🚀",
        text: "You need to log in to explore our amazing collection of books.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Log In",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Book Library</h1>
      <p>Discover and explore a vast collection of books.</p>
      <div className="home-buttons">
        <Link to="/books" className="explore-btn" onClick={handleExploreClick}>
          Explore Books
        </Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </div>
  );
}

export default Home;
