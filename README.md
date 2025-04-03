# react-use-date-calendar

## Getting Started

```bash
  npm install react-use-date-calendar
```

## Requirements

- `react >= 18.3.1`
- `react-dom >= 18.3.1`

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
- `weekStart?` - Week start date index
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
- `customInput?` - Custom html input element, required call argument props
- `inline?` - Default open calendar (relative position)

## LICENSE

[MIT](LICENSE)