import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment/min/moment-with-locales';
import { DateCalendarContext } from '../../context/dateCalendarContext';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 2px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default function DayOfWeek() {
  const { options } = useContext(DateCalendarContext);
  return (
    <Wrapper>
      {[...Array(7)].map((_, index) => (
        <Title key={index}>
          {moment()
            .add(index - 1, 'day')
            .locale(options.locale)
            .format(options.dayOfWeekFormatter)}
        </Title>
      ))}
    </Wrapper>
  );
}
