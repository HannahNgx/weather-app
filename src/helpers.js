export function formatDate(date, includeTime = true) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedDate = formatter.format(date);
  const day = date.getDate(); //(1-31)
  const daySuffix = getDaySuffix(day); //helper function later
  //for time eg: 14:34:57
  if (!includeTime) {
    return formattedDate.replace(day, day + daySuffix);
  }
  const time = date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return `${formattedDate.replace(day, day + daySuffix)} - ${time}`;
}

function getDaySuffix(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export const getFixedValue = (newValue, currentValue) => {
  return !!newValue ? newValue.toFixed(2) : currentValue;
};

export function formatWeekday(sol) {
  const remainder = sol % 7;
  const weekDays = [
    'Sol Solis',
    'Sol Lunae',
    'Sol Martis',
    'Sol Mercurii',
    'Sol Jovis',
    'Sol Veneris',
    'Sol Saturni',
  ];
  return weekDays[remainder];
}

export function formatTemperature(temp, isCelsius) {
  const temperature = isCelsius
    ? temp
    : getFixedValue(celsiusToFahrenheit(temp));
  return temperature;
}

export function recommendationWeather(highestPre, highestTemp) {
  let recommendations = [];
  if (highestTemp < -27) {
    recommendations.push("It's cold, <br />bring a sweater.");
  }
  if (highestTemp >= -27) {
    recommendations.push(
      'It’s hot, put on some <br /> sunglasses to make sure  <br /> you’re staying cool.',
    );
  }
  if (highestPre < 778) {
    recommendations.push(
      'Atmospheric pressure is low, <br /> keep some <br /> snacks at hand to <br /> avoid feeling dizzy.',
    );
  }
  if (highestPre >= 778) {
    recommendations.push(
      'Atmospheric pressure is <br /> high, make sure your <br /> pressurized suit <br /> is correctly sealed and latched.',
    );
  }
  return recommendations.length > 0 ? recommendations.join('<br />') : '.';
}
