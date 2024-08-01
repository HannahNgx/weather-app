import './App.scss';
import Header from '../Header';
import CurrentWeather from '../CurrentWeather';
import WeatherCards from '../WeatherCards';
import React, { useState } from 'react';

function App() {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="App">
      <Header />
      <CurrentWeather isCelsius={isCelsius} handleUnit={handleUnit} />
      <WeatherCards isCelsius={isCelsius} />
    </div>
  );
}

export default App;
