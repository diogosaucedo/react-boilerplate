import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Label } from './Label';
import LabelProps from './types';

export default {
  title: 'Components / Form / Label',
  component: Label,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const basic = Template.bind({});
basic.args = {
  children: 'Label: ',
};

export const custom = Template.bind({});
custom.args = {
  children: 'Label: ',
  color: 'white',
  fontSize: '1.4rem',
  for: 'your_component',
};
