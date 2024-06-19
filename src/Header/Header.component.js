import './Header.scss';
import React, { useState } from 'react';
import { formatDate } from '../helpers/date.helpers';

function Header() {
  const [currentTime, setcurrentTime] = useState(new Date());
  const updateTime = () => {
    setcurrentTime(new Date());
  };
  setInterval(updateTime, 1000);
  return (
    <div className="Header">
      <div className="Header__Credit">Credits go to Hannah</div>
      <h1>Totally Legit Mars Weather App for Time Travelers</h1>
      <p>{formatDate(currentTime)}</p>
    </div>
  );
}

export default Header;
