import React, { useState, useEffect } from 'react';
import apiClient from '../api';
import CurrentWeatherComponent from './CurrentWeather.component';
import { WEATHER_DEFAULTS } from '../constants';
import { getFixedValue } from '../helpers';

function CurrentWeather({ isCelsius, toggleUnit }) {
  const [currentWeather, setCurrentWeather] = useState({});

  const fetchCurrentWeather = async () => {
    try {
      const data = await apiClient.getCurrentWeather();
      const solKeys = data.sol_keys;
      const lastKey = solKeys[solKeys.length - 1];
      const { AT, HWS, PRE } = data[lastKey];

      let {
        highestTemp,
        lowestTemp,
        highestWind,
        lowestWind,
        highestPre,
        lowestPre,
      } = { ...WEATHER_DEFAULTS };

      highestTemp = getFixedValue(AT?.mx, highestTemp);
      lowestTemp = getFixedValue(AT?.mn, lowestTemp);
      highestWind = getFixedValue(HWS?.mx, highestWind);
      lowestWind = getFixedValue(HWS?.mn, lowestWind);
      highestPre = getFixedValue(PRE?.mx, highestPre);
      lowestPre = getFixedValue(PRE?.mn, lowestPre);

      setCurrentWeather({
        highestTemp,
        lowestTemp,
        highestWind,
        lowestWind,
        highestPre,
        lowestPre,
      });
    } catch (error) {
      //If we can't see the errors that we put in try, we should put console.log(error) here too
      setCurrentWeather(WEATHER_DEFAULTS);
    }
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  return (
    <CurrentWeatherComponent
      currentWeather={currentWeather}
      isCelsius={isCelsius}
      toggleUnit={toggleUnit}
    />
  );
}

export default CurrentWeather;
