import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import ProfilePage from './pages/ProfilePage';
import DragonsPage from './pages/DragonsPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/missions" />
        <Route path="/dragons" element={<DragonsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
