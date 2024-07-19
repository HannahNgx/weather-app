import './App.scss';
import Header from '../Header';
import CurrentWeather from '../CurrentWeather';
import WeatherCards from '../WeatherCards';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentWeather />
      <WeatherCards />
    </div>
  );
}

export default App;
