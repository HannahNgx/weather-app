import './Unit.scss';
import React, { useMemo } from 'react';
import { getFixedValue, celsiusToFahrenheit } from '../helpers';

export function UnitComponent({ label, value, isCelsius, toggleUnit }) {
  const fValue = getFixedValue(celsiusToFahrenheit(value));
  const { TempComponentWrapper, tempComponentProps } = useMemo(() => {
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
      <span className="UnitComponent__Value">{isCelsius ? value : fValue}</span>
      <TempComponentWrapper
        className={`UnitComponent__Unit ${isCelsius ? 'UnitComponent__Unit--selected' : ''}`}
        {...tempComponentProps}
      >
        ºC
      </TempComponentWrapper>
      /
      <TempComponentWrapper
        className={`UnitComponent__Unit ${!isCelsius ? 'UnitComponent__Unit--selected' : ''}`}
        {...tempComponentProps}
      >
        ºF
      </TempComponentWrapper>
    </div>
  );
}
