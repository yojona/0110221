import moment from "moment";

export const getDate = (date?: string): Date => {
  if (!date) {
    return new Date();
  }

  const [year, day, month] = date.split('/');

  if (year && day && month) {
    return moment(`${year}-${month}-${day}`).toDate();
  }
  return new Date(date);
};
