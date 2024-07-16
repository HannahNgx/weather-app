import './PastTemps.scss';
import React from 'react';

function PastTempsComponent({ pastTemps }) {
  return (
    <div className="PastTempsCards">
      {pastTemps.map(({ weekday, date, lowest, highest }, index) => (
        <div key={index} className="PastTempsCard">
          <div className="PastTempsCard__Weekday">{weekday}</div>
          <div className="PastTempsCard__Date">{date}</div>
          <hr />
          <div className="PastTempsCard__Low">High: {highest} ºC</div>
          <div className="PastTempsCard__High">Low: {lowest} ºC</div>
        </div>
      ))}
    </div>
  );
}

export default PastTempsComponent;
