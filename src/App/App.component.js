import './App.scss';
import Header from '../Header/Header.component';
import CurrentTemp from '../CurrentTemp/CurrentTemp.container';
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
