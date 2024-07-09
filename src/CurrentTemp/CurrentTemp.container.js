import React, { useState, useEffect } from 'react';
import CurrentTempComponent from './CurrentTemp.component';

function CurrentTemp() {
  const [currentTemp, setCurrentTemp] = useState({ lowest: null, highest: null });

  const fetchCurrentTemp = async () => {
    const response = await fetch('http://localhost:4567/insight_weather');
    const data = await response.json();
    const sol_keys = Object.keys(data);
    setCurrentTemp({
      highest: data[sol_keys[0]].PRE.mx.toFixed(2),
      lowest: data[sol_keys[0]].PRE.mn.toFixed(2),
    });
  }

  useEffect(() => {
    fetchCurrentTemp();
  }, []);

  return <CurrentTempComponent currentTemp={currentTemp} />;
};

export default CurrentTemp;
