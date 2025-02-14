import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthContext"; // Adjust the import path if needed

function Login() {
  const { login } = useContext(AuthContext); // Access login function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password); // Call login function from AuthContext

      Swal.fire({
        title: "Login Successful!",
        text: "Welcome back! Click OK to go to the homepage.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); // Redirect after success
      });
    } catch (error) {
      Swal.fire({
        title: "Login Failed!",
        text: error.message || "Invalid email or password. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="redirect-text">
        Not registered? <Link to="/signup" className="redirect-link">Sign up here</Link>
      </p>
    </div>
  );
}

export default Login;
