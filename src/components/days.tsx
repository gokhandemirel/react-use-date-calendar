import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment/min/moment-with-locales';
import { DateCalendarContext } from '../context/dateCalendarContext';
import { theme } from '../theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 2px;
`;

const Day = styled.div<{ $today?: boolean; $selected?: boolean; $outsideMonth?: boolean; $specialDay?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: solid 1px transparent;
  border-radius: 50%;
  color: ${theme.colors.dark};
  cursor: pointer;
  user-select: none;
  position: relative;
  ${({ $today }) =>
    $today &&
    css`
      font-weight: 600;
    `}
  ${({ $selected }) =>
    $selected &&
    css`
      border-color: ${theme.colors.dark} !important;
    `}
  ${({ $outsideMonth }) =>
    !$outsideMonth &&
    css`
      color: ${theme.colors.greyLight};
    `}
  ${({ $specialDay }) =>
    $specialDay &&
    css`
      &:before {
        content: '';
        position: absolute;
        bottom: 2px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${theme.colors.beige};
      }
    `}
  &:hover {
    border-color: ${theme.colors.grey};
  }
`;

export default function Days() {
  const { options, dates, date, setDate, selectedMonth } = useContext(DateCalendarContext);
  return (
    <Wrapper>
      <DayWrapper>
        {dates.map((item, index) => {
          const now = moment(new Date());
          const today = now.isSame(item, 'day');
          const selected = moment(item).isSame(date, 'day');
          const outsideMonth = moment(item).month() === selectedMonth;
          const specialDay = options.specialDays.includes(moment(item).format('DD.MM.YYYY'));
          return (
            <Day
              key={index}
              onClick={() => {
                setDate(item);
                options.onSelect && options.onSelect(moment(date).locale(options.locale).format(options.format));
              }}
              $today={today}
              $selected={selected}
              $outsideMonth={outsideMonth}
              $specialDay={specialDay}
            >
              {item ? moment(item).format('D') : ''}
            </Day>
          );
        })}
      </DayWrapper>
    </Wrapper>
  );
}
