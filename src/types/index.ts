import React from "react";

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
  onSelect?: (e: any) => void;
  renderDay?: (date: Date) => React.ReactNode;
  manualContinue?: boolean;
  actionButtonCancel?: string | React.ReactNode;
  actionButtonContinue?: string | React.ReactNode;
}

export interface IDateCalendarContextProps {
  options?: IReactUseDateCalendarProps;
  dates?: Date[];
  selectedMonth?: number;
  date?: Date;
  setDate?: (x: any) => void;
  showCalendar?: boolean;
  setShowCalendar?: (x: any) => void;
  onSelect?: (x: any) => void;
  children?: React.ReactNode;
}
