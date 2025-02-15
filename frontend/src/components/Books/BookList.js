import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext"; // Import AuthContext

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { token } = useContext(AuthContext); // Get token from AuthContext

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8000/books", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    if (token) {
      fetchBooks();
    }
  }, [token]); // Refetch books when token changes

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <div className="book-grid">
        {books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`} className="book-card">
            <img src={book.image_url} alt={book.title} className="book-image" />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p className={book.available ? "available" : "borrowed"}>
                {book.available ? "Available" : "Borrowed"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
