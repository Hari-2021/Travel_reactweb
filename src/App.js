import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Destinations from './components/Destinations';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
