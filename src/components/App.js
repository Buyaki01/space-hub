import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Profile from './pages/Profile';
<<<<<<< HEAD
import MissionsContainer from './missions/MissionsContainer';
=======
import Rockets from './Rockets/Rockets';
>>>>>>> f8c89723c1210ea06b81e9f644d4ef10824c1ffd

function App() {
  return (
    <div>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/" />
        <Route path="/missions" element={<MissionsContainer />} />
=======
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" />
>>>>>>> f8c89723c1210ea06b81e9f644d4ef10824c1ffd
        <Route path="/dragons" />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
