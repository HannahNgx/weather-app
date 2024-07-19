import './CurrentWeather.scss';

function CurrentWeatherComponent({ CurrentWeather }) {
  return (
    <div className="CurrentWeather">
      <div className="CurrentWeather__TempHigh"><strong>High Temp:</strong> {CurrentWeather.highestTemp} ºC</div>
      <div className="CurrentWeather__TempLow"><strong>Low Temp:</strong> {CurrentWeather.lowestTemp} ºC</div>
      <div className="CurrentWeather__WindHigh"><strong>Max Wind Sp:</strong> {CurrentWeather.highestWind} m/s</div>
      <div className="CurrentWeather__WindLow"><strong>Min Wind Sp:</strong> {CurrentWeather.lowestWind} m/s</div>
    </div>
  );
}

export default CurrentWeatherComponent;
