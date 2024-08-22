import './WeatherCards.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UnitComponent } from '../Unit/Unit.component';
import { recommendationWeather } from '../helpers';

function WeatherCardsComponent({ weatherCards, isCelsius }) {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleInfoClick = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
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
            <div className="WeatherCard__Header">
              <div className="WeatherCard__Weekday">{weekday}</div>
              <button
                className="WeatherCard__InfoButton"
                onClick={() => handleInfoClick(index)}
              >
                i
              </button>
            </div>
            <div className="WeatherCard__Date">{date}</div>
            <hr />
            {activeCardIndex === index ? (
              <div
                className="WeatherCard__Rec"
                dangerouslySetInnerHTML={{
                  __html: recommendationWeather(highestPre, highestTemp),
                }}
              />
            ) : (
              <React.Fragment>
                <UnitComponent
                  label="High temp:"
                  value={highestTemp}
                  isCelsius={isCelsius}
                />
                <UnitComponent
                  label="Low temp:"
                  value={lowestTemp}
                  isCelsius={isCelsius}
                />
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
                </React.Fragment>
            )}
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
