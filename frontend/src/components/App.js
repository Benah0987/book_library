import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";  // ✅ Fix: Remove 'components/'
import Home from "./Home";  // ✅ Fix
import Login from "./Auth/login";  // ✅ Fix
import Signup from "./Auth/signup";  // ✅ Fix
import BookList from "./Books/BookList";  // ✅ Fix
import BookDetails from "./Books/BookDetails";  // ✅ Fix
import Profile from "./User/Profile";  // ✅ Fix

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
