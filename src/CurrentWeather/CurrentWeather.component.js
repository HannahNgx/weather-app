import React from 'react';
import './CurrentWeather.scss';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../helpers';
import { getFixedValue } from '../helpers';

function CurrentWeatherComponent({ currentWeather, isCelsius, toggleUnit }) {
  const highTempCelsius = currentWeather.highestTemp;
  const lowTempCelsius = currentWeather.lowestTemp;
  const highTempFahrenheit = getFixedValue(
    celsiusToFahrenheit(highTempCelsius),
  );
  const lowTempFahrenheit = getFixedValue(celsiusToFahrenheit(lowTempCelsius));

  return (
    <div className="CurrentWeather">
      <div className="CurrentWeather__TempHigh">
        <b>High Temp: </b>{' '}
        {isCelsius ? highTempCelsius : highTempFahrenheit}
        <button 
          className={`CurrentWeather__Unit ${isCelsius ? 'CurrentWeather__Unit--not-selected' : ''}`}
          onClick={toggleUnit}
        >
          ºC
        </button>
        /
        <button 
          className={`CurrentWeather__Unit ${!isCelsius ? 'CurrentWeather__Unit--not-selected' : ''}`}
          onClick={toggleUnit}
        >
          ºF
        </button>
      </div>
      <div className="CurrentWeather__TempLow">
        <b>Low Temp:</b>{' '}
        {isCelsius ? lowTempCelsius : lowTempFahrenheit}
        <button
          className={`CurrentWeather__Unit ${isCelsius ? 'CurrentWeather__Unit--not-selected' : ''}`}
          onClick={toggleUnit}
        >
          ºC
        </button>
        /
        <button
          className={`CurrentWeather__Unit ${!isCelsius ? 'CurrentWeather__Unit--not-selected' : ''}`}
          onClick={toggleUnit}
        >
          ºF
        </button>
      </div>
      <div className="CurrentWeather__WindHigh">
        <b>Max Wind Sp:</b> {currentWeather.highestWind} m/s
      </div>
      <div className="CurrentWeather__WindLow">
        <b>Min Wind Sp:</b> {currentWeather.lowestWind} m/s
      </div>
      <div className="CurrentWeather__PreLow">
        <b>High Pressure:</b> {currentWeather.highestPre} Pa
      </div>
      <div className="CurrentWeather__PreHigh">
        <b>Low Pressure:</b> {currentWeather.lowestPre} Pa
      </div>
    </div>
  );
}
CurrentWeatherComponent.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  isCelsius: PropTypes.bool.isRequired,
  toggleUnit: PropTypes.func.isRequired,
};

export default CurrentWeatherComponent;
