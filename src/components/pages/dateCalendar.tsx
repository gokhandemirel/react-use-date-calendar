import React, { useContext, useEffect, useState } from 'react';
import Calendar from '../organism/calendar';
import Textbox from '../atoms/textbox';
import useClickOutside from '../../hooks/useClickOutside';
import styled from 'styled-components';
import { DateCalendarContext } from '../../context/dateCalendarContext';
import moment from 'moment';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function DateCalendar() {
  const { options, setDate, showCalendar, setShowCalendar } = useContext(DateCalendarContext);
  const ref = useClickOutside(() => setShowCalendar(false));

  useEffect(() => {
    if (options.value) {
      setDate(moment(options.value, options.format));
    }
  }, [options]);

  return (
    <Wrapper ref={ref}>
      <Textbox onFocus={() => setShowCalendar(true)} />
      {showCalendar && <Calendar />}
    </Wrapper>
  );
}
