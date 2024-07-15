import './PastTemps.scss';
import React from 'react';

function PastTempsComponent({ weekday, date, lowest, highest }) {
  return (
    <div className="PastTempsCard">
      <div className="PastTempsCard__Weekday">{weekday}</div>
      <div className="PastTempsCard__Date">{date}</div>
      <hr />
      <div className="PastTempsCard__Low">High: {highest} ºC</div>
      <div className="PastTempsCard__High">Low: {lowest} ºC</div>
    </div>
  );
}

export default PastTempsComponent;
