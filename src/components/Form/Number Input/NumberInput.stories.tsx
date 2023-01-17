import { Meta, Story } from '@storybook/react';
import React from 'react';

import { NumberInput } from './NumberInput';
import NumberInputProps from './types';

export default {
  title: 'Components / Form / NumberInput',
  component: NumberInput,
  argTypes: {
    props: {
      background: { control: 'color' },
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

export const basic = Template.bind({});

basic.args = {
  placeholder: 'Sample Numberinput',
};

export const custom = Template.bind({});

custom.args = {
  placeholder: 'Only Numbers',
  required: true,
  width: '160px',
  height: '40px',
  padding: '0 4px',
  borderRadius: '4px',
  background: 'white',
  border: 'none',
  color: 'gray',
  fontSize: '12px',
};
