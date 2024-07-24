import './CurrentWeather.scss';
import PropTypes from 'prop-types';

function CurrentWeatherComponent({ currentWeather }) {
  return (
    <div className="CurrentWeather">
      <div className="CurrentWeather__TempHigh"><strong>High Temp:</strong> {currentWeather.highestTemp} ºC</div>
      <div className="CurrentWeather__TempLow"><strong>Low Temp:</strong> {currentWeather.lowestTemp} ºC</div>
      <div className="CurrentWeather__WindHigh"><strong>Max Wind Sp:</strong> {currentWeather.highestWind} m/s</div>
      <div className="CurrentWeather__WindLow"><strong>Min Wind Sp:</strong> {currentWeather.lowestWind} m/s</div>
    </div>
  );
}
CurrentWeatherComponent.propTypes = {
  currentWeather: PropTypes.object.isRequired,
};

export default CurrentWeatherComponent;
