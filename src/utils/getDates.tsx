import moment from 'moment';

function getDates(date: Date, weekStart: number) {
  const s = moment(date).startOf('month');
  const e = moment(date).endOf('month');
  const start = moment(date).startOf('month').subtract(s.day(), 'day').add(weekStart, 'day');
  const end = moment(date)
    .endOf('month')
    .add(5 + weekStart - e.day(), 'day');
  const dates = getDateRange(start, end);

  return {
    dates: dates,
    selectedMonth: moment(date).month()
  };
}

const getDateRange = (start, end) => {
  let date = start.toDate();
  let dates = [date];
  do {
    date = moment(date).add(1, 'day');
    dates.push(date.toDate());
  } while (moment(date).isBefore(end));
  return dates;
};

export { getDates };
