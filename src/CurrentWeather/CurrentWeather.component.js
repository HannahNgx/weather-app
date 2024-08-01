import React from 'react';
import './CurrentWeather.scss';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../helpers/tempChange.helpers';
import { getFixedValue } from '../helpers/value.helpers';

function CurrentWeatherComponent({ currentWeather, isCelsius, handleUnit }) {
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
        <span
          className={`CurrentWeather__Unit ${isCelsius ? 'NotSelected' : ''}`}
          onClick={handleUnit}
        >
          ºC
        </span>
        /
        <span
          className={`CurrentWeather__Unit ${!isCelsius ? 'NotSelected' : ''}`}
          onClick={handleUnit}
        >
          ºF
        </span>
      </div>
      <div className="CurrentWeather__TempLow">
        <strong>Low Temp:</strong>{' '}
        {isCelsius ? lowTempCelsius : lowTempFahrenheit}
        <span
          className={`CurrentWeather__Unit ${isCelsius ? 'NotSelected' : ''}`}
          onClick={handleUnit}
        >
          ºC
        </span>
        /
        <span
          className={`CurrentWeather__Unit ${!isCelsius ? 'NotSelected' : ''}`}
          onClick={handleUnit}
        >
          ºF
        </span>
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
  handleUnit: PropTypes.func.isRequired,
};

export default CurrentWeatherComponent;
