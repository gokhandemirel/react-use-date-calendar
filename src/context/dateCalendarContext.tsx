import React, { useMemo } from 'react';
import { createContext, useState } from 'react';
import { getDates } from '../utils/getDates';
import { IDateCalendarContextProps } from '../types';

const DateCalendarContext = createContext<IDateCalendarContextProps>({});

const DateCalendarProvider = ({ options, children }: IDateCalendarContextProps) => {
  const [date, setDate] = useState<Date>();
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const { dates, selectedMonth } = useMemo(() => getDates(date, options.weekStart), [date]);
  return (
    <DateCalendarContext.Provider
      value={{ options, date, setDate, showCalendar, setShowCalendar, dates, selectedMonth }}
    >
      {children}
    </DateCalendarContext.Provider>
  );
};

export { DateCalendarContext, DateCalendarProvider };
