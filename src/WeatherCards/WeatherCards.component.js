import './WeatherCards.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../helpers/tempChange.helpers';
import { getFixedValue } from '../helpers/value.helpers';

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
              <strong>High Temp:</strong> {formatTemperature(highestTemp)}
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
              <strong>Low Temp:</strong> {formatTemperature(lowestTemp)}
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
              <strong>Max Wind Sp:</strong> {highestWind} m/s
            </div>
            <div className="WeatherCard__WindHigh">
              <strong>Min Wind Sp:</strong> {lowestWind} m/s
            </div>
            <div className="WeatherCard__PreLow">
              <strong>High Pre:</strong> {highestPre} Pa
            </div>
            <div className="WeatherCard__PreHigh">
              <strong>Low Pre:</strong> {lowestPre} Pa
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
