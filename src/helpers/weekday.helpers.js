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
