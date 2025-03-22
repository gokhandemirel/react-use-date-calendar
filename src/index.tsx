import React from 'react';
import DateCalendar from './components/dateCalendar';
import { IReactUseDateCalendarProps } from './types';

function ReactUseDateCalendar(props: IReactUseDateCalendarProps) {
  return <DateCalendar {...props} />;
}

export { ReactUseDateCalendar };
