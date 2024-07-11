import './App.scss';
import Header from '../Header';
import CurrentTemp from '../CurrentTemp';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentTemp />
    </div>
  );
}

export default App;
