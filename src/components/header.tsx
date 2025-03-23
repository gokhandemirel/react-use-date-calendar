import React, { useContext, useEffect, useRef, useState } from 'react';
import moment from 'moment/min/moment-with-locales';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styled from 'styled-components';
import { DateCalendarContext } from '../context/dateCalendarContext';
import { theme } from '../theme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: solid 1px transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
  user-select: none;
  font-size: 18px;
  &:hover {
    border-color: ${theme.colors.dark};
  }
`;

const YearMonth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  cursor: pointer;
`;

const Popover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 240px;
  padding: 10px;
  background-color: ${theme.colors.white};
  border: solid 1px ${theme.colors.dark};
  border-radius: 10px;
  position: absolute;
  z-index: 10;
  top: 44px;
  left: 0;
  overflow: auto;
  box-sizing: border-box;
  & > div {
    cursor: pointer;
  }
`;

export default function Header() {
  const { options, date, setDate } = useContext(DateCalendarContext);
  const [showMonth, setShowMonth] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const min = moment(options.minDate);
  const max = moment(options.maxDate);
  const yearDiff = max.diff(min, 'year') + 1;
  const months = Array.from({ length: 12 }, (_, index) => index);
  const years = Array.from({ length: yearDiff }, (_, index) => min.year() + index);
  const ref = useRef(null);

  const handlePrev = () => {
    setDate(moment(date).subtract(1, 'month'));
  };

  const handleNext = () => {
    setDate(moment(date).add(1, 'month'));
  };

  useEffect(() => {
    setTimeout(() => {
      const year = moment(date).year();
      const element = document.querySelector<HTMLElement>(`[data-year='${year}']`);
      if (element) {
        ref.current.scrollTo(0, element.offsetTop - 6);
      }
    }, 0);
  }, [showYear]);

  return (
    <Wrapper>
      <Button onClick={handlePrev}>
        <FaAngleLeft />
      </Button>
      <YearMonth>
        <span
          onClick={() => {
            setShowYear(false);
            setShowMonth(!showMonth);
          }}
        >
          {moment(date).locale(options.locale).format('MMMM')}
        </span>
        <span
          onClick={() => {
            setShowMonth(false);
            setShowYear(!showYear);
          }}
        >
          {moment(date).locale(options.locale).format('YYYY')}
        </span>
      </YearMonth>
      <Button onClick={handleNext}>
        <FaAngleRight />
      </Button>
      {showMonth && (
        <Popover>
          {months.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setDate(moment(date).month(item));
                setShowMonth(false);
              }}
            >
              {moment(new Date()).locale(options.locale).month(item).format('MMMM')}
            </div>
          ))}
        </Popover>
      )}
      {showYear && (
        <Popover ref={ref}>
          {years.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setDate(moment(date).year(item));
                setShowYear(false);
              }}
              data-year={item}
              style={{ fontWeight: item === moment(date).year() ? 600 : '' }}
            >
              {item}
            </div>
          ))}
        </Popover>
      )}
    </Wrapper>
  );
}
