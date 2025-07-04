import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useDeviceType from './hooks/useDeviceType';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import Hero from './pages/hub/PCHero';
import MobileHero from './pages/hub/MobileHero';
import Help from './pages/help/PCHelp';
import MobileHelp from './pages/help/MobileHelp';

function App() {
  const device = useDeviceType();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col relative overflow-hidden">
      element={device === "mobile" ? <MobileHeader /> : <Header />}
      <main className="flex-grow relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              device === "mobile" ? <MobileHero /> : <Hero />
            }
          />
          <Route 
            path="/help" 
            element={
              device === "mobile" ? <MobileHelp /> : <Help/>
            } 
          />
          <Route path="/about" element={<Help />} />
          <Route path="/profile" element={<Help />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
