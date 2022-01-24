import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/missions" />
        <Route path="/dragons" />
        <Route path="/profile" />
      </Routes>
    </div>
  );
}

export default App;
