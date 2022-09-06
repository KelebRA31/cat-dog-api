import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import './App.css';
import HomePage from './components/HomePage/HomePage';
import Dog from './components/Dog/Dog';
import LK from './components/LK/LK';

export default function App() {
  return (
    <div>

      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/lk" element={<LK />} />
      </Routes>
    </div>
  );
}
