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
