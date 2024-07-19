import './WeatherCards.scss';
import React from 'react';

function WeatherCardsComponent({ weatherCards }) {
  return (
    <div className="WeatherCardsAll">
      {weatherCards.map(({ weekday, date, lowestTemp, highestTemp, highestWind, lowestWind }, index) => (
        <div key={index} className="WeatherCard">
          <div className="WeatherCard__Weekday">{weekday}</div>
          <div className="WeatherCard__Date">{date}</div>
          <hr />
          <div className="WeatherCard__TempLow"><strong>High Temp:</strong> {highestTemp} ºC</div>
          <div className="WeatherCard__TempHigh"><strong>Low Temp:</strong> {lowestTemp} ºC</div>
          <div className="WeatherCard__WindLow"><strong>Max Wind Sp:</strong> {highestWind} ºC</div>
          <div className="WeatherCard__WindHigh"><strong>Min Wind Sp:</strong> {lowestWind} ºC</div>
        </div>
      ))}
    </div>
  );
}

export default WeatherCardsComponent;
