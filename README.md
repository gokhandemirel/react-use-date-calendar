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
- `value?` - Value format property
- `className?` - Date calendar parent container className
- `dayOfWeekFormatter?` - Week title format
- `format?` - Date format
- `locale?` - Moment localization locale key
- `minDate?` - Date object
- `maxDate?` - Date object 
- `specialDays?` - Special date string array[] / this date format
- `onSelect?` - Selected date object callback
- `manualContinue?` - Calendar auto close disabled closing status depends on action buttons
- `actionButtonCancel?` - React.Node element
- `actionButtonContinue?` - React.Node element

## LICENSE

[MIT](LICENSE)