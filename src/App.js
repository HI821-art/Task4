// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GreatPyramid from './components/GreatPyramid';
import StatueOfZeus from './components/StatueOfZeus';
import HangingGardens from './components/HangingGardens';
import TempleOfArtemis from './components/TempleOfArtemis';
import MausoleumAtHalicarnassus from './components/MausoleumAtHalicarnassus';
import ColossusOfRhodes from './components/ColossusOfRhodes';
import LighthouseOfAlexandria from './components/LighthouseOfAlexandria';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/great-pyramid" element={<GreatPyramid />} />
        <Route path="/statue-of-zeus" element={<StatueOfZeus />} />
        <Route path="/hanging-gardens" element={<HangingGardens />} />
        <Route path="/temple-of-artemis" element={<TempleOfArtemis />} />
        <Route path="/mausoleum" element={<MausoleumAtHalicarnassus />} />
        <Route path="/colossus" element={<ColossusOfRhodes />} />
        <Route path="/lighthouse" element={<LighthouseOfAlexandria />} />
      </Routes>
    </Router>
  );
};

export default App;
