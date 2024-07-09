import './CurrentTemp.scss';

function CurrentTempComponent({ currentTemp }) {
  return (
    <div className="CurrentTemp">
        <div className="CurrentTemp__High"> High: {currentTemp.highest} ºC</div>
        <div className="CurrentTemp__Low"> Low: {currentTemp.lowest} ºC</div>
    </div>
  );
}

export default CurrentTempComponent;
