import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Lyrics from "./components/Lyrics";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lyrics/:id" element={<Lyrics />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
