import React, { useState, useEffect, useMemo } from 'react';
import PastTempsComponent from './PastTemps.component';
import { formatDate } from '../helpers/date.helpers'; 
import { formatWeekday } from '../helpers/weekday.helpers';

function PastTemps() {
  const [pastTemps, setPastTemps] = useState([]);

  const fetchPastTemps = async () => {
    try {
      const response = await fetch('http://localhost:4567/insight_weather');
      const data = await response.json();
            
      const temps = Object.keys(data).map((sol_key) => {
        const { First_UTC, PRE } = data[sol_key];

          let weekdate = '(no data)';
          let day = '(no data)';
          let highestTemp = '(no data)';
          let lowestTemp = '(no data)';

          if (sol_key && !!sol_key) {
            weekdate = formatWeekday(sol_key);
          }
          if (First_UTC && !!First_UTC) {
            day = formatDate(new Date(First_UTC), false);
          }
          if (PRE && !!PRE.mx) {
            highestTemp = PRE.mx.toFixed(2);
          }
          if (PRE && !!PRE.mn) {
            lowestTemp = PRE.mn.toFixed(2);
          }

          return {
            weekday: weekdate,
            date: day,
            highest: highestTemp,
            lowest: lowestTemp,
          };
      });

      setPastTemps(temps);
    } catch (error) {
      setPastTemps({ weekday: '(no data)', date: '(no data)', highest: '(no data)', lowest: '(no data)' });
    }
  };

  useEffect(() => {
    fetchPastTemps();
  }, []);

  const PastTempsCards = useMemo(() => (
    pastTemps.map((temp, index) => (
      <PastTempsComponent
        key={index} 
        weekday={temp.weekday}
        date={temp.date}
        highest={temp.highest}
        lowest={temp.lowest}
      />
    ))
  ), [pastTemps]);

  return (
    <div className="PastTempsCards">
      {PastTempsCards}
    </div>
  );
}

export default PastTemps;
