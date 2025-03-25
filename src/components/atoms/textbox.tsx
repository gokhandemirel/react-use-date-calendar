import React, { InputHTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { DateCalendarContext } from '../../context/dateCalendarContext';
import moment from 'moment';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Wrapper = styled.input<IInputProps>`
  padding: 6px 8px;
  background-color: ${theme.colors.white};
  border: solid 1px ${theme.colors.dark2};
  border-radius: 6px;
  font-size: 16px;
  line-height: 20px;
  outline: none;
`;

export default function Textbox(props: IInputProps) {
  const { options, date } = useContext(DateCalendarContext);
  return <Wrapper {...props} value={moment(date).format(options.format)} type="text" readOnly />;
}
