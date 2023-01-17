import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Select } from './Select';
import { SelectProps } from './types';

export default {
  title: 'Components / Form / Select',
  component: Select,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const custom = Template.bind({});

custom.args = {
  width: '600px',
  data: [
    { id: 1, value: 'banana' },
    { id: 2, value: 'goiaba' },
    { id: 3, value: 'jaca' },
  ],
  fontSize: '16px',
  color: 'black',
};
