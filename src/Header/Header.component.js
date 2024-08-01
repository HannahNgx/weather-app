import './Header.scss';
import React, { useState, useEffect } from 'react';
import { formatDate } from '../helpers';

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const updateTime = () => {
    setCurrentTime(new Date());
  };
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);
  return (
    <div className="Header">
      <div className="Header__Credit">Credits go to Hannah</div>
      <div className="Header__Title">
        Totally Legit Mars Weather App for Time Travelers
      </div>
      <div className="Header__CurrentTime">{formatDate(currentTime)}</div>
    </div>
  );
}

export default Header;
