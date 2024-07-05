import './Header.scss';
import React, { useState } from 'react';
import { formatDate } from '../helpers/date.helpers';

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const updateTime = () => {
    setCurrentTime(new Date());
  };
  setInterval(updateTime, 1000);
  return (
    <div className="Header">
      <div className="Header__Credit">Credits go to Hannah</div>
      <div className="Header__Title">Totally Legit Mars Weather App for Time Travelers</div>
      <div className="Header__CurrentTime">{formatDate(currentTime)}</div>
    </div>
  );
}

export default Header;
