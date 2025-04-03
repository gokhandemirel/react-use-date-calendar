# React Use Date Calendar

A simple and customizable React hook-based date picker calendar. This package allows you to integrate a date picker with flexible configuration options into your React applications.

## Features

- Built-in support for localization using Moment.js.
- Fully customizable UI with support for custom input elements and buttons.
- Easy integration with your React applications.
- Supports min/max dates and special date highlighting.
- Lightweight with TypeScript support.

## Installation

```bash
npm install react-use-date-calendar
```

### Requirements

- React >= 18.3.1
- React-DOM >= 18.3.1

## Usage

```jsx
import React from 'react';
import { ReactUseDateCalendar } from 'react-use-date-calendar';

const MyComponent = () => {
  return <ReactUseDateCalendar />;
};
```

## Props

- **`value?`**: The current selected date.
- **`className?`**: Custom class name for the calendar container.
- **`weekStart?`**: Index for the first day of the week (default is 0 for Sunday).
- **`dayOfWeekFormatter?`**: Function to format the weekday title (e.g., `['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']`).
- **`format?`**: Date format string (e.g., `DD/MM/YYYY`).
- **`locale?`**: Moment.js locale key (e.g., `en`, `fr`, etc.).
- **`minDate?`**: Minimum selectable date as a `Date` object.
- **`maxDate?`**: Maximum selectable date as a `Date` object.
- **`specialDays?`**: Array of special date strings (e.g., `['2025-04-01', '2025-12-25']`).
- **`onSelect?`**: Callback function that is called when a date is selected, with the selected date object.
- **`manualContinue?`**: If `true`, the calendar will not auto-close after selecting a date, requiring manual action to close.
- **`actionButtonCancel?`**: Custom React node to display a cancel button (e.g., a custom button component).
- **`actionButtonContinue?`**: Custom React node to display a continue button.
- **`customInput?`**: A custom input component that accepts props from the date picker.
- **`inline?`**: If `true`, the calendar will always be open in a relative position to the input element.

## Example

Here’s an example of using the calendar with some custom settings:

```jsx
import React from 'react';
import { ReactUseDateCalendar } from 'react-use-date-calendar';

const ExampleComponent = () => {
  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
  };

  return (
    <ReactUseDateCalendar
      value={new Date()}
      format="YYYY-MM-DD"
      minDate={new Date('2025-01-01')}
      maxDate={new Date('2025-12-31')}
      onSelect={handleDateSelect}
      specialDays={['2025-04-01', '2025-12-25']}
      inline={true}
    />
  );
};
```

## License

[MIT LICENSE](LICENSE)