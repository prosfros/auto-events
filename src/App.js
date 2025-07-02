// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './pages/Hero';
import License from './components/License';
import Help from './pages/Help';


function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col relative overflow-hidden">
      <Header />
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
      <License />
    </div>
  );
}

export default App;
