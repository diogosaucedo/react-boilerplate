import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Divider } from './Divider';
import DividerProps from './types';

export default {
  title: 'Components / Data Display / Divider',
  component: Divider,
  argTypes: {
    props: {},
  },
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const basic = Template.bind({});
basic.args = {};

export const custom = Template.bind({});
custom.args = {
  width: '80%',
  opacity: 0.6,
};
