import './Unit.scss';
import { getFixedValue } from '../helpers';
import { celsiusToFahrenheit } from '../helpers';
import { formatTemperature  } from '../helpers';

export function CurrentUnitComponent({label, value, isCelsius, toggleUnit}) {
  const fValue = getFixedValue(celsiusToFahrenheit(value));
  return (
    <div className="CurrentUnitComponent">
    <b>{label}</b>
    {isCelsius ? value : fValue}
    <button
      className={`CurrentUnitComponent__Unit ${isCelsius ? 'CurrentUnitComponent__Unit--selected' : ''}`}
      onClick={toggleUnit}
    >
      ºC
    </button>
    /
    <button
      className={`CurrentUnitComponent__Unit ${!isCelsius ? 'CurrentUnitComponent__Unit--selected' : ''}`}
      onClick={toggleUnit}
    >
      ºF
    </button>
  </div>
  )
}

export function CardsUnitComponent({label, value, isCelsius}) {
  return (
  <div className="CardsUnitComponent">
  <b>{label}</b> 
  {formatTemperature(value, isCelsius)}
  <span
    className={`CardsUnitComponent__Unit ${isCelsius ? 'CardsUnitComponent__Unit--selected' : ''}`}
  >
    ºC
  </span>
  /
  <span
    className={`CardsUnitComponent__Unit ${!isCelsius ? 'CardsUnitComponent__Unit--selected' : ''}`}
  >
    ºF
  </span>
</div>
  )
}
