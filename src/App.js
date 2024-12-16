import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import all necessary components
import Header from './components/Navbar/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import About from "./pages/About/About.jsx";
import ServicePage from "./pages/Service/ServicePage.jsx";
import ProjectPage from "./pages/Project/ProjectPage.jsx";
import CareerPage from "./pages/Career/CareerPage.jsx";
import BlogPage from "./pages/Blog/BlogPage.jsx";
import EventsPage from "./pages/Event/EventPage.jsx";
import Team from "./pages/Team/Team.jsx";
import ContactPage from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/career" element={<CareerPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/journal" element={<BlogPage />} />
          <Route path="/event" element={<EventsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
// import "./App.css";
// import Header from './components/Navbar/Header.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import Home from './pages/Home/Home.jsx';
// import About from "./pages/About/About.jsx";
// import ServicePage from "./pages/Service/ServicePage.jsx";
// import ProjectPage from "./pages/Project/ProjectPage.jsx";
// import CareerPage from "./pages/Career/CareerPage.jsx";
// import BlogPage from "./pages/Blog/BlogPage.jsx";
// import EventsPage from "./pages/Event/EventPage.jsx";
// import Team from "./pages/Team/Team.jsx";
// import ContactPage from "./pages/Contact/Contact.jsx";
// // import PricingPage from "./pages/Pricing/Pricing.jsx";


// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route path="/team" element={<TeamPage />} /> */}
//         <Route path="/team" element={<Team />} />
//         <Route path="/service" element={<ServicePage />} />
//         <Route path="/projects" element={<ProjectPage />} />
//         <Route path="/career" element={<CareerPage/>} />
//         {/* <Route path="/pricing" element={<PricingPage />} /> */}
//         <Route path="/contact" element={<ContactPage/>}/>
//         <Route path="/journal" element={<BlogPage />} />
//         <Route path="/event" element={<EventsPage />} />
        
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;