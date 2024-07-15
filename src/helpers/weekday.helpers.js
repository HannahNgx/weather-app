export function formatWeekday(sol) {
    const remainder = sol % 7;
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return weekDays[remainder];
}
