import './Unit.scss';
import React, { useMemo } from 'react';
import { getFixedValue } from '../helpers';
import { celsiusToFahrenheit } from '../helpers';

export function UnitComponent({label, value, isCelsius, toggleUnit}) {
  const fValue = getFixedValue(celsiusToFahrenheit(value));
  const { TempComponentWrapper } = useMemo(() => {
    const componentWrapper = toggleUnit ? 'button' : 'span';
    let componentProps = {};
    
    if (toggleUnit) {
      componentProps.onClick = toggleUnit;
    }
    
    return {
      TempComponentWrapper: componentWrapper,
      tempComponentProps: componentProps,
    };
  }, [toggleUnit]);
  return (
    <div className="UnitComponent">
    <b>{label}</b>
    {isCelsius ? value : fValue}
    <TempComponentWrapper
      className={`UnitComponent__Unit ${isCelsius ? 'UnitComponent__Unit--selected' : ''}`}
      onClick={toggleUnit}
    >
      ºC
    </TempComponentWrapper>
    /
    <TempComponentWrapper
      className={`UnitComponent__Unit ${!isCelsius ? 'UnitComponent__Unit--selected' : ''}`}
      onClick={toggleUnit}
    >
      ºF
    </TempComponentWrapper>
  </div>
  )
}
