import React, { useContext } from 'react';
import styled from 'styled-components';
import { DateCalendarContext } from '../../context/dateCalendarContext';

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  width: 100%;
  & > div {
    cursor: pointer;
  }
`;

export default function Footer() {
  const { date, setShowCalendar, options } = useContext(DateCalendarContext);

  const handleCancel = () => {
    setShowCalendar(false);
  };

  const handleContinue = () => {
    options.onSelect && options.onSelect(date);
    setShowCalendar(false);
  };

  return (
    options.manualContinue && (
      <Wrapper>
        <div onClick={handleCancel}>{options.actionButtonCancel}</div>
        <div onClick={handleContinue}>{options.actionButtonContinue}</div>
      </Wrapper>
    )
  );
}
