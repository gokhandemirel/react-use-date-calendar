export interface IReactUseDateCalendarProps {
  className?: string;
  format?: string;
  locale?: string;
  minDate?: Date;
  maxDate?: Date;
  specialDays?: string[];
  onSelect?: (e: any) => void;
}

export interface IDateCalendarContextProps {
  options?: IReactUseDateCalendarProps;
  dates?: Date[];
  selectedMonth?: number;
  date?: Date;
  setDate?: (x: any) => void;
  onSelect?: (x: any) => void;
  children?: React.ReactNode;
}
