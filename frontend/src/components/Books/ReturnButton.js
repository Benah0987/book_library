import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ReturnButton = ({ bookId }) => {
  const [loading, setLoading] = useState(false);
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [dueDate, setDueDate] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    fetchBorrowingStatus();
  }, [bookId]);

  // Fetch borrowing status
  const fetchBorrowingStatus = async () => {
    try {
      const response = await fetch(`http://localhost:8000/books/${bookId}/borrowing_status`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch borrowing status");

      const data = await response.json();
      setIsBorrowed(data.borrowed);
      setDueDate(data.borrowed ? data.due_date : null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle book return
  const handleReturn = async () => {
    if (!user) {
      Swal.fire("Unauthorized", "You must be logged in to return a book.", "error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`http://localhost:8000/books/${bookId}/return_book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to return the book.");
      }

      setIsBorrowed(false);
      setDueDate(null);
      Swal.fire("Success", "Book returned successfully!", "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Handle book borrowing
  const handleBorrow = async () => {
    if (!user) {
      Swal.fire("Unauthorized", "You must be logged in to borrow a book.", "error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`http://localhost:8000/books/${bookId}/borrow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to borrow the book.");
      }

      const data = await response.json();
      setIsBorrowed(true);
      setDueDate(data.due_date);
      Swal.fire("Success", `Book borrowed successfully! Due date: ${new Date(data.due_date).toLocaleDateString()}`, "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-action-container">
      {isBorrowed ? (
        <>
          <button onClick={handleReturn} disabled={loading} className="return-button">
            {loading ? "Returning..." : "Return Book"}
          </button>
          {dueDate && (
            <p className="due-date">
              <strong>Due Date:</strong> {new Date(dueDate).toLocaleDateString()}
            </p>
          )}
        </>
      ) : (
        <button onClick={handleBorrow} disabled={loading} className="borrow-button">
          {loading ? "Borrowing..." : "Borrow Book"}
        </button>
      )}
    </div>
  );
};

export default ReturnButton;
