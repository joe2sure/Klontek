import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Spinner from "./utils/Spinner/Spinner.jsx";


// Lazy load all components for pages
const Header = lazy(() => import("./components/Navbar/Header.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const ServicePage = lazy(() => import("./pages/Service/ServicePage.jsx"));
const ProjectPage = lazy(() => import("./pages/Project/ProjectPage.jsx"));
const CareerPage = lazy(() => import("./pages/Career/CareerPage.jsx"));
const BlogPage = lazy(() => import("./pages/Blog/BlogPage.jsx"));
const EventsPage = lazy(() => import("./pages/Event/EventPage.jsx"));
const Team = lazy(() => import("./pages/Team/Team.jsx"));
const ContactPage = lazy(() => import("./pages/Contact/Contact.jsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/journal" element={<BlogPage />} />
            <Route path="/event" element={<EventsPage />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
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