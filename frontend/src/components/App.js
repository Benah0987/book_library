import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Auth/login";
import Signup from "./Auth/signup";
import BookList from "./Books/BookList";
import BookDetails from "./Books/BookDetails";
import Profile from "./User/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
