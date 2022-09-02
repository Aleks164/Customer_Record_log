export const firstDayOfWeak = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 1).getDay();
