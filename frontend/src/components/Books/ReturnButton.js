import { useState } from "react";


const ReturnButton = ({ bookId }) => {
  const [loading, setLoading] = useState(false);

  const handleReturn = () => {
    setLoading(true);
    fetch(`http://localhost:8000/return/${bookId}`, { method: "POST" })
      .then((response) => response.json())
      .then(() => {
        setLoading(false);
        alert("Book returned successfully!");
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error returning book:", error);
      });
  };

  return (
    <button className="return-button" onClick={handleReturn} disabled={loading}>
      {loading ? "Returning..." : "Return"}
    </button>
  );
};

export default ReturnButton;
