import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ReturnButton = ({ bookId }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [isReturned, setIsReturned] = useState(false); // Track return state

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleReturn = async () => {
    if (!user) {
      Swal.fire("Unauthorized", "You must be logged in to return a book.", "error");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`http://localhost:8000/books/${bookId}/return`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setIsReturned(true); // Update UI state
        Swal.fire("Success", "Book returned successfully!", "success");
      } else {
        Swal.fire("Error", data.error || "Failed to return the book.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error returning the book. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="return-button-container">
      <button onClick={handleReturn} disabled={loading || isReturned} className="return-button">
        {loading ? "Returning..." : isReturned ? "Borrow Book" : "Return Book"}
      </button>
    </div>
  );
};

export default ReturnButton;
