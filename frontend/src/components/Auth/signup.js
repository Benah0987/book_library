import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Signup() {
  const { signup } = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(fullName, email, password);
    navigate("/login"); // Redirect after success
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
