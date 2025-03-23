import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactUseDateCalendar } from '..';
import moment from 'moment';

const meta = {
  title: 'Example/ReactUseDateCalendar',
  component: ReactUseDateCalendar,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ReactUseDateCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <ReactUseDateCalendar />;
  }
};

export const MinMaxDateExample: Story = {
  render: () => {
    const minDate = new Date('2022/03/09');
    const maxDate = new Date('2029/03/09');
    return <ReactUseDateCalendar minDate={minDate} maxDate={maxDate} />;
  }
};

export const SpecialDays: Story = {
  render: () => {
    return (
      <ReactUseDateCalendar className="Dtee" specialDays={['29.03.2025', '30.03.2025', '31.03.2025', '01.04.2025']} />
    );
  }
};

export const CustomDayOfWeek: Story = {
  render: () => {
    return <ReactUseDateCalendar dayOfWeekFormatter="ddd" />;
  }
};

export const RenderDay: Story = {
  render: () => {
    return <ReactUseDateCalendar renderDay={(date) => <div>{moment(date).format('dd')}</div>} />;
  }
};
