import React, { useContext } from 'react';
import styled from 'styled-components';
import Days from '../molecules/days';
import Header from './header';
import { theme } from '../../theme';
import DayOfWeek from '../atoms/dayOfWeek';
import Footer from '../atoms/footer';
import { DateCalendarContext } from '../../context/dateCalendarContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  padding: 10px 10px 14px 10px;
  background-color: ${theme.colors.white};
  border: solid 1px ${theme.colors.dark2};
  border-radius: 10px;
  position: absolute;
  top: 44px;
  z-index: 50;
`;

export default function Calendar() {
  const { options } = useContext(DateCalendarContext);
  return (
    <Wrapper className={options.className}>
      <Header />
      <DayOfWeek />
      <Days />
      <Footer />
    </Wrapper>
  );
}
