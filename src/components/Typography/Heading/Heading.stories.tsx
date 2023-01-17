import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Heading } from './Heading';
import HeadingProps from './types';

export default {
  title: 'Components / Typography / Heading ',
  component: Heading,
  argTypes: {
    props: {
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const basic = Template.bind({});

basic.args = {
  type: 'h1',
  children: 'Lorem ipsum dolor sit, amet.',
};

export const custom = Template.bind({});

custom.args = {
  type: 'h2',
  children: 'Lorem ipsum dolor sit, amet.',
  color: 'gray',
  fontSize: '16px',
};
