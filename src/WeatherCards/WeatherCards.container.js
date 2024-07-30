import React, { useState, useEffect } from 'react';
import apiClient from '../api';
import WeatherCardsComponent from './WeatherCards.component';
import { formatDate } from '../helpers/date.helpers';
import { formatWeekday } from '../helpers/weekday.helpers';
import { WEATHER_DEFAULTS } from '../constants';
import { getFixedValue } from '../constants';

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
          
          highestTemp = getFixedValue(AT?.mx, highestTemp);
          lowestTemp = getFixedValue(AT?.mn, lowestTemp);
          highestWind = getFixedValue(HWS?.mx, highestWind);
          lowestWind = getFixedValue(HWS?.mn, lowestWind);
          highestPre = getFixedValue(PRE?.mx, highestPre);
          lowestPre = getFixedValue(PRE?.mn, lowestPre);

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
