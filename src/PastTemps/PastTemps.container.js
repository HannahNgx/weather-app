import React, { useState, useEffect } from 'react';
import apiClient from '../api';
import PastTempsComponent from './PastTemps.component';
import { formatDate } from '../helpers/date.helpers';
import { formatWeekday } from '../helpers/weekday.helpers';

function PastTemps() {
  const [pastTemps, setPastTemps] = useState([]);

  const fetchPastTemps = async () => {
    try {
      const data = await apiClient.getPastTemps();
      const temps = Object.keys(data)
        .map((sol_key) => {
          const { First_UTC, PRE } = data[sol_key];

          let weekdate = '(no data)';
          let day = '(no data)';
          let highestTemp = '(no data)';
          let lowestTemp = '(no data)';

          if (!!sol_key) {
            weekdate = formatWeekday(sol_key);
          }
          if (!!First_UTC) {
            day = formatDate(new Date(First_UTC), false);
          }
          if (!!PRE?.mx) {
            highestTemp = PRE.mx.toFixed(2);
          }
          if (!!PRE?.mn) {
            lowestTemp = PRE.mn.toFixed(2);
          }

          return {
            weekday: weekdate,
            date: day,
            highest: highestTemp,
            lowest: lowestTemp,
          };
        })
        .filter(({ weekday }) => !!weekday);
      setPastTemps(temps);
    } catch (error) {
      setPastTemps([
        {
          weekday: '(no data)',
          date: '(no data)',
          highest: '(no data)',
          lowest: '(no data)',
        },
      ]);
    }
  };

  useEffect(() => {
    fetchPastTemps();
  }, []);

  return <PastTempsComponent pastTemps={pastTemps} />;
}

export default PastTemps;
