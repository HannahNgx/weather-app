import './CurrentTemp.scss';
import React, { useState, useEffect } from 'react';

function CurrentTemp() {
  const [highestTemp, setHighestTemp] = useState(null);
  const [lowestTemp, setLowestTemp] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4567/insight_weather')
      .then(response => response.json())
      .then(data => {
        const firstSol = data.sol_keys[0];
        setHighestTemp((data[firstSol].PRE.mx).toFixed(2));
        setLowestTemp((data[firstSol].PRE.mn).toFixed(2));
      })
      .catch(error => console.error('Error fetching data:', error));
    }, []);
  return (
    <div className="CurrentTemp">
        <div className="CurrentTemp__High"> High: {highestTemp} </div>
        <div className="CurrentTemp__Low"> Low: {lowestTemp} </div>
    </div>
  );
}

export default CurrentTemp;
