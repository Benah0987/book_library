import React from "react";
import { Link } from "react-router-dom"; 


function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="redirect-text">
        Not registered? <Link to="/signup" className="redirect-link">Sign up here</Link>
      </p>
    </div>
  );
}

export default Login;
