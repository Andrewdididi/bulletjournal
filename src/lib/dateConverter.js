export default function (rawDate) {
  const date = new Date(rawDate);
  const locale = 'en';
  return `${date.toLocaleString(locale, { month: 'short' })} ${date.toLocaleString(locale, { day: 'numeric' })}  (${date.toLocaleString(locale, { weekday: 'short' })})`;
}

