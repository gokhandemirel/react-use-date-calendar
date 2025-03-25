import React from 'react';
import styled from 'styled-components';
import { DateCalendarProvider } from './context/dateCalendarContext';
import { IReactUseDateCalendarProps } from './types';
import { GlobalStyles } from './styles/globalStyles';
import DateCalendar from './components/pages/dateCalendar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

function ReactUseDateCalendar({
  value = '',
  className = '',
  weekStart = 1,
  dayOfWeekFormatter = 'dd',
  format = 'DD.MM.YYYY',
  locale = 'en',
  minDate = new Date(1900, 1, 1),
  maxDate = new Date(2099, 1, 1),
  specialDays = [],
  onSelect,
  renderDay,
  manualContinue = false,
  actionButtonCancel = 'Cancel',
  actionButtonContinue = 'Continue'
}: IReactUseDateCalendarProps) {
  return (
    <DateCalendarProvider
      options={{
        value,
        className,
        weekStart,
        dayOfWeekFormatter,
        format,
        locale,
        minDate,
        maxDate,
        specialDays,
        onSelect,
        renderDay,
        manualContinue,
        actionButtonContinue,
        actionButtonCancel
      }}
    >
      <Wrapper>
        <GlobalStyles />
        <DateCalendar />
      </Wrapper>
    </DateCalendarProvider>
  );
}

export default ReactUseDateCalendar;
