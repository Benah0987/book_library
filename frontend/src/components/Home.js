import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Book Library</h1>
      <p>Discover and explore a vast collection of books.</p>
      <div className="home-buttons">
        <Link to="/books" className="explore-btn">Explore Books</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </div>
  );
}

export default Home;
