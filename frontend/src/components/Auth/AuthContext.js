import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      fetchCurrentUser(storedToken);
    }
  }, []);

  const fetchCurrentUser = async (token) => {
    try {
      const response = await fetch("http://localhost:8000/current_user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch user.");
      }

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error("Fetch error:", error);
      logout();
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed. Check your credentials.");
      }

      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      Swal.fire({
        title: "Login Successful!",
        text: "Welcome back!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Login Failed!",
        text: error.message || "Invalid email or password. Please try again.",
        icon: "error",
      });
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.errors ? data.errors.join(", ") : "Signup failed. Try again.");
      }

      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      Swal.fire({
        title: "Signup Successful!",
        text: "Your account has been created. You can now log in.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Signup error:", error);
      Swal.fire({
        title: "Signup Failed!",
        text: error.message || "Something went wrong. Try again.",
        icon: "error",
      });
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    Swal.fire({
      title: "Logged Out!",
      text: "You have been successfully logged out.",
      icon: "info",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/"); // Redirect to home after logout
    });
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, fetchCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};