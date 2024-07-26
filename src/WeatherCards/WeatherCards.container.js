import React, { useState, useEffect } from 'react';
import apiClient from '../api';
import WeatherCardsComponent from './WeatherCards.component';
import { formatDate } from '../helpers/date.helpers';
import { formatWeekday } from '../helpers/weekday.helpers';
import { WEATHER_DEFAULTS } from '../constants';

function WeatherCards() {
  const [weatherCards, setWeatherCards] = useState([]);

  const fetchWeatherCards = async () => {
    try {
      const data = await apiClient.getWeatherCards();
      const temps = Object.keys(data)
        .map((sol_key) => {
          const { First_UTC, AT, HWS, PRE } = data[sol_key];

          let { weekdate, day, highestTemp, lowestTemp, highestWind, lowestWind, highestPre, lowestPre } = {...WEATHER_DEFAULTS};

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
          if (!!PRE?.mx) {
            highestPre = PRE.mx.toFixed(2);
          }
          if (!!PRE?.mn) {
            lowestPre = PRE.mn.toFixed(2);
          }

          return {
            weekday: weekdate,
            date: day,
            highestTemp,
            lowestTemp,
            highestWind,
            lowestWind,
            highestPre,
            lowestPre
          };
        })
        .filter(({ weekday }) => !!weekday);
      setWeatherCards(temps);
    } catch (error) {
      setWeatherCards([WEATHER_DEFAULTS]);
    }
  };

  useEffect(() => {
    fetchWeatherCards();
  }, []);

  return <WeatherCardsComponent weatherCards={weatherCards.slice(1)} />;
}

export default WeatherCards;
