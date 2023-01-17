import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box } from './Box';
import BoxProps from './types';

export default {
  title: 'Components / Layout / Box',
  component: Box,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: 'Lorem ipsum dolor sit amet.',
};

export const custom = Template.bind({});

custom.args = {
  children: 'Lorem ipsum dolor sit amet.',
  width: '320px',
  height: '160px',
  padding: '24px',
  borderRadius: '4px',
  background: 'white',
  border: '1px solid black',
};
