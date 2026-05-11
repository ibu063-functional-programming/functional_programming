// getWeekAndDay :: String → (Number × String)
const getWeekAndDay = (yyyy_mm_dd) => {
  let weekNumber;
  let dayOfWeekName;

  // Placeholder logic - you can replace this with actual date calculations
  const date = new Date(yyyy_mm_dd);
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = (date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60000);
  weekNumber = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayOfWeekName = days[date.getDay()];

  return [weekNumber, dayOfWeekName];
};

console.log(getWeekAndDay("2025-05-12"))