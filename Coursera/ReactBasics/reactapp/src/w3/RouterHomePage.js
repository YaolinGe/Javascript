import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";

function RouterHomePage() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">HomePage</Link>
        <Link to="/about" className="nav-item">About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default RouterHomePage;