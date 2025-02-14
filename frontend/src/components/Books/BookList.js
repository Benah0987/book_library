import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/books") // Fetch books from backend
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
