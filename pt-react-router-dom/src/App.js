import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div>
        Footer
      </div>
    </Router>
  );
}

export default App;
