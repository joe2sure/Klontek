import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./App.css";
import Header from './components/Navbar/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import About from "./pages/About/About.jsx";
import TeamPage from "./pages/Team/Team.jsx";
import ServicePage from "./pages/Service/ServicePage.jsx";
import ProjectPage from "./pages/Project/ProjectPage.jsx";
import CareerPage from "./pages/Career/CareerPage.jsx";
import PricingPage from "./pages/Pricing/Pricing.jsx";
import BlogPage from "./components/blog/BlogPage.jsx";
import EventsPage from "./pages/Event/EventPage.jsx";
import Team from "./pages/Team/Team.jsx";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/team" element={<TeamPage />} /> */}
        <Route path="/team" element={<Team />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/career" element={<CareerPage/>} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/journal" element={<BlogPage />} />
        <Route path="/event" element={<EventsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;