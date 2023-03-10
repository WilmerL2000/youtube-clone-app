import { formatDistance } from 'date-fns';

/**
 * It returns the number of days, hours, minutes, or seconds since the timestamp.
 * @param date - The date to be formatted.
 * @returns The number of days, hours, minutes, or seconds since the timestamp.
 */
export const getDateFormat = (date) => {
  const distance = formatDistance(Date.now(), new Date(date), {
    addSuffix: true,
  });
  /* Removing the first part of the string. */
  return distance.substring(distance.indexOf(distance.match(/\d+/g)));
};
