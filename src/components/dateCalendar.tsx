import React from 'react';
import styled from 'styled-components';
import Days from './days';
import Header from './header';
import { DateCalendarProvider } from '../context/dateCalendarContext';
import { IReactUseDateCalendarProps } from '../types';
import { GlobalStyles } from '../styles/globalStyles';
import { theme } from '../theme';
import DayOfWeek from './dayOfWeek';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  height: 290px;
  padding: 10px;
  background-color: ${theme.colors.white};
  border: solid 1px ${theme.colors.dark2};
  border-radius: 10px;
`;

function DateCalendar({
  className = '',
  weekStart = 1,
  dayOfWeekFormatter = 'dd',
  format = 'DD/MM/YYYY',
  locale = 'en',
  minDate = new Date(1900, 1, 1),
  maxDate = new Date(2099, 1, 1),
  specialDays = [],
  onSelect,
  renderDay
}: IReactUseDateCalendarProps) {
  return (
    <DateCalendarProvider
      options={{
        className,
        weekStart,
        dayOfWeekFormatter,
        format,
        locale,
        minDate,
        maxDate,
        specialDays,
        onSelect,
        renderDay
      }}
    >
      <GlobalStyles />
      <Wrapper className={className}>
        <Header />
        <DayOfWeek />
        <Days />
      </Wrapper>
    </DateCalendarProvider>
  );
}

export default DateCalendar;
