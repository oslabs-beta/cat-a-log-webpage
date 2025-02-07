import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import Home from './components/Home';
import About from './components/About';
import Docs from './components/Docs';
import NotFound from './components/NotFound';
import catlogo from './assets/Catalog_art.png';

function App() {
    console.log("app is rendering");
    return (
      <Router>
        <nav className="navbar">
          <img src={catlogo} alt="Cat logo" className="navbar-logo"/>
          <ul className="nav-list">
            <li id='title'>Cat-A-Log</li>
            <li><br></br></li>
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="https://www.npmjs.com/package/cat-a-logs?activeTab=readme">Downloads</Link></li>
            <li className="menu-item"><Link to="/about">About</Link></li>
            <li className="menu-item"><Link to="/docs">Docs</Link></li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }

export default App;