import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Profile() {
  const { user, token, logout } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Swal.fire({
        title: "Oops! 👀",
        text: "You need to log in to view your profile.",
        icon: "warning",
        confirmButtonText: "Log In",
      }).then(() => navigate("/login"));
      return;
    }

    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch("http://localhost:8000/borrowings/borrowed_books_count", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          logout();
          navigate("/login");
          return;
        }

        const data = await response.json();
        setBorrowedBooks(data.borrowed_books || 0);
      } catch (error) {
        console.error("Error fetching borrowed books:", error);
      }
    };

    fetchBorrowedBooks();
  }, [user, token, navigate, logout]);

  return user ? (
    <div className="profile-container">
      <h2>Welcome, {user.name}! 🎉</h2>
      <p>You have borrowed <strong>{borrowedBooks}</strong> {borrowedBooks === 1 ? "book" : "books"}.</p>
    </div>
  ) : null;
}

export default Profile;
