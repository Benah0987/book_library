import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <input type="text" placeholder="Full Name" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <input type="password" placeholder="Password" className="signup-input" />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="redirect-text">
        Already have an account? <Link to="/login" className="redirect-link">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
