import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Profile from './pages/Profile';
import Rockets from './Rockets/Rockets';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" />
        <Route path="/dragons" />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
