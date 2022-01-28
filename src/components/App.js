import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header/Header';
import MissionsContainer from './missions/MissionsContainer';
import ProfilePage from './Pages/ProfilePage';
import DragonsPage from './Pages/DragonsPage';
import Rockets from './Rockets/RocketsList';
import getDragons from '../modules/dragonsAPI';
import { getMissionsFromApi } from '../redux/missions/missionsReducer';
import { fetchRockets } from '../redux/rockets/rocketReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
    dispatch(getMissionsFromApi());
    dispatch(fetchRockets());
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
