// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => {
  return (
    <div>
      <h1>Сім чудес Стародавнього світу</h1>
      <ul className="nav-links">
        <li><Link to="/great-pyramid">Піраміда Хеопса</Link></li>
        <li><Link to="/statue-of-zeus">Статуя Зевса</Link></li>
        <li><Link to="/hanging-gardens">Висячі сади Семіраміди</Link></li>
        <li><Link to="/temple-of-artemis">Храм Артеміди в Ефесі</Link></li>
        <li><Link to="/mausoleum">Мавзолей у Галікарнасі</Link></li>
        <li><Link to="/colossus">Колос Родоський</Link></li>
        <li><Link to="/lighthouse">Маяк в Александрії</Link></li>
      </ul>
    </div>
  );
};

export default Home;
