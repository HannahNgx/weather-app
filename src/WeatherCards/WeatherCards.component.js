import './WeatherCards.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../helpers';
import { getFixedValue } from '../helpers';

function WeatherCardsComponent({ weatherCards, isCelsius }) {
  const formatTemperature = (temp) => {
    const temperature = isCelsius
      ? temp
      : getFixedValue(celsiusToFahrenheit(temp));
    return temperature;
  };
  return (
    <div className="WeatherCardsAll">
      {weatherCards.map(
        (
          {
            weekday,
            date,
            lowestTemp,
            highestTemp,
            highestWind,
            lowestWind,
            highestPre,
            lowestPre,
          },
          index,
        ) => (
          <div key={index} className="WeatherCard">
            <div className="WeatherCard__Weekday">{weekday}</div>
            <div className="WeatherCard__Date">{date}</div>
            <hr />
            <div className="WeatherCard__TempLow">
              <b>High Temp:</b> {formatTemperature(highestTemp)}
              <span
                className={`WeatherCard__Unit ${isCelsius ? 'NotSelected' : ''}`}
              >
                ºC
              </span>
              /
              <span
                className={`WeatherCard__Unit ${!isCelsius ? 'NotSelected' : ''}`}
              >
                ºF
              </span>
            </div>
            <div className="WeatherCard__TempHigh">
              <b>Low Temp:</b> {formatTemperature(lowestTemp)}
              <span
                className={`WeatherCard__Unit ${isCelsius ? 'NotSelected' : ''}`}
              >
                ºC
              </span>
              /
              <span
                className={`WeatherCard__Unit ${!isCelsius ? 'NotSelected' : ''}`}
              >
                ºF
              </span>
            </div>
            <div className="WeatherCard__WindLow">
              <b>Max Wind Sp:</b> {highestWind} m/s
            </div>
            <div className="WeatherCard__WindHigh">
              <b>Min Wind Sp:</b> {lowestWind} m/s
            </div>
            <div className="WeatherCard__PreLow">
              <b>High Pre:</b> {highestPre} Pa
            </div>
            <div className="WeatherCard__PreHigh">
              <b>Low Pre:</b> {lowestPre} Pa
            </div>
          </div>
        ),
      )}
    </div>
  );
}
WeatherCardsComponent.propTypes = {
  weatherCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeatherCardsComponent;
