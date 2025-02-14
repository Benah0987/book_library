import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import BorrowButton from "./BorrowButton";
import ReturnButton from "./ReturnButton";
import { AuthContext } from "../Auth/AuthContext"; // Import AuthContext

const BookDetails = () => {
  const { id } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);
  const { token } = useContext(AuthContext); // Get token from AuthContext

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/books/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }

        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    if (token) {
      fetchBookDetails();
    }
  }, [id, token]);

  if (!book) {
    return <p className="loading-message">Loading book details...</p>;
  }

  return (
    <div className="book-details-container">
      <div className="book-details-card">
        <img src={book.image_url} alt={book.title} className="book-details-image" />
        <div className="book-details-body">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author"><strong>Author:</strong> {book.author}</p>
          <p className="book-isbn"><strong>ISBN:</strong> {book.isbn}</p>
          <p className={`availability ${book.available ? "available" : "not-available"}`}>
            <strong>{book.available ? "Available" : "Not Available"}</strong>
          </p>
          {book.available ? <BorrowButton bookId={book.id} /> : <ReturnButton bookId={book.id} />}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
