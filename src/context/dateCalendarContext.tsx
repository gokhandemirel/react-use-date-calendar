import React from 'react';
import { createContext, useState } from 'react';
import { getDates } from '../utils/getDates';
import { IDateCalendarContextProps } from '../types';

const DateCalendarContext = createContext<IDateCalendarContextProps>({});

const DateCalendarProvider = ({ options, children }: IDateCalendarContextProps) => {
  const [date, setDate] = useState<Date>();
  const [calendarPosition, setCalendarPosition] = useState<object>({});
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const { dates, selectedMonth } = getDates(date, options.weekStart);
  return (
    <DateCalendarContext.Provider
      value={{
        options,
        date,
        setDate,
        showCalendar,
        setShowCalendar,
        calendarPosition,
        setCalendarPosition,
        dates,
        selectedMonth
      }}
    >
      {children}
    </DateCalendarContext.Provider>
  );
};

export { DateCalendarContext, DateCalendarProvider };
