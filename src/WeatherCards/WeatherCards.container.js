import React, { useState, useEffect } from 'react';
import apiClient from '../api';
import WeatherCardsComponent from './WeatherCards.component';
import { formatDate } from '../helpers/date.helpers';
import { formatWeekday } from '../helpers/weekday.helpers';

function WeatherCards() {
  const [weatherCards, setWeatherCards] = useState([]);

  const fetchWeatherCards = async () => {
    try {
      const data = await apiClient.getWeatherCards();
      const temps = Object.keys(data)
        .map((sol_key) => {
          const { First_UTC, AT, HWS } = data[sol_key];

          let weekdate = '(no data)';
          let day = '(no data)';
          let highestTemp = '(no data)';
          let lowestTemp = '(no data)';
          let highestWind = '(no data)';
          let lowestWind = '(no data)';

          if (!!sol_key) {
            weekdate = formatWeekday(sol_key);
          }
          if (!!First_UTC) {
            day = formatDate(new Date(First_UTC), false);
          }
          if (!!AT?.mx) {
            highestTemp = AT.mx.toFixed(2);
          }
          if (!!AT?.mn) {
            lowestTemp = AT.mn.toFixed(2);
          }
          if (!!HWS?.mx) {
            highestWind = HWS.mx.toFixed(2);
          }
          if (!!HWS?.mn) {
            lowestWind = HWS.mn.toFixed(2);
          }

          return {
            weekday: weekdate,
            date: day,
            highestTemp,
            lowestTemp,
            highestWind,
            lowestWind
          };
        })
        .filter(({ weekday }) => !!weekday);
      setWeatherCards(temps);
    } catch (error) {
      setWeatherCards([
        {
          weekday: '(no data)',
          date: '(no data)',
          highest: '(no data)',
          lowest: '(no data)',
          highestWind: '(no data)',
          lowestWind: '(no data)'
        },
      ]);
    }
  };

  useEffect(() => {
    fetchWeatherCards();
  }, []);

  return <WeatherCardsComponent weatherCards={weatherCards.slice(1)} />;
}

export default WeatherCards;
