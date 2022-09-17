import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alumni from './pages/Alumni';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Map from './pages/Map';
import Navigation from './components/navigation/navigation/Navigation';

import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation className='nav-over'/>
        <Routes>
          <Route className='page' path="/" element={<Home />} />
          <Route className='page' path="/signup" element={<SignUp />} />
          <Route className='page' path="/signin" element={<SignIn />} />
          <Route className='page' path="/map" element={<Map />} />
          <Route className='page' path="/alumni" element={<Alumni />} />
          <Route  path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
