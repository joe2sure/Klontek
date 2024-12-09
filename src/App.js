import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./App.css";
import Header from './components/Navbar/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import About from "./pages/About/About.jsx";
import TeamPage from "./pages/Team/Team.jsx";
// import About from "";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
        {/* <Route path="/courses" element={<CourseHome />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/journal" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;