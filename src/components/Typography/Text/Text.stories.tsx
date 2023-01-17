import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Text } from './Text';
import TextProps from './types';

export default {
  title: 'Components / Typography / Text',
  component: Text,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const basic = Template.bind({});

basic.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae.',
};

export const custom = Template.bind({});

custom.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae.',
  fontSize: '24px',
  fontWeight: 500,
  color: 'gray',
};
