import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./App.css";
import Header from './components/Navbar/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/team" element={<Team />} />
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