# react-use-date-calendar

## Getting Started

```bash
  npm install react-use-date-calendar
```

## Usage

```jsx
import React from 'react';
import { ReactUseDateCalendar } from 'react-use-date-calendar';

const Component = () => {
  return (
    <ReactUseDateCalendar />
  );
};
```

## Props

- `className?` - Date calendar parent container className
- `weekStart?` - Week start day index number
- `dayOfWeekFormatter?` - Week title format
- `format?` - Date format
- `locale?` - Moment localization locale key
- `minDate?` - Date object
- `maxDate?` - Date object 
- `specialDays?` - Special date string array[] / this date format
- `onSelect?` - Selected date object callback

## LICENSE

[MIT](LICENSE)