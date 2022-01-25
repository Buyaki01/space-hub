import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Profile from './pages/Profile';
import MissionsContainer from './missions/MissionsContainer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/missions" element={<MissionsContainer />} />
        <Route path="/dragons" />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
