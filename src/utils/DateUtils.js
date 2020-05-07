export const compare = (a, b) => {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
  return 1;
};

// parses with format YYYY-mm-dd hh:MM:ss
export const parse = input => {
  let firstPart = input.split('-');
  let secondPart = firstPart[2].split(' ');
  let lastPart = secondPart[1].split(':');
  return new Date(
    Date.UTC(
      firstPart[0],
      firstPart[1] - 1, // Note: months are 0-based
      secondPart[0],
      lastPart[0],
      lastPart[1],
      lastPart[2],
      0, // milliseconds
    ),
  );
};

let monthNames = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export const format = input => {
  const year = input.getFullYear();
  const month = input.getMonth() + 1;
  const day = input.getDate();
  return `${day} ${monthNames[month]} ${year}`;
};
