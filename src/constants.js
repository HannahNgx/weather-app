export const WEATHER_DEFAULTS = {
    weekdate: '(no data)',
    day: '(no data)',
    highestTemp: '(no data)',
    lowestTemp: '(no data)',
    highestWind: '(no data)',
    lowestWind: '(no data)',
    highestPre: '(no data)',
    lowestPre: '(no data)',
}

export const getFixedValue = (newValue, currentValue) => {
    return !!newValue ? newValue.toFixed(2) : currentValue;
}
