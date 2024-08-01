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
        <strong>High Temp: </strong>{' '}
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
        <strong>Low Temp:</strong>{' '}
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
        <strong>Max Wind Sp:</strong> {currentWeather.highestWind} m/s
      </div>
      <div className="CurrentWeather__WindLow">
        <strong>Min Wind Sp:</strong> {currentWeather.lowestWind} m/s
      </div>
      <div className="CurrentWeather__PreLow">
        <strong>High Pressure:</strong> {currentWeather.highestPre} Pa
      </div>
      <div className="CurrentWeather__PreHigh">
        <strong>Low Pressure:</strong> {currentWeather.lowestPre} Pa
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
