import { useState, useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BorrowButton = ({ bookId }) => {
  const { user, token, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleBorrow = async () => {
    if (!user) {
      Swal.fire({
        title: "Unauthorized",
        text: "You must be logged in to borrow a book.",
        icon: "warning",
        confirmButtonText: "Login",
      }).then(() => navigate("/login"));
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/books/${bookId}/borrow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ book_id: bookId }), // Ensure book_id is sent in the body
      });
      
      if (response.status === 401) {
        Swal.fire({
          title: "Session Expired",
          text: "Please log in again.",
          icon: "error",
          confirmButtonText: "Login",
        }).then(() => {
          logout();
          navigate("/login");
        });
        return;
      }

      if (!response.ok) throw new Error("Failed to borrow the book.");

      Swal.fire({
        title: "Success",
        text: "Book borrowed successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => window.location.reload()); // Refresh to reflect changes
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Something went wrong.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className="borrow-button" onClick={handleBorrow} disabled={loading}>
      {loading ? "Borrowing..." : "Borrow"}
    </button>
  );
};

export default BorrowButton;
