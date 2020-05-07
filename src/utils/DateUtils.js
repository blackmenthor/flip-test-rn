import * as Constants from './Constants';

/**
 * A function to compare two Date object.
 *
 * @requires {Date} a
 * @requires {Date} b
 */
export const compare = (a, b) => {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
  return 1;
};

/**
 * A function to parse a String to be a Date object.
 * the String supplied had to be with this format: 'YYYY-mm-dd hh:MM:ss'
 *
 * @requires {Date} a
 * @requires {Date} b
 */
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

/**
 * A function to format a Date object to a formatted date String.
 * Format: 'DD mm YYYY'
 *
 * @requires {Date} a
 * @requires {Date} b
 */
export const format = input => {
  const year = input.getFullYear();
  const month = input.getMonth() + 1;
  const day = input.getDate();
  return `${day} ${Constants.monthNames[month]} ${year}`;
};
