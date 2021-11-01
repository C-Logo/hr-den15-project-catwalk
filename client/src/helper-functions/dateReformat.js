export function getMonth(monthNum) {
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthArray[Number(monthNum) - 1];
}

export default function dateReformat(dateString) {
  let reformatedDate = '';
  const day = dateString.slice(8, 10);
  const monthNum = dateString.slice(5, 7);
  const year = dateString.slice(0, 4);
  reformatedDate = `${getMonth(monthNum)} ${day}, ${year}`;
  return reformatedDate;
}
