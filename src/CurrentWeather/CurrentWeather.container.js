import React, { useState, useEffect } from 'react';
import apiClient from '../api';
import CurrentWeatherComponent from './CurrentWeather.component';
import { WEATHER_DEFAULTS } from '../constants';

function CurrentWeather() {
  const [currentWeather, setCurrentWeather] = useState({});

  const fetchCurrentWeather = async () => {
    try {
      const data = await apiClient.getCurrentWeather();
      const solKeys = data.sol_keys;
      const lastKey = solKeys[solKeys.length - 1];
      const { AT, HWS, PRE } = data[lastKey];

      let { highestTemp, lowestTemp, highestWind, lowestWind, highestPre, lowestPre } = {...WEATHER_DEFAULTS};

      if (!!AT.mx) {
        highestTemp = AT.mx.toFixed(2);
      }
      if (!!AT.mn) {
        lowestTemp = AT.mn.toFixed(2);
      }
      if (!!HWS.mx) {
        highestWind = HWS.mx.toFixed(2);
      }
      if (!!HWS.mn) {
        lowestWind = HWS.mn.toFixed(2);
      }
      if (!!PRE.mx) {
        highestPre = PRE.mx.toFixed(2);
      }
      if (!!PRE.mn) {
        lowestPre = PRE.mn.toFixed(2);
      }

      setCurrentWeather({
        highestTemp,
        lowestTemp,
        highestWind,
        lowestWind,
        highestPre, 
        lowestPre
      });
    } catch (error) {
      //If we can't see the errors that we put in try, we should put console.log(error) here too
      setCurrentWeather(WEATHER_DEFAULTS);
    }
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  return <CurrentWeatherComponent currentWeather={currentWeather} />;
}

export default CurrentWeather;
