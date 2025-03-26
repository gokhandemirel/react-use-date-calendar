import React from 'react';

export type TDate = Date;

export interface IReactUseDateCalendarProps {
  value?: string;
  className?: string;
  weekStart?: number;
  dayOfWeekFormatter?: string;
  format?: string;
  locale?: string;
  minDate?: Date;
  maxDate?: Date;
  specialDays?: string[];
  onSelect?: (date: TDate) => void;
  renderDay?: (date: TDate) => React.ReactNode;
  manualContinue?: boolean;
  actionButtonCancel?: string | React.ReactNode;
  actionButtonContinue?: string | React.ReactNode;
  customInput?: (args: any) => any;
  inline?: boolean;
}

export interface IDateCalendarContextProps {
  options?: IReactUseDateCalendarProps;
  dates?: TDate[];
  selectedMonth?: number;
  date?: TDate;
  setDate?: (x: TDate) => void;
  showCalendar?: boolean;
  setShowCalendar?: (x: boolean) => void;
  calendarPosition?: ICalendarPosition;
  setCalendarPosition?: (x: ICalendarPosition) => void;
  onSelect?: () => void;
  children?: React.ReactNode;
}

export interface ICalendarPosition {
  top?: number;
}
