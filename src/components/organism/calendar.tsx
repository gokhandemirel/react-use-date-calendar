import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Days from '../molecules/days';
import Header from './header';
import { theme } from '../../theme';
import DayOfWeek from '../atoms/dayOfWeek';
import Footer from '../atoms/footer';
import { DateCalendarContext } from '../../context/dateCalendarContext';
import { ICalendarPosition } from '../../types';

const Wrapper = styled.div<{ $calendarPosition?: ICalendarPosition; $inline?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  padding: 10px 10px 14px 10px;
  background-color: ${theme.colors.white};
  border: solid 1px ${theme.colors.dark2};
  border-radius: 10px;
  ${({ $inline, $calendarPosition }) =>
    !$inline &&
    css`
      position: absolute;
      top: ${$calendarPosition.top + 12}px;
      left: 0;
      z-index: 50;
    `}
`;

export default function Calendar() {
  const { options, calendarPosition } = useContext(DateCalendarContext);
  return (
    <Wrapper $calendarPosition={calendarPosition} $inline={options.inline}>
      <Header />
      <DayOfWeek />
      <Days />
      <Footer />
    </Wrapper>
  );
}
