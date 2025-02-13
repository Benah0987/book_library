import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/current_user", {
      method: "GET",
      credentials: "include", // Important for maintaining session cookies
    })
      .then((response) => response.json())
      .then((data) => setUser(data.user))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  return (
    <div>
      <h1>Welcome to the Library System</h1>
      {user ? (
        <p>Logged in as: {user.name}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}

export default App;
