import './App.scss';
import Header from '../Header';
import CurrentWeather from '../CurrentWeather';
import WeatherCards from '../WeatherCards';
import React, { useState } from 'react';

function App() {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = (e) => {
    e.preventDefault();
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="App">
      <Header />
      <CurrentWeather isCelsius={isCelsius} toggleUnit={toggleUnit} />
      <WeatherCards isCelsius={isCelsius} />
    </div>
  );
}

export default App;
