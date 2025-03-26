import React from 'react';

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
  onSelect?: (e: Date) => void;
  renderDay?: (date: Date) => React.ReactNode;
  manualContinue?: boolean;
  actionButtonCancel?: string | React.ReactNode;
  actionButtonContinue?: string | React.ReactNode;
  customInput?: (args: any) => any;
}

export interface IDateCalendarContextProps {
  options?: IReactUseDateCalendarProps;
  dates?: Date[];
  selectedMonth?: number;
  date?: Date;
  setDate?: (x: Date) => void;
  showCalendar?: boolean;
  setShowCalendar?: () => void;
  calendarPosition?: ICalendarPosition;
  setCalendarPosition?: (x: ICalendarPosition) => void;
  onSelect?: () => void;
  children?: React.ReactNode;
}

export interface ICalendarPosition {
  top?: number;
}
