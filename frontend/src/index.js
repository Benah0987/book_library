import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";  // ✅ Import main CSS file
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
