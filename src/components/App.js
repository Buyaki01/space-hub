import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header/Header';
import MissionsContainer from './missions/MissionsContainer';
import ProfilePage from './Pages/ProfilePage';
import DragonsPage from './Pages/DragonsPage';
import Rockets from './Rockets/Rockets';
import getDragons from '../modules/dragonsAPI';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<MissionsContainer />} />
        <Route path="/dragons" element={<DragonsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
