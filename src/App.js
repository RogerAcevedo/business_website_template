import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// PAGES
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      
      <Router>
        < Navbar />
      {/* "switch" updated to "routes" */}
      <Routes>
            {/* component switched to "element" */}
            <Route path="/"  element={ < Home /> } />
            <Route path="/menu"  element={ < Menu /> } />
            <Route path="/about"  element={ < About /> } />
            <Route path="/contact"  element={ < Contact /> } />

      </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
