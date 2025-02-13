import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";  // ✅ Correct import (if App.js is inside /components)
import Home from "./Home";
import Login from "./Auth/login";
import Signup from "./Auth/signup";
import BookList from "./Books/BookList";
import BookDetails from "./Books/BookDetails";
import Profile from "./User/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
