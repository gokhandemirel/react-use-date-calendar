import { useContext } from 'react';
import { DateCalendarContext } from '../context/dateCalendarContext';

export const useDateCalendar = () => useContext(DateCalendarContext);
