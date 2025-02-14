import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthContext"; // Adjust path if needed

function Signup() {
  const { signup } = useContext(AuthContext); // Access signup function
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signup(fullName, email, password); // Call signup function from AuthContext

      Swal.fire({
        title: "Signup Successful!",
        text: "Your account has been created. Click OK to go to the login page.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login"); // Redirect after success
      });
    } catch (error) {
      Swal.fire({
        title: "Signup Failed!",
        text: error.message || "Something went wrong. Try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className="signup-input"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="redirect-text">
        Already have an account? <Link to="/login" className="redirect-link">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
