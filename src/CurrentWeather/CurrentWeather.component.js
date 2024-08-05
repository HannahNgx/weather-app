import React from 'react';
import './CurrentWeather.scss';
import PropTypes from 'prop-types';
import { CurrentUnitComponent } from '../Unit/Unit.component';

function CurrentWeatherComponent({ currentWeather, isCelsius, toggleUnit }) {
  return (
    <div className="CurrentWeather">
      <CurrentUnitComponent label="High Temp: " value={currentWeather.highestTemp} isCelsius={isCelsius} toggleUnit={toggleUnit} /> 
      <CurrentUnitComponent label="Low Temp: " value={currentWeather.lowestTemp} isCelsius={isCelsius} toggleUnit={toggleUnit} /> 
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
