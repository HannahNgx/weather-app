import React, { useState, useEffect } from 'react';
import CurrentTempComponent from './CurrentTemp.component';

function CurrentTemp() {
  const [currentTemp, setCurrentTemp] = useState({ lowest: '(no data)', highest: '(no data)' });

  const fetchCurrentTemp = async () => {
    try {
      const response = await fetch('http://localhost:4567/insight_weather');
      const data = await response.json();
      const sol_keys = Object.keys(data);
      const { PRE } = data[sol_keys[0]];

      let highestTemp = '(no data)';
      let lowestTemp = '(no data)';

      if (PRE.mx !== undefined) {
        highestTemp = PRE.mx.toFixed(2);
      }
      if (PRE.mn !== undefined) {
        lowestTemp = PRE.mn.toFixed(2);
      }

      setCurrentTemp({
        highest: highestTemp,
        lowest: lowestTemp,
      });
    } catch (error) {
      setCurrentTemp({ lowest: '(no data)', highest: '(no data)' });
    }
  };

  useEffect(() => {
    fetchCurrentTemp();
  }, []);

  return <CurrentTempComponent currentTemp={currentTemp} />;
}

export default CurrentTemp;
