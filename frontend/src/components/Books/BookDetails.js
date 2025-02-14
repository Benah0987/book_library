import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BorrowButton from "./BorrowButton";
import ReturnButton from "./ReturnButton";


const BookDetails = () => {
  const { id } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

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
