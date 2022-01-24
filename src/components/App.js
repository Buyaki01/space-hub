import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/missions" />
        <Route path="/dragons" />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
