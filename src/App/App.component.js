import './App.scss';
import Header from '../Header';
import CurrentTemp from '../CurrentTemp';
import PastTemps from '../PastTemps';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentTemp />
      <PastTemps />
    </div>
  );
}

export default App;
