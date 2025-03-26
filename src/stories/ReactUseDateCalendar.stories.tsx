import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment';
import { ReactUseDateCalendar } from '..';

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

export const FillValue: Story = {
  render: () => {
    return <ReactUseDateCalendar value="01.05.1990" />;
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

export const CustomClassName: Story = {
  render: () => {
    return <ReactUseDateCalendar className="custom-datepicker-input" />;
  }
};

export const ActionButtonExample: Story = {
  render: () => {
    return (
      <ReactUseDateCalendar
        manualContinue
        actionButtonCancel={<div>Cancel</div>}
        actionButtonContinue={<div>Continue</div>}
      />
    );
  }
};

export const CustomInput: Story = {
  render: () => {
    return (
      <ReactUseDateCalendar
        customInput={(args) => (
          <input
            style={{ width: '120px', padding: '6px 8px', background: '#ededed', border: 'none', outline: 'none' }}
            {...args}
          />
        )}
      />
    );
  }
};
