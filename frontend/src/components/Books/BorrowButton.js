import { useState, useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const BorrowButton = ({ bookId }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleBorrow = async () => {
    if (!user) {
      alert("You must be logged in to borrow a book.");
      navigate("/login");
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/borrow/${bookId}`, { // ✅ Fix the URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) throw new Error("Failed to borrow the book.");
  
      alert("Book borrowed successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error borrowing book:", error);
      alert("Failed to borrow the book.");
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
