import React, { useState, useEffect } from 'react';
import apiClient from '../api';
import CurrentWeatherComponent from './CurrentWeather.component';

function CurrentWeather() {
  const [CurrentWeather, setCurrentWeather] = useState({});

  const fetchCurrentWeather = async () => {
    try {
      const data = await apiClient.getCurrentWeather();
      const sol_keys = data.sol_keys;
      const lastKey = sol_keys[sol_keys.length - 1];
      const { AT, HWS } = data[lastKey];

      let highestTemp = '(no data)';
      let lowestTemp = '(no data)';
      let highestWind = '(no data)';
      let lowestWind = '(no data)';

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

      setCurrentWeather({
        highestTemp,
        lowestTemp,
        highestWind,
        lowestWind
      });
    } catch (error) {
      //If we can't see the errors that we put in try, we should put console.log(error) here too
      setCurrentWeather({ lowestTemp: '(no data)', highestTemp: '(no data)', lowestWind: '(no data)', highestWind: '(no data)' });
    }
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  return <CurrentWeatherComponent CurrentWeather={CurrentWeather} />;
}

export default CurrentWeather;
