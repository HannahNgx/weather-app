import React, { useState, useEffect } from 'react';
import CurrentTempComponent from './CurrentTemp.component';

function CurrentTemp() {
  const [currentTemp, setCurrentTemp] = useState({ lowest: null, highest: null });
  const [error, setError] = useState(null);

  const fetchCurrentTemp = async () => {
    try {
      const response = await fetch('http://localhost:4567/insight_weather');
      const data = await response.json();
      const sol_keys = Object.keys(data);
      const { PRE } = data[sol_keys[0]];
      setCurrentTemp({
        highest: PRE.mx.toFixed(2),
        lowest: PRE.mn.toFixed(2),
      });
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchCurrentTemp();
  }, []);

  if (error) {
    return <CurrentTempComponent currentTemp={{ lowest: '(no data)', highest: '(no data)' }} />;
  }
  return <CurrentTempComponent currentTemp={currentTemp} />;
};

export default CurrentTemp;
